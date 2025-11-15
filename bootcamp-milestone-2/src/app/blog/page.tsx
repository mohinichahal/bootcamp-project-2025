import React from "react";
import BlogPreview from '../../components/blogPreview/blogPreview';
import Footer from "../../components/footer/footer";
import connectDB from "../../database/db";
import Blog from "../../database/blogSchema";

type BlogType = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  image: string;
  image_alt: string;
};

async function getBlogs(): Promise<BlogType[] | null> {
  await connectDB();

  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch {
    return null;
  }
}

export default async function Home() {
  const blogs = await getBlogs(); // fetch blogs from MongoDB

  if (!blogs || blogs.length === 0) {
    return <p>No blogs found.</p>; 
  }

  return (
    <>
      <main>
        <h3>
          I love travelling! Here's a travel blog <em>(in-progress)</em>:
        </h3>

        <div id="blog-container">
          {blogs.map((blog: BlogType) => (
            <BlogPreview 
              key={blog.slug}
              slug={blog.slug}
              title={blog.title}
              description={blog.description}
              image={blog.image}
              imageAlt={blog.image_alt} // must match your schema
              date={blog.date.toDateString()} // convert Date to string
              href={`/blog/blogs/${blog.slug}`} // generate href dynamically
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
