// src/app/blog/cancun/page.tsx
import React from "react";
import Image from "next/image";

export default function CancunBlog() {
  return (
    <>
      <main className="blog-page">
        <h1>CANCUN</h1>
        <p><em>published December 2023</em></p>

        <div className="blog-images">
          <Image src="/cancun1.png" alt="cancun 1" width={300} height={200} />
          <Image src="/cancun2.png" alt="cancun 2" width={300} height={200} />
          <Image src="/cancun3.png" alt="cancun 3" width={300} height={200} />
        </div>

        <p>
          My cousins and I all met up in Cancun during our Winter Break in 2023. 
          It was an awesome trip! I loved jumping into different cenotes, visiting 
          Chichen Itza, taking yacht rides, and swimming in the ocean. The water 
          was so clear and blue! Sadly, I did get salmonella after I got back :(
        </p>

        <a className="back-link" href="/blog">Back to Blog</a>
      </main>

      <footer className="footer">
        © 2025 mohini's website | All Rights Reserved
      </footer>
    </>
  );
}
