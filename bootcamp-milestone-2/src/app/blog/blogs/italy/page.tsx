// src/app/blog/italy/page.tsx
import React from "react";
import Image from "next/image";
import Footer from "../../../../components/footer/footer";


export default function ItalyBlog() {
  return (
    <>
      <main className="blog-page">
        <h1>ITALY</h1>
        <p><em>published Dec 2022</em></p>

        <div className="blog-images">
          <Image src="/italy1.png" alt="Italy 1" width={300} height={200} />
          <Image src="/italy2.png" alt="Italy 2" width={300} height={200} />
          <Image src="/italy3.png" alt="Italy 3" width={300} height={200} />
        </div>

        <p>
          I visited Rome, Florence, and Venice, Italy! It was so cool to see
          their architecture: the Leaning Tower of Pisa, Michelangelo's Sistine Chapel, 
          the Colosseum, the Pazzi Chapel, the statue of David, and SO much more. 
          The food was incredible, and of course I tried a new flavor of gelato every day :P
        </p>

        <a className="back-link" href="/blog">Back to Blog</a>
      </main>

      < Footer />
    </>
  );
}
