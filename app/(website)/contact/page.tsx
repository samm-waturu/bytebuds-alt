import dynamic from "next/dynamic";

const SSR = dynamic(() => import("./contact"), { ssr: true});
export default function About() {

  return (
    <>
      <SSR />
    </>
  );
}