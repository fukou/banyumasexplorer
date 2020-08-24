import tw, { css, styled, theme } from "twin.macro";

const Hero = styled.section(() => [
  tw`w-full`,
  tw`h-64 lg:min-h-0 lg:py-64 flex items-center`,
  css`
    background: linear-gradient(
      120deg,
      ${theme`colors.orange`},
      ${theme`colors.pink`}
    );
  `,
]);

const HeroTitle = styled.h1(() => [
  tw`max-w-6xl mx-auto text-3xl sm:text-4xl lg:text-5xl font-bold text-white`,
]);

export default function HeroImage() {
  return (
    <>
      <Hero>
        <HeroTitle>Banyumas Explorer</HeroTitle>
      </Hero>
    </>
  );
}
