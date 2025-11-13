// pages/index.tsx
import type React from "react";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Home: React.FC = () => {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
      <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
        <h1>Airbnb Application Clone system</h1>
        <button className=" border px-3 py-1 text-lg mt-3  bg-blue-500 text-white rounded-full">
          Get Started
        </button>
      </main>
    </div>
  );
};

export default Home;
