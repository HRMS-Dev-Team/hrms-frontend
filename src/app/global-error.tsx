"use client";

import NextError from "next/error";
import { routing } from "@/lib/I18nRouting";

export default function GlobalError(props: {
  error: Error & { digest?: string };
}) {
  return (
    <html lang={routing.defaultLocale}>
      <body>
        {props.error.digest}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
