import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
  description: "Our Contact details"
};

export default function PriceLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  );
}