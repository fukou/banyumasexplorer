import tw, { css, styled, theme } from "twin.macro";
import { Card } from "../Card";

const Wrapper = styled.section(() => [
  tw`lg:-mt-24 -mt-12 mb-16 mx-auto max-w-6xl px-6`,
  tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`,
]);

export default function Featured() {
  return (
    <>
      <Wrapper>
        <Card
          title="An example blog"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil"
        />
        <Card
          title="An example blog"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil"
        />
        <Card
          title="An example blog"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil"
        />
      </Wrapper>
    </>
  );
}
