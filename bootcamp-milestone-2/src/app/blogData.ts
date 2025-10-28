// src/data/blogData.ts

// Define the Blog interface
export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;   
  imageAlt: string;
  slug: string;
}

// Create the blog array
const blogs: Blog[] = [
  {
    title: "ITALY",
    date: "Dec 2022",
    description: "Rome, Florence, and Venice, Italy!",
    image: "/italy.png",      
    imageAlt: "italy-pic",
    slug: "italy",
  },
  {
    title: "CANCUN",
    date: "December 2023",
    description: "Cousins trip to Cancun!",
    image: "/cancun.png",
    imageAlt: "cancun-pic",
    slug: "cancun",
  },
  {
    title: "NEW YORK",
    date: "June 2024",
    description: "Family trip to New York!",
    image: "/ny.png",
    imageAlt: "ny-pic",
    slug: "ny",
  },
];

// Export the array so it can be imported elsewhere
export default blogs;
