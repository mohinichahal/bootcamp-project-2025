import React from "react";
import BlogPreview from '../../components/blogPreview/blogPreview';
import blogs from "./blogData";
import Footer from "../../components/footer/footer";

export default function Home() {
  return (
    <>
      <main>
        <h3>
          I love travelling! Here's a travel blog <em>(in-progress)</em>:
        </h3>

        <div id="blog-container">
          {blogs.map((blog) => (
            <BlogPreview 
                key={blog.slug}
                slug = {blog.slug}
                title={blog.title}
                description={blog.description}
                image={blog.image}
                imageAlt={blog.imageAlt}
                date={blog.date}
                href = {blog.href}
            />
          ))}
        </div>
      </main>

      < Footer />
    </>
  );
}
