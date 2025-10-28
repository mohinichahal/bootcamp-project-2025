import React from "react";
import BlogPreview from '../../components/blogPreview';
import blogs from '../blogData'; // only import the data

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
                slug = {blog.slug}
                title={blog.title}
                description={blog.description}
                image={blog.image}
                imageAlt={blog.imageAlt}
                date={blog.date}
            />
          ))}
        </div>
      </main>

      <footer>
        © 2025 mohini's website | All Rights Reserved
      </footer>
    </>
  );
}
