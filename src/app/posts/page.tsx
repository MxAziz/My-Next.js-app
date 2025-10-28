import PostCard from "@/components/Posts/PostCard";
import { IPost } from '@/type';

export default async function PostsPage() {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {next: {revalidate: 30}});
    const posts = await res.json();


  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-8 text-amber-300">All posts</h1>
      <div className="size-10 animate-ping opacity-50 translate-x-1.5 absolute bg-amber-400 rounded-full"></div>
          <div className="grid grid-cols-3 gap-4 px-8 my-4">
              {
                  posts?.map((post : IPost)=> <PostCard key={post.id} post={post} />)
              }
      </div>
    </div>
  );
}