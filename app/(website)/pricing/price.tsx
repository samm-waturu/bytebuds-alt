"use client";

import Pricing from "@/components/pricing";
import { Bundle } from "@/utils/Bootstrap/BundleMin";
import Footer from "@/components/Footer";

export default function PricePage() {
  Bundle();
  return (
    <>
      <Pricing />
      <Footer page1={"projects"} page2={"contact"} />
    </>
  );
}