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
      <Layout pageTitle="About">
        <Root id="main">
          <h1>About us</h1>
          <p>
            Banyumas Explorer is an a mobile apps to provide information about
            tourist attractions, specifically Banyumas. The users can also book
            a ticket by choosing which places they are interested in.
          </p>
        </Root>
      </Layout>
    </>
  );
}
