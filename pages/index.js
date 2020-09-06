import React from "react";
import { Layout } from "../components/Layout";
import { HeroImage } from "../components/Header";
import { Listing } from "../components/Listing";
import Featured from "../components/Featured/Featured";

export default function Home() {
  return (
    <>
      <Layout>
        <HeroImage></HeroImage>
        <Featured></Featured>
        <Listing></Listing>
      </Layout>
    </>
  );
}
