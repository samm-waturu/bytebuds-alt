import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("./Home"), { ssr: false });
export default function Home() {

  return (<NoSSR />);
}