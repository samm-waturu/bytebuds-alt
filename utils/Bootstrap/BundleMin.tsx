"use client";

import { useEffect } from "react";
export const Bundle = () => {
  useEffect(() => {
    typeof document !== undefined ? require("bootstrap/dist/js/bootstrap.bundle.min") : null;
  }, []);
};