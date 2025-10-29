'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();


  return (
    <div className="py-4 px-8 bg-gray-800 flex justify-between items-center">
      <Link href="/" className="text-white text-lg font-semibold">
        Next.js App
      </Link>
      <nav className="flex gap-4">
        <Link
          href="/dashboard"
          className={`${
            pathName === "/dashboard" ? "text-yellow-300" : "text-white"
          }`}
        >
          Dashboard
        </Link>
        <Link
          href="/products"
          className={`${
            pathName === "/products" ? "text-yellow-300" : "text-white"
          }`}
        >
          Products
        </Link>
        <Link
          href="/about"
          className={`${
            pathName === "/about" ? "text-yellow-300" : "text-white"
          }`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`${
            pathName === "/contact" ? "text-yellow-300" : "text-white"
          }`}
        >
          Contact
        </Link>

        <Link
          href="/posts"
          className={`${
            pathName === "/posts" ? "text-yellow-300" : "text-white"
          }`}
        >
          Posts
        </Link>
        <Link
        scroll={true}
          href="/gallery"
          className={`${
            pathName === "/gallery" ? "text-yellow-300" : "text-white"
          }`}
        >
          Gallery
        </Link>
        <Link
          href="/blog/1"
          className={`${
            pathName === "/blog/1" ? "text-yellow-300" : "text-white"
          }`}
        >
          Blog
        </Link>
      </nav>
    </div>
  );
}