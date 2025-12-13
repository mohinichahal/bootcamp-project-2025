import { NextRequest, NextResponse } from 'next/server'
import connectDB from "../../../../database/db"
import Blog from "../../../../database/blogSchema"

type IParams = {
  params: {
    slug: string
  }
}
 
export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB()
  const { slug } = params

  try {
    const blog = await Blog.findOne({ slug }).orFail()
    return NextResponse.json(blog)
  } catch (err) {
    return NextResponse.json('Blog not found.', { status: 404 })
  }
}

 
export async function POST(req: NextRequest, { params }: IParams) {
  try {
    await connectDB();
    const { slug } = params;
    const body = await req.json();

    if (!body.user || !body.comment) {
      return NextResponse.json({ error: "Missing user or comment" }, { status: 400 });
    }

    const newComment = {
      user: body.user,
      comment: body.comment,
      time: new Date(),
    };

    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      { $push: { comments: newComment } },
      { new: true }
    );

    if (!updatedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Comment added!", blog: updatedBlog }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
} 
 