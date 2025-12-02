import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../../../database/db";
import Project from "../../../../../../database/projectSchema";

type IParams = {
  params: { slug: string };
};

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = params;

  try {
    const project = await Project.findOne({ slug }).orFail();
    return NextResponse.json(project);
  } catch {
    return NextResponse.json("Project not found", { status: 404 });
  }
}
