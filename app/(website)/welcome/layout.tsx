import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "about",
  description: "about us, who we are"
};

export default function WelcomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  );
}
