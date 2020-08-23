import tw, { css, styled } from "twin.macro";

const Hero = styled.section(() => [
  tw`w-full bg-gray-200`,
  tw`h-64 lg:min-h-0 lg:py-64 flex items-center justify-center`,
]);

const HeroTitle = styled.h1(() => [tw`text-2xl md:text-5xl font-bold`]);

export default function HeroImage() {
  return (
    <>
      <Hero>
        <HeroTitle>Banyumas Explorer</HeroTitle>
      </Hero>
    </>
  );
}
