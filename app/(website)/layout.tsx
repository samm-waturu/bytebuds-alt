import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "home",
  description: "Landing page"
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>{children}</>
  );
}
