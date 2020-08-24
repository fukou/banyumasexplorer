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
        <Root>
          <h1>This is an about page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Root>
      </Layout>
    </>
  );
}
