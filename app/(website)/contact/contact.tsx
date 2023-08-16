"use client";
import { Bundle } from "@/utils/Bootstrap/BundleMin";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  Bundle();
  return (
    <>
      <Contact />
      <Footer page1={"pricing"} page2={"null"} />
    </>
  );
}