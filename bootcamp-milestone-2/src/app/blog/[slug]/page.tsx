
import React from 'react';
import Comment from '../../../components/comments/Comment';
import connectDB from "../../../database/db"
import Image from "next/image";
import BlogModel from "../../../database/blogSchema"
import Blog from "../../../database/blogSchema"
import TestCommentButton from '../../../components/comments/testComment';

type Props = { 
    params: { slug: string } | Promise<{slug: string}>;
};

async function getBlog(slug: string) {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export default async function BlogPage({ params }: Props) {
  const {slug} = await params;
  await connectDB();
  //const blog = await getBlog(slug);

  
  const blog: Blog | null = await BlogModel.findOne<Blog>({slug}).lean();
if (!blog) return <p>Blog not found.</p>;
  const comments = Array.isArray(blog.comments) ? blog.comments : [];

  return (
    <main style={{ maxWidth: "1000px", margin: "40px auto", padding: "0 20px" }} className="blog-page">
      {/* Blog Title */}
      <h1>{blog.title}</h1>


      {/* Blog Date */}
      <p><em>{new Date(blog.date).toLocaleDateString()}</em></p>

      {/* Blog Images */}
<div className="blog-images">
  {blog.images?.map((img: string, index: number) => (
    <Image key={index} src={img} alt={`Blog image ${index + 1}`} width={200} height={400} />
  ))}
</div>

      {/* Blog Content */}
      {Array.isArray(blog.contentParagraphs) ? (
        blog.contentParagraphs.map((para: string, idx: number) => (
          <p key={idx}>{para}</p>
        ))
      ) : (
        <p>{blog.content}</p>
      )}

 
      {/* Back link */}
      <a href="/blog" className="back-link">Back to Blog</a>

      {/* Comments */}
      <section style={{ marginTop: "2rem" }}>
        <h3>Comments</h3>
        {comments.length > 0 ? ( 
          comments.map((comment: any, index: number) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p>No comments yet</p>
        )}
      </section>
    </main>
  );
}
