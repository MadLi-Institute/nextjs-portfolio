import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ _id, title, source, highlight, tags }) => {
  return (
    <Link href={`/blog/${encodeURIComponent(_id)}`} className="w-full">
      <div className="card w-full bg-base-100 shadow-xl hover:scale-110">
      <figure className="h-40 relative">
        <Image
          src={`/images/blogs/${source}`}
          fill={true}
          priority={true}
          sizes="auto"
          alt={source}
          className="absolute object-cover"
        />
      </figure>
      <div className="card-body flex flex-col justify-between h-56 w-full">
        <h2 className="card-title font-bold">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="font-semibold">
          {highlight}
        </p>
        <div className="card-actions justify-end overflow-y-auto">
          {tags.map((tag, i) => (
            <div key={i} className="badge badge-outline">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
    </Link>
  );
};

export default BlogItem;
