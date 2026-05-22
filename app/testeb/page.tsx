"use client";

import dynamic from "next/dynamic";

const TestebPageClient = dynamic(
  () => import("./TestebPageClient"),
  { ssr: false }
);

export default function TestebPage() {
  return <TestebPageClient />;
}
