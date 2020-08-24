import Link from "../Layout/Link";
import tw, { css, styled, theme } from "twin.macro";

import { Button } from "../Button";

const Root = styled.nav(() => [
  tw`flex md:flex-row flex-wrap justify-between items-center`,
  tw`p-6 border-solid border-b border-gray-400 bg-white shadow-lg`,
]);

const ButtonMobile = styled.div(() => [tw`block md:hidden`]);

const RootInner = styled.div(() => [tw`md:flex hidden items-center`]);

const NavLink = styled.ul(() => [
  tw`list-none flex flex-wrap flex-grow`,
  tw`mr-6`,
]);

const NavLinkItem = styled.li(
  () => [tw`mx-5`],
  css`
    &:hover {
      text-decoration: underline;
    }

    a {
      &.selected {
        font-weight: bold;
      }
    }
  `
);

export default function HeaderNavigation({ title }) {
  return (
    <>
      <Root>
        <h1>{title}</h1>
        <ButtonMobile>
          <Button isSecondary>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </ButtonMobile>
        <RootInner>
          <NavLink>
            <NavLinkItem>
              <Link href="/">
                <a>Home</a>
              </Link>
            </NavLinkItem>
            <NavLinkItem>
              <Link href="/about">
                <a>About us</a>
              </Link>
            </NavLinkItem>
            <NavLinkItem>
              <Link href="/features">
                <a>Features</a>
              </Link>
            </NavLinkItem>
          </NavLink>
          <Button isPrimary>Login</Button>
        </RootInner>
      </Root>
    </>
  );
}
