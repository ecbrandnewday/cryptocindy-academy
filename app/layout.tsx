import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CryptoCindy教學影片",
  description: "瀏覽教學單元與社群直播，直接播放 YouTube 影片。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f7f7f7]`}
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-2 sm:px-6 sm:py-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <a
              href="https://cryptocindy-product.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center justify-center gap-2 rounded-3xl bg-rose-100 px-4 py-4 text-sm font-semibold text-rose-800 transition hover:bg-rose-200 sm:w-32 sm:py-5"
            >
              <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white shadow sm:h-12 sm:w-12">
                <Image
                  src="/logo白底.png"
                  alt="商店 Logo"
                  fill
                  sizes="3rem"
                  className="object-cover"
                />
              </span>
              <span className="text-sm font-semibold text-rose-800">商店</span>
            </a>

            <div className="flex-1 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-rose-50 via-white to-blue-50 shadow-sm">
              <div
                className="relative aspect-[32/7] w-full sm:aspect-[21/3]"
                style={{
                  backgroundImage: "url('/cryptocindy-banner.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <div className="absolute inset-0" />
              </div>
            </div>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
