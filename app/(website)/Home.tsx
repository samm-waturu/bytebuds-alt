"use client";

import "@/utils/jQuery/loader";
import Index from "@/components/Index";
import { useEffect } from "react";
import Header from "@/components/Header";

export default function Home() {
  useEffect(() => {
    typeof document !== undefined ? require("bootstrap/dist/js/bootstrap.bundle.min") : null;
    typeof document !== undefined ? require("@/utils/fullScroll/jquery.pagepiling.min") : null;
    typeof document !== undefined ? require("@/utils/custom js/custom") : null;
  }, []);

  return(

      <div className="h-100">
        <Header />
        <Index />
      </div>

  )


}