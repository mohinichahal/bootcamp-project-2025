import React from "react";
import Navbar from "../../components/navbar"; // assuming you created the Navbar component
import style from "./Home.module.css"; // optional, for component-scoped CSS

export default function Home() {
  return (
    <>
      <Navbar />

      <main className={style.main}>
        <h3>
          I love travelling! Here's a travel blog <em>(in-progress)</em>:
        </h3>

        <div id="blog-container"></div>
      </main>

      <footer className={style.footer}>
        © 2025 mohini's website | All Rights Reserved
      </footer>
    </>
  );
}
