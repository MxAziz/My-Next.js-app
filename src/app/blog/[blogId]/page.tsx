/* eslint-disable @typescript-eslint/no-explicit-any */
const DynamicBlogPage = async ({params}:any) => {
    return (
       <div>
           <h1>This is blog Component blogId: {params.blogId}</h1>
       </div>
   )
}

export default DynamicBlogPage;