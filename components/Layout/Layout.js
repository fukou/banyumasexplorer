import { HeaderNavigation, HeroImage } from "../Header";
import reset from "../../styles/reset";
import SEO from "./SEO";
import { Footer } from "../Footer";

import tw, { css, styled } from "twin.macro";

const Root = styled.main(() => [tw`min-h-screen pb-8`]);

const Notice = styled.div(() => [
  tw`w-full bg-indigo-900 text-center py-3 lg:px-4`,
]);
const NoticeInner = styled.div(() => [
  tw`mx-4 p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex`,
]);

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <SEO pageTitle={pageTitle} />
      <style jsx global>
        {reset}
      </style>
      <Notice>
        <NoticeInner role="alert">
          <span css={tw`font-semibold pl-1 mr-2 text-left flex-auto`}>
            Website ini sedang dalam pengembangan
          </span>
          <span
            css={tw`cursor-pointer flex rounded-full bg-indigo-500 uppercase px-3 py-2 text-xs font-bold ml-1 `}
          >
            Tutup
          </span>
        </NoticeInner>
      </Notice>
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
