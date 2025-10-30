// src/app/blog/new-york/page.tsx
import React from "react";
import Image from "next/image";

export default function NewYorkBlog() {
  return (
    <>
      <main className="blog-page">
        <h1>NEW YORK</h1>
        <p><em>published June 2024</em></p>

        <div className="blog-images">
          <Image src="/ny1.png" alt="NY 1" width={300} height={200} />
          <Image src="/ny2.png" alt="NY 2" width={300} height={200} />
          <Image src="/ny3.png" alt="NY 3" width={300} height={200} />
        </div>

        <p>
          I loved my trip to New York. I enjoyed trying their bagels, spending time at Times Square, touring Central Park, 
          and seeing the Statue of Liberty! I hope to live in New York one day.
        </p>

        <a className="back-link" href="/blog">Back to Blog</a>
      </main>

      <footer className="footer">
        © 2025 mohini's website | All Rights Reserved
      </footer>
    </>
  );
}
