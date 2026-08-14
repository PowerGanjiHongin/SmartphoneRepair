import type { Metadata, Viewport } from "next";
import "./globals.css";
// src/ 가 없다면 경로를 @/components/ 로 변경해야 합니다.
import Header from "@/components/Header";
import AnnounceBar from "@/components/AnnounceBar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "스마트폰 전문수리점 | 확인할 수 있는 수리",
  description: "속지 않으셔도 됩니다. 확인하시면 되니까요 — 스마트폰 전문수리점",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css"
        />
      </head>
      <body>
        <Header />
        <AnnounceBar />
        <main id="top">{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}