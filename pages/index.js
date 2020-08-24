import React from "react";
import { HeaderNavigation, HeroImage } from "../components/Header";
import Featured from "../components/Featured/Featured";

import reset from "../styles/reset";

export default function Home() {
  return (
    <>
      <style jsx global>
        {reset}
      </style>
      <HeaderNavigation title="Logo"></HeaderNavigation>
      <HeroImage></HeroImage>
      <Featured></Featured>
    </>
  );
}
