import React from "react";
import Navbar from "../components/navbar"; // adjust path if needed
//import "../globals.css";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <h1>welcome to my website!</h1>
      <h2>it's nice to meet you</h2>

      <div className="about">
        <div className="about-image">
          <img src="/monu-pic.png" alt="a picture of me!" />
        </div>

        <div className="about-text">
          <p>
            My name is Mohini, and I am a freshman at Cal Poly SLO! I am majoring
            in Computer Science, which I am <em>so</em> excited about. I was born
            and raised in <strong>Fremont, CA</strong> and some of my favorite
            things to do are go on nature walks/hikes, try new kinds of food,
            play poker, or volleyball!
          </p>
        </div>
      </div>

      <footer className="footer">
        © 2025 mohini's website | All Rights Reserved
      </footer>
    </main>
  );
}
