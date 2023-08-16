import dynamic from "next/dynamic";

const SSR = dynamic(() => import("./welcome"), { ssr: true});
export default function About() {

  return (
    <>
      <SSR />
    </>
  );
}