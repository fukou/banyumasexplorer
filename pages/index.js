import React from "react";
import { HeaderNavigation, HeroImage } from "../components/Header";

import reset from "../styles/reset";

export default function Home() {
  return (
    <>
      <style jsx global>
        {reset}
      </style>
      <HeaderNavigation title="Banyumas Explorer"></HeaderNavigation>
      <HeroImage></HeroImage>
    </>
  );
}
