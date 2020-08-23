import tw, { css, styled } from "twin.macro";

const Hero = styled.section(() => [
  tw`w-full bg-gray-400`,
  tw`flex items-center justify-center`,
  css`
    min-height: 60vh;
  `,
]);

export default function HeroImage() {
  return (
    <>
      <Hero>This is a text</Hero>
    </>
  );
}
