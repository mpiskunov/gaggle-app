"use client";
import Link from "next/link";
import Image from "next/image";

export default function NavHeader() {
  return (
    <>
      <div className="nav-wrapper">
        <div className="flex max-w-full place-content-center bg-[url('/bg/golf-bg.jpg')] bg-auto h-80"></div>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 fixed bottom-0 sticky top-0 z-10">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Image
              src="/mammal.png"
              width={50}
              height={50}
              alt="goat"
              className="fill-current h-8 w-8 mr-2"
            />
            <span className="font-semibold text-xl tracking-tight">
              Golf Gaggle
            </span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <Link
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Home
              </Link>
              <Link
                href="/gagglery"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Gagglery
              </Link>
              <Link
                href="/about"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
              >
                About
              </Link>
            </div>
            <div>
              <Link
                href="/about"
                className="block text-sm px-4 py-2 text-teal-200 hover:text-white mt-4 lg:mt-0"
              >
                Commissioner Login
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
