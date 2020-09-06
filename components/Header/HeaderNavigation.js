import Link from "../Layout/Link";
import tw, { css, styled, theme } from "twin.macro";
import React, { useState } from "react";

import { Button } from "../Button";

const Root = styled.nav(() => [
  tw`flex md:flex-row flex-wrap justify-between items-center`,
  tw`p-6 border-solid border-b border-gray-400 bg-white`,
]);

const ButtonMobile = styled.div(() => [tw`block md:hidden`]);

const RootInner = styled.div(() => [
  tw`md:flex absolute md:relative items-center`,
  tw`bg-white md:bg-transparent -ml-6 md:mt-0 w-full md:w-auto`,
  tw`py-5 px-3 md:py-0 md:px-0`,
  tw`md:flex hidden`,
  css`
    @media (max-width: 60rem) {
      margin-top: 10rem;
    }
  `,
]);

const NavLink = styled.ul(() => [
  tw`list-none flex flex-wrap flex-grow`,
  tw`mr-8`,
]);

const NavLinkItem = styled.li(
  () => [tw`mx-0 md:mx-2`],
  css`
    &:hover {
      // text-decoration: underline;
    }

    a {
      padding: 0.5rem 0.85rem;
      border-radius: 6px;
      -moz-border-radius: 6px;
      transition: all 0.45s ease-in-out;

      &.selected {
        font-weight: bold;
        // color: ${theme`colors.pink`};
        background: rgba(0, 0, 0, 0.075);
      }

      &:hover,
      &:focus {
        background: rgba(0, 0, 0, 0.075);
      }
    }
  `
);

export default function HeaderNavigation({ title }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Root>
        <h1>{title}</h1>
        <ButtonMobile>
          <Button
            isSecondary
            aria-label="Button"
            onClick={() => {
              setShow(!show);
            }}
          >
            {!show ? (
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
            ) : (
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
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            )}
          </Button>
        </ButtonMobile>
        {!show ? (
          <RootInner>
            <NavLink>
              <NavLinkItem>
                <Link href="/">
                  <a>Beranda</a>
                </Link>
              </NavLinkItem>
              <NavLinkItem>
                <Link href="/about">
                  <a>Tentang</a>
                </Link>
              </NavLinkItem>
              <NavLinkItem>
                <Link href="/login">
                  <a>Masuk</a>
                </Link>
              </NavLinkItem>
            </NavLink>
            <Button isPrimary>Daftar</Button>
          </RootInner>
        ) : (
          <RootInner css={tw`flex`}>
            <NavLink>
              <NavLinkItem>
                <Link href="/">
                  <a>Beranda</a>
                </Link>
              </NavLinkItem>
              <NavLinkItem>
                <Link href="/about">
                  <a>Tentang</a>
                </Link>
              </NavLinkItem>
              <NavLinkItem>
                <Link href="/login">
                  <a>Masuk</a>
                </Link>
              </NavLinkItem>
            </NavLink>
            <Button isPrimary>Daftar</Button>
          </RootInner>
        )}
      </Root>
    </>
  );
}
