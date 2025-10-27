import { IProduct } from "@/type";

export default async function ProductsPage() {
    const res = await fetch("http://localhost:5000/posts")
    const posts = await res.json()
    console.log(posts)
  return (
    <div>
      <h1>This is products page Component</h1>
          {
              posts.map((post: IProduct) => {
                    return <div key={post.id}>{post.title}</div>
              })
      }
    </div>
  );
}