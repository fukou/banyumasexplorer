import tw, { css, styled, theme } from "twin.macro";

const FootWrapper = styled.footer(() => [
  tw` bg-white border-solid border-gray-400 border-t`,
  tw`py-16 px-8 mt-2 text-sm`,
]);

const FooterInnerWrapper = styled.div(() => [tw`max-w-6xl mx-auto`]);

const SocialMedia = styled.ul(() => [
  tw`flex flex-wrap items-center`,
  tw`mb-6`,
]);
const SocialMediaItem = styled.li(() => [
  tw`mr-4`,
  css`
    a {
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  `,
]);

export default function Footer({ children }) {
  return (
    <>
      <FootWrapper role="contentinfo">
        <FooterInnerWrapper>
          <SocialMedia>
            <SocialMediaItem>
              <a href="#">Facebook</a>
            </SocialMediaItem>
            <SocialMediaItem>
              <a href="#">Twitter</a>
            </SocialMediaItem>
            <SocialMediaItem>
              <a href="#">Instagram</a>
            </SocialMediaItem>
          </SocialMedia>
          {children}
        </FooterInnerWrapper>
      </FootWrapper>
    </>
  );
}
