/*

This file contains custom fonts

 */

import localFont from "next/font/local";

// Font files can be co-allocated inside `app`

export const recoleta = localFont({
  src: [

    {
      path: "./recoleta/Recoleta-Thin.woff2",
      style: "normal",
      weight: "200"
    },
    {
      path: "./recoleta/Recoleta-Thin.woff2",
      style: "italic",
      weight: "200"
    },
    {
      path: "./recoleta/Recoleta-Medium.woff2",
      style: "normal",
      weight: "400"
    },
    {
      path: "./recoleta/Recoleta-Medium.woff2",
      style: "italic",
      weight: "400"
    },
    {
      path: "./recoleta/Recoleta-SemiBold.woff2",
      style: "normal",
      weight: "600"
    },
    {
      path: "./recoleta/Recoleta-Bold.woff2",
      style: "normal",
      weight: "800"
    }

  ]
});

export const gordita = localFont({
  src: [
    {
      path: "./gordita/gordita_light-webfont.woff2",
      style: "normal",
      weight: "200"
    },
    {
      path: "./gordita/gordita_medium-webfont.woff2",
      style: "normal",
      weight: "400"
    },
    {
      path: "./gordita/gordita_medium-webfont.woff2",
      style: "italic",
      weight: "400"
    },
    {
      path: "./gordita/gordita_bold-webfont.woff2",
      style: "normal",
      weight: "800"
    }

  ]
});
