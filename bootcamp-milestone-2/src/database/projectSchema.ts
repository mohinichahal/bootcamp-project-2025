import mongoose, { Schema } from "mongoose";

// TypeScript type for Project
type Project = {
  title: string;
  description: string;
  date: Date;
  image: string;      // URL to image
  image_alt: string;  // alt text
  link: string;       // optional: link to project site or repo
};

// Mongoose schema
const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  link: { type: String, required: false },
});

// Define collection and model
const Project = mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
