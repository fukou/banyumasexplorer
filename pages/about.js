import React from "react";
import { Layout } from "../components/Layout";

import tw, { css, styled, theme } from "twin.macro";

const Root = styled.section(() => [
  tw`max-w-6xl mx-auto mt-6 p-8 md:p-16`,
  css`
    h1 {
      font-weight: bold;
      font-size: 1.85em;
      margin-bottom: 1rem;
    }
  `,
]);

export default function Home() {
  return (
    <>
      <Layout pageTitle="Tentang kami">
        <Root id="main">
          <h1>Tentang kami</h1>
          <p>
            Banyumas Explorer adalah aplikasi mobile untuk memberikan informasi
            tentang tempat wisata, khususnya Banyumas. Pengguna juga dapat
            memesan tiket dengan memilih tempat yang mereka minati.
          </p>
        </Root>
      </Layout>
    </>
  );
}
