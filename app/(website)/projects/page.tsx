import dynamic from "next/dynamic";

const SSR = dynamic(() => import("./projects"), { ssr: true});
export default function About() {

  return (
    <>
      <SSR />
    </>
  );
}