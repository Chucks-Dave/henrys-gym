"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

export default function GlobalError({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  useEffect(() => {
    if (
      process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
      process.env.NEXT_PUBLIC_POSTHOG_HOST
    ) {
      posthog.captureException(error);
    }
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 text-center">
          <h1 className="text-3xl font-bold">Something went wrong</h1>
          <p className="mt-3 text-lg">
            We couldn&apos;t load this page. Please try again.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 rounded-md bg-[var(--brand-red)] px-5 py-3 font-semibold text-white hover:bg-[#f02027]"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
