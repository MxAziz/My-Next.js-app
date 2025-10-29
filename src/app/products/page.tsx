import { IProduct } from "@/type";
import Link from "next/link";

export default async function ProductsPage() {


    const res = await fetch("http://localhost:5000/posts", { cache: "no-store"})
    const posts = await res.json();

  return (
    <div>
      <h1>This is products page Component</h1>
          {
              posts.map((post: IProduct) => {
                    return <div key={post.id}>{post.title}</div>
              })
      }

      <Link href="/dashboard">
      <button>go to dashboard</button>
      </Link>
    </div>
  );
}