import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../database/db";
import Project from "../../../../database/projectSchema";

export async function POST(req: NextRequest) {
  try {
    await connectDB(); // make sure MongoDB is connected

    const body = await req.json(); // extract user & comment
    const { slug, user, comment } = body;

    if (!slug || !user || !comment) {
      return NextResponse.json({ error: "Missing slug, user, or comment" }, { status: 400 });
    }

    const newComment = {
      user,
      comment,
      time: new Date(),
    };

    const updatedProject = await Project.findOneAndUpdate(
      { slug },
      { $push: { comments: newComment } },
      { new: true }
    );

    if (!updatedProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Comment added!", project: updatedProject }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
