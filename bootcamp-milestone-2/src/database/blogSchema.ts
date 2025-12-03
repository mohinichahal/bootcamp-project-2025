import mongoose, { Schema } from "mongoose";

type IComment = {
  user: string;
  comment: string;
  time: Date;
};

// typescript type (can also be an interface)
type Blog = {
	  title: string;
	  slug: string; 
	  date: Date;
	  description: string; // for preview
	  content: string; // text content for individual blog page
	  image: string; 
	  images: string[]; // url for string in public
	  image_alt: string; // alt for image
	  comments: IComment[]; // array for comments
};


const CommentSchema = new Schema({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, default: Date.now }
});


// mongoose schema 
const blogSchema = new Schema<Blog>({
		title: { type: String, required: true },
		slug: { type: String, required: true },
		date: { type: Date, required: false, default: new Date()},
		description: { type: String, required: true },
		image: { type: String, required: true }, 
  		images: { type: [String], required: true }, // new field
	    image_alt: { type: String, required: true },
		content: { type: String, required: true },
		comments: {type : [CommentSchema], default: []}
})


const Blog = mongoose.models['blogs'] || mongoose.model("blogs", blogSchema);

export default Blog;