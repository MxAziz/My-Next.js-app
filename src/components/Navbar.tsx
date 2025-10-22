import Link from "next/link";

export default function Navbar() {
  return (
    <div>
          <h1>This is Navbar Component</h1>
          <nav className="gap-4 hover:underline">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/blog">Blog</Link>
          </nav>
    </div>
  );
}