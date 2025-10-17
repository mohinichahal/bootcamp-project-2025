type Blog = {
    title: string; 
    date: string; 
    description: string; 
    image: string; 
    imageAlt: string; 
    slug: string
}

const blogs: Blog[] = [
    {title: "ITALY", 
    date: "Dec 2022", 
    description: "Rome, Florence, and Venice, Italy!", 
    image: "italy.png", 
    imageAlt: "italy-pic", 
    slug: "italy"
    }, 

    {title: "CANCUN",
    date: "December 2023", 
    description: "Cousins trip to Cancun!", 
    image: "cancun.png", 
    imageAlt: "cancun-pic", 
    slug: "cancun"}, 

    {title: "NEW YORK",
    date: "June 2024", 
    description: "Family trip to New York!", 
    image: "ny-png.png", 
    imageAlt: "ny-pic", 
    slug: "ny"}, 

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
  link.textContent = "read more";

  blogDiv.appendChild(title);
  blogDiv.appendChild(image);
  blogDiv.appendChild(desc);
  blogDiv.appendChild(link);

  blogContainer.appendChild(blogDiv);
});