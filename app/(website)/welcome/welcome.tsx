"use client";

import About from "@/components/About";
import { Bundle } from "@/utils/Bootstrap/BundleMin";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function WelcomePage() {
  Bundle();
  return (
    <>

      <About />

      <Footer page1={" "} page2={"projects"} />

    </>

  );
}
