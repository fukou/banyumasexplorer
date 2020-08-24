import tw, { css, styled } from "twin.macro";

const Cards = styled.article(() => [
  tw`w-full rounded-lg overflow-hidden shadow-lg`,
  tw`border-solid border border-gray-300`,
  tw`bg-white`,
]);

const CardsTitle = styled.h2(() => [
  tw`px-6 py-4 font-bold text-2xl mb-2`,
  tw`border-solid border-b border-gray-300`,
]);

const CardsBody = styled.div(() => [tw`pt-2 pb-6 px-8 text-gray-700`]);

export default function Card({ title, desc }) {
  return (
    <>
      <Cards>
        <CardsTitle>{title}</CardsTitle>
        <CardsBody>{desc}</CardsBody>
      </Cards>
    </>
  );
}
