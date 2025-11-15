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

export default async function Portfolio() {
  const projects = await getProjects();

  if (!projects || projects.length === 0) {
    return <p>No projects found.</p>;
  }

  return (
    <>
      <main>
        <h1 className="page-title">Portfolio:</h1>

        {projects.map((project) => (
          <div key={project.title} className="project">
            <a href={project.link}>
              <img src={project.image} alt={project.image_alt} className="project-image" />
            </a>

            <div className="project-details">
              <h2 className="project-name">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <a href={project.link}>LEARN MORE!</a>
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </>
  );
}
