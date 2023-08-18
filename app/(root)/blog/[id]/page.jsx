import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Image from "next/image";
import Link from "next/link";

const getBlog = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
      cache: "no-cache",
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

const BlogPage = async ({ params }) => {
  const blog = await getBlog(params.id);
  return (
    <div>
      <div className="mb-5"><BreadCrumb page="Blog" title={blog.title} /></div>
      <div className="flex flex-row max-lg:flex-col justify-center items-center gap-3 max-h-fit">
        <h1 className="flex-1 max-lg:flex-none text-7xl font-bold italic text-end max-md:text-start max-lg:order-2">
          {blog.title}
        </h1>
        <figure className="flex-1 max-lg:flex-none h-80 w-full relative max-lg:order-1">
          <Image
            src={`/images/blogs/${blog.source}`}
            fill={true}
            priority={true}
            sizes="auto"
            alt={blog.source}
            className="absolute rounded-xl shadow-lg object-cover"
          />
        </figure>
      </div>
      <div className="divider divider-vertical"></div>
      <div className="flex flex-col">
        <div className="text-justify">{blog.description}</div>
        <div className="self-end max-sm:self-start mt-5">
          <span>Tags: </span>
          {blog.tags.map((tag, i) => (
            <div key={i} className="badge badge-outline mx-1">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="sm:hidden mt-5">
        <BreadCrumb page="Blog" title={blog.title} />
      </div>
    </div>
  );
};

export default BlogPage;
