"use client";

import { useEffect, useMemo, useState } from "react";

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

export function CountryCodeSelect() {
  const [countries, setCountries] =
    useState<CountryOption[]>(fallbackCountries);
  const [selectedCountry, setSelectedCountry] = useState("NG:+234");

  useEffect(() => {
    let isMounted = true;

    async function loadCountries() {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,idd,cca2,flag",
        );

        if (!response.ok) {
          throw new Error("Unable to load countries");
        }

        const data = (await response.json()) as RestCountry[];
        const nextCountries = data
          .map(mapCountry)
          .filter((country): country is CountryOption => Boolean(country))
          .sort((first, second) => first.name.localeCompare(second.name));

        if (isMounted && nextCountries.length > 0) {
          setCountries(nextCountries);
        }
      } catch {
        if (isMounted) {
          setCountries(fallbackCountries);
        }
      }
    }

    loadCountries();

    return () => {
      isMounted = false;
    };
  }, []);

  const selectedCode = useMemo(
    () => selectedCountry.split(":")[1] ?? "+234",
    [selectedCountry],
  );

  return (
    <div className="flex h-[46px] rounded-[3px] border border-[#bfc7d4] bg-white transition focus-within:border-[#ff3339] focus-within:ring-1 focus-within:ring-[#ff3339]">
      <select
        name="country"
        aria-label="Country"
        value={selectedCountry}
        onChange={(event) => setSelectedCountry(event.target.value)}
        className="w-[122px] min-w-0 border-0 bg-white px-2 text-[13px] text-[#111] outline-none sm:w-[150px]"
      >
        {countries.map((country) => (
          <option
            key={`${country.cca2}-${country.code}`}
            value={`${country.cca2}:${country.code}`}
          >
            {country.flag} {country.name} {country.code}
          </option>
        ))}
      </select>
      <input type="hidden" name="countryCode" value={selectedCode} />
      <input
        type="tel"
        name="contactDetails"
        aria-label="Contact Details"
        placeholder="Enter phone number"
        className="min-w-0 flex-1 border-0 border-l border-[#d7dce5] bg-white px-3 text-[14px] text-[#111] outline-none placeholder:text-[#a9b2c0]"
      />
    </div>
  );
}
