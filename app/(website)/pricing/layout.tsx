import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "pricing",
  description: "affordable pricing plans "
};

export default function PriceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>{children}</>
  );
}