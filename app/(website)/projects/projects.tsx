"use client";
import { Bundle } from "@/utils/Bootstrap/BundleMin";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  Bundle()
  return (
    <>
      <Projects />
      <Footer page1={`welcome`} page2={"pricing"} />
    </>

  );
}
