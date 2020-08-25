import tw, { css, styled } from "twin.macro";

const Button = styled.button(({ isPrimary, isSecondary, isSmall }) => [
  tw`text-lg py-2 focus:outline-none`,
  tw`transform transition-transform duration-75`,

  tw`hocus:(scale-105)`,

  isPrimary && tw`px-6 bg-pink text-white border-black rounded-full`,
  isSecondary && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`inline-flex items-center px-2 border-2 border-gray-800 text-gray-800 rounded`,
  ],

  isSmall ? tw`text-sm` : tw`text-base`,
]);

export default Button;
