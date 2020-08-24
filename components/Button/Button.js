import tw, { css, styled, theme } from "twin.macro";

const Button = styled.button(({ isPrimary, isSecondary, isSmall }) => [
  // The common button styles added with the tw import
  tw`text-lg py-2 focus:outline-none`,
  tw`transform transition-transform duration-75`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105)`,

  // Use props to conditionally style your components
  isPrimary && tw`px-6 bg-orange text-white border-black rounded-full`,

  // Combine regular css with tailwind classes within backticks
  isSecondary && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`inline-flex items-center px-2 border-2 border-orange text-orange rounded`,
  ],

  // Conditional props can be added
  isSmall ? tw`text-sm` : tw`text-base`,

  // The theme import can supply values from your tailwind.config.js
  css`
    // color: ${theme`colors.white`};
  `,
]);

export default Button;
