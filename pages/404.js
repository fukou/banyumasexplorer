import React from "react";
import Link from "next/link";
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

    a {
      text-decoration: underline;
    }
  `,
]);

export default function CustomError() {
  return (
    <>
      <Layout pageTitle="Not Found">
        <Root>
          <h1>The page you're looking for cannot be found.</h1>
          <p>
            They might be deleted or unavailable. You can go back to{" "}
            <Link href="/">
              <a>home page</a>
            </Link>
            .
          </p>
        </Root>
      </Layout>
    </>
  );
}
