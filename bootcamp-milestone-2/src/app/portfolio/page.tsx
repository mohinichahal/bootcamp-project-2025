// src/app/portfolio/page.tsx
import React from "react";

export default function Portfolio() {
  return (
    <>

      <main>
        <h1 className="page-title">Portfolio:</h1>

        <div className="project">
          <a href="index.html">
            <img src="/website.png" alt="view website" className="project-image" />
          </a>

          <div className="project-details">
            <h2 className="project-name">Personal Website</h2>
            <p className="project-description">
              Used HTML and CSS to code a personal website. Shoutout @Hack4ImpactCalPoly Starter Pack!
            </p>
            <a href="index.html">LEARN MORE!</a>
          </div>
        </div>
      </main>

      <footer className="footer">
        © 2025 mohini's website | All Rights Reserved
      </footer>
    </>
  );
}
