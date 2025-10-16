type Blog = {
    title: string; 
    date: string; 
    description: string; 
    image: string; 
    imageAlt: string; 
    slug: string
}

const blogs: Blog[] = [
    {title: "Trip to Italy!", 
    date: "Dec 2022", 
    description: "I took a trip to Rome, Florence, and Venice, Italy!", 
    image: "italy.png", 
    imageAlt: "", 
    slug: ""
    }, 

    {title: "Cancun",
    date: "December 2023", 
    description: "My cousins and I went to Cancun!", 
    image: "cancun.png", 
    imageAlt: "", 
    slug: ""}
]

const blogContainer = document.getElementById("blog-container");

blogs.forEach(blog => {
if (!blogContainer)
        return

  const blogDiv = document.createElement("div");
  blogDiv.className = "blog-post";

  const title = document.createElement("h2");
  title.textContent = blog.title;

  const image = document.createElement("img");
  image.src = blog.image;
  image.alt = blog.imageAlt;

  const desc = document.createElement("p");
  desc.textContent = blog.description;

  const link = document.createElement("a");
  link.href = `blogs/${blog.slug}.html`; 
  link.textContent = "Read More";

  blogDiv.appendChild(title);
  blogDiv.appendChild(image);
  blogDiv.appendChild(desc);
  blogDiv.appendChild(link);

  blogContainer.appendChild(blogDiv);
});