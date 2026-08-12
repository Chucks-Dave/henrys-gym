export const runtime = "nodejs";

type CountryOption = {
  name: string;
  code: string;
  flag: string;
  cca2: string;
};

type RestCountry = {
  name?: {
    common?: string;
  };
  idd?: {
    root?: string;
    suffixes?: string[];
  };
  flag?: string;
  cca2?: string;
};

const fallbackCountries: CountryOption[] = [
  { name: "United States", code: "+1", flag: "US", cca2: "US" },
  { name: "Nigeria", code: "+234", flag: "NG", cca2: "NG" },
  { name: "United Kingdom", code: "+44", flag: "GB", cca2: "GB" },
  { name: "Canada", code: "+1", flag: "CA", cca2: "CA" },
  { name: "Ghana", code: "+233", flag: "GH", cca2: "GH" },
  { name: "South Africa", code: "+27", flag: "ZA", cca2: "ZA" },
];

function buildCallingCode(country: RestCountry) {
  const root = country.idd?.root;
  const suffix = country.idd?.suffixes?.[0];

  if (!root || !suffix) {
    return null;
  }

  return `${root}${suffix}`;
}

function mapCountry(country: RestCountry): CountryOption | null {
  const code = buildCallingCode(country);
  const name = country.name?.common;
  const cca2 = country.cca2;

  if (!code || !name || !cca2) {
    return null;
  }

  return {
    name,
    code,
    flag: country.flag ?? cca2,
    cca2,
  };
}

export async function GET() {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,idd,cca2,flag",
      {
        next: {
          revalidate: 60 * 60 * 24,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Unable to load countries");
    }

    const data = (await response.json()) as RestCountry[];
    const countries = data
      .map(mapCountry)
      .filter((country): country is CountryOption => Boolean(country))
      .sort((first, second) => first.name.localeCompare(second.name));

    return Response.json({ countries });
  } catch {
    return Response.json({ countries: fallbackCountries });
  }
}
