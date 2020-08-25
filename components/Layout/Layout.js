import { HeaderNavigation, HeroImage } from "../Header";
import reset from "../../styles/reset";
import SEO from "./SEO";
import { Footer } from "../Footer";

import tw, { css, styled } from "twin.macro";

const Root = styled.main(() => [tw`min-h-screen pb-8`]);

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <SEO pageTitle={pageTitle} />
      <style jsx global>
        {reset}
      </style>
      <HeaderNavigation title="Logo"></HeaderNavigation>
      <Root>{children}</Root>
      <Footer>
        &copy; {new Date().getFullYear()} Banyumas Explorer
        <br />
        All rights reserved.
      </Footer>
    </>
  );
}
