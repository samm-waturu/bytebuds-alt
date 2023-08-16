"use client";

import "@/utils/jQuery/loader";
import Index from "@/components";
import { useEffect } from "react";
import Header from "@/components/Header";
import SideNav from "@/components/Sidenav";
import Script from "next/script";

export default function Home() {
  useEffect(() => {
    typeof document !== undefined ? require("bootstrap/dist/js/bootstrap.bundle.min") : null;
    typeof document !== undefined ? require("@/utils/fullScroll/jquery.pagepiling.min") : null;
    typeof document !== undefined ? require("@/utils/custom js/custom") : null;
  }, []);

  return(
    <>

      <div className="h-100">

        <Header />

        {/*<SideNav />*/}

        <Index />

        {/*<Script src={"https://cdnjs.cloudflare.com/ajax/libs/pagePiling.js/1.5.6/jquery.pagepiling.min.js"} strategy={"beforeInteractive"} />*/}
        {/*<Script src={"https://cdn.jsdelivr.net/gh/samm-waturu/cdn/script.js"} strategy={"beforeInteractive"} />*/}

      </div>

    </>
  )


}