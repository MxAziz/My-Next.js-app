import Link from "next/link";

export default function Navbar() {
  return (
    <div className="py-4 px-8 bg-gray-800 flex justify-between items-center">
          <Link
            href="/"
            className="text-white text-lg font-semibold"
          >
            Next.js App
          </Link>
          <nav className="flex gap-4">
              <Link href="/products">Products</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/blog/1">Blog</Link>
          </nav>
    </div>
  );
}