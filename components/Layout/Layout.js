import { HeaderNavigation, HeroImage } from "../Header";
import reset from "../../styles/reset";
import SEO from "./SEO";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <SEO pageTitle={pageTitle} />
      <style jsx global>
        {reset}
      </style>
      <HeaderNavigation title="Logo"></HeaderNavigation>
      {children}
    </>
  );
}
