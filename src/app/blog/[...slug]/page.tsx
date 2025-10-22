const CatchAllRoute = async ({params} : {params: Promise<{slug: string[]}>}) => {
    const { slug } = await params;
    console.log(slug);

    return (
        <div>
            <h1>catch all route page</h1>
            {
                slug.map(item => {
                    return <ul key={item}>{item}</ul>
                })
            }
        </div>
    );
};

export default CatchAllRoute;