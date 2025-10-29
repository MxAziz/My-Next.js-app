/* eslint-disable @typescript-eslint/no-explicit-any */
const DynamicBlogPage = async ({params}:any) => {
  console.log(await params);
    return (
      <div className=" text-center mt-8">
        <h1>This is blog Component blogId: {params.blogId}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore facilis soluta hic alias officia est dolor pariatur. Corporis, cum?</p>
      </div>
    );
}

export default DynamicBlogPage;