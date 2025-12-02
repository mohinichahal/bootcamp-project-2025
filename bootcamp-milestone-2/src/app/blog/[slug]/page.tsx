type Props = {
    params: { slug: string }
}
async function getBlog(slug: string) {
	try {
		// This fetches the blog from an api endpoint that would GET the blog
		const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
			cache: "no-store",	
		})
		// This checks that the GET request was successful
		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
		// `` are a special way of allowing JS inside a string
		// Instead of "error: " + err, we can just do the above
		// it is simular to formated strings in python --> f"{err}"
	}
}

export default async function Blog({ params }: Props) {
  const { slug } = params;
  const blog = await getBlog(slug);

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}