import React from "react";
import { Layout } from "../components/Layout";

import tw, { css, styled } from "twin.macro";

const Root = styled.section(() => [
  tw`max-w-4xl mx-auto mt-6 p-8 md:p-16`,
  css`
    h1 {
      font-weight: bold;
      font-size: 1.85em;
      margin-bottom: 1rem;
    }
  `,
]);

const LoginWrapper = styled.div(() => [
  tw`bg-white shadow-sm rounded-lg px-10 pt-12 pb-12 mb-4 flex flex-col`,
  tw`border border-gray-300 border-solid`,
]);

const LoginWrapperInput = styled.div(() => [tw`mb-6`]);

const LoginWrapperButton = styled.div(() => [
  tw`mt-6 flex items-center justify-between`,
]);

export default function Home() {
  return (
    <>
      <Layout pageTitle="Login">
        <Root id="main">
          <h1>Login</h1>
          <LoginWrapper>
            <LoginWrapperInput>
              <label
                css={[tw`block text-gray-700 text-lg font-bold mb-2`]}
                for="email"
              >
                Email
              </label>
              <input
                css={[
                  tw`shadow appearance-none border rounded w-full py-2 px-3 text-gray-600`,
                ]}
                id="email"
                type="text"
                placeholder="Your email..."
              />
            </LoginWrapperInput>
            <LoginWrapperInput>
              <label
                css={[tw`block text-gray-700 text-lg font-bold mb-2`]}
                for="password"
              >
                Password
              </label>
              <input
                css={[
                  tw`shadow appearance-none border rounded w-full py-2 px-3 text-gray-600`,
                ]}
                id="password"
                type="password"
                placeholder="Password"
              />
            </LoginWrapperInput>
            <LoginWrapperButton>
              <button
                css={[
                  tw`bg-pink hover:bg-white text-white hover:text-pink font-bold py-2 px-4 rounded`,
                  tw`border border-pink border-solid`,
                ]}
                type="button"
              >
                Sign In
              </button>
              <a
                css={[
                  tw`inline-block align-baseline font-bold text-sm text-pink hover:underline`,
                ]}
                href="#"
              >
                Forgot Password?
              </a>
            </LoginWrapperButton>
          </LoginWrapper>
        </Root>
      </Layout>
    </>
  );
}
