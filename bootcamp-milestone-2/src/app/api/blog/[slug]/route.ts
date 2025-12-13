import { NextRequest, NextResponse } from 'next/server'
import connectDB from "../../../../database/db"
import Blog from "../../../../database/blogSchema"

type IParams = {
  params: Promise<{
    slug: string
  }>
}

// GET - Fetch blog by slug
export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB()
  const { slug } = await params // ADD await here

  try {
    let blog = await Blog.findOne({ slug }).exec()

    if (!blog) {
      blog = await Blog.findOne({ slug: { $regex: slug, $options: 'i' } }).exec()
    }

    if (!blog) {
      return NextResponse.json('Blog not found.', { status: 404 })
    }

    return NextResponse.json(blog)
  } catch (err) {
    return NextResponse.json('Blog not found.', { status: 404 })
  }
}

// POST - Create a comment
export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB()
  const { slug } = await params // ADD await here too

  try {
    const body = await req.json()
    const { user, comment } = body

    if (!user || !comment) {
      return NextResponse.json(
        { error: 'User and comment are required' },
        { status: 400 }
      )
    }

    let blog = await Blog.findOne({ slug }).exec()
    if (!blog) {
      blog = await Blog.findOne({ slug: { $regex: slug, $options: 'i' } }).exec()
    }

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    const newComment = {
      user: user.trim(),
      comment: comment.trim(),
      time: new Date()
    }

    blog.comments = blog.comments || []
    blog.comments.push(newComment)
    await blog.save()

    return NextResponse.json(
      { message: 'Comment added successfully', comment: newComment },
      { status: 201 }
    )
  } catch (err) {
    console.error('Error adding comment:', err)
    return NextResponse.json({ error: 'Failed to add comment' }, { status: 500 })
  }
}