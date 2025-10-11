"use client";

import Spline from '@splinetool/react-spline/next';
import Image from "next/image";
import WorkExperience from './components/WorkExperience';
import Header from './components/Header';
import Projects from './components/Projects';
import Monitor from './components/Monitor';
import { useEffect, useState } from 'react';

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[64px] row-start-2 items-center sm:items-start">
        {/* <div className="w-[960px]">
          <Spline
            scene="https://prod.spline.design/e8c2n7YKrIwpp7zX/scene.splinecode"
          />
        </div> */}
        <div className="flex flex-row gap-[64px]">
          <div
            className={`opacity-0 transition-opacity duration-500 ${visible ? "opacity-100" : ""
              }`}
          >
            <Header />

          </div>
          <div
            className={`opacity-0 transition-opacity duration-500 delay-200 ${visible ? "opacity-100" : ""
              }`}
          >
            <Monitor />
          </div>
        </div>

        <div
          className={`self-center opacity-0 transition-opacity duration-500 delay-400 ${visible ? "opacity-100" : ""
            }`}
        >
          <WorkExperience />
        </div>
        {/* <div
          className={`self-center opacity-0 transition-opacity duration-500 delay-600 ${visible ? "opacity-100" : ""
            }`}
        >
          <Projects />
        </div> */}
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
