// src/app/portfolio/page.tsx
import React from "react";
import Footer from "../../components/footer/footer";
import connectDB from "../../database/db";
import Project from "../../database/projectSchema";

async function getProjects() {
  await connectDB();

  try {
    const projects = await Project.find().sort({ title: 1 }).orFail();
    return projects;
  } catch {
    return null;
  }
}

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

      < Footer />
    </>
  );
}
