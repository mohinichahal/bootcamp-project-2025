var blogs = [
    { title: "Trip to Italy!",
        date: "Dec 2022",
        description: "I took a trip to Rome, Florence, and Venice, Italy!",
        image: "italy.png",
        imageAlt: "",
        slug: ""
    },
    { title: "Cancun",
        date: "December 2023",
        description: "My cousins and I went to Cancun!",
        image: "cancun.png",
        imageAlt: "",
        slug: "" }
];
var blogContainer = document.getElementById("blog-container");
blogs.forEach(function (blog) {
    if (!blogContainer)
        return;
    var blogDiv = document.createElement("div");
    blogDiv.className = "blog-post";
    var title = document.createElement("h2");
    title.textContent = blog.title;
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    var desc = document.createElement("p");
    desc.textContent = blog.description;
    var link = document.createElement("a");
    link.href = "blogs/".concat(blog.slug, ".html");
    link.textContent = "Read More";
    blogDiv.appendChild(title);
    blogDiv.appendChild(image);
    blogDiv.appendChild(desc);
    blogDiv.appendChild(link);
    blogContainer.appendChild(blogDiv);
});
