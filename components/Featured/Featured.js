import tw, { css, styled, theme } from "twin.macro";
import { Card } from "../Card";

const Wrapper = styled.section(() => [
  tw`lg:-mt-24 -mt-12 mb-16 mx-auto max-w-6xl px-6`,
  tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`,
]);

export default function Featured() {
  return (
    <>
      <Wrapper id="main">
        <Card
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          }
          title="Cari destinasimu"
          desc="Gunakan fitur pencarian untuk menemukan destinasi impian Anda."
        />
        <Card
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          }
          title="Simpan tempat favoritmu"
          desc="Jangan lupakan destinasi favorit Anda dan simpan tempat yang ingin Anda tuju"
        />
        <Card
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          }
          title="Pesan tiketmu"
          desc="Beli tiket tempat wisata impian Anda di Banyumas tanpa perlu mengantri lagi!"
        />
      </Wrapper>
    </>
  );
}
