import BlogItem from "@/components/blogitem/BlogItem";

const getBlogs = async () => {
  try {
    const res = await fetch("https://portfolio-app-sigma-two.vercel.app/api/blog", {
      cache: "no-store",
    });
    if (!res.ok) {
      console.log("Failed to fetch blog data...");
      return;
    }
    return res.json();
  } catch (error) {
    console.log("Failed to fetch blog data...");
  }
};

const Blog = async () => {
  const blogs = await getBlogs();
  return (
    <div className="grid grid-cols-1 gap-10 place-items-center lg:grid-cols-2 xl:grid-cols-3">
      {blogs.map((blog, i) => (
        <BlogItem key={i} {...blog} />
      ))}
    </div>
  );
};

export default Blog;
