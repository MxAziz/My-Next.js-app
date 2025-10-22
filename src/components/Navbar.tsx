import Link from "next/link";

export default function Navbar() {
  return (
    <div className="py-4 px-8 bg-gray-800 flex justify-between items-center">
          <h1>Next.js App</h1>
          <nav className="flex gap-4">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/blog">Blog</Link>
          </nav>
    </div>
  );
}