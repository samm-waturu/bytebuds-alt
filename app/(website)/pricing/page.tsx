import dynamic from "next/dynamic";

const SSR = dynamic(() => import("./price"), { ssr: true});
export default function About() {

  return (
    <>
      <SSR />
    </>
  );
}