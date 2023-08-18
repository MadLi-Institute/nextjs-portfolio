import Image from "next/image";

const GalleryItem = ({src, title, heart, date}) => {
  return (
    <div className="card h-96 bg-base-100 shadow-xl">
        <figure className="h-96 relative">
          <Image
            src={`/images/galleries/${src}`}
            fill={true}
            priority={true}
            sizes="auto"
            alt={src}
            className="absolute object-cover"
          />
        </figure>
        <div className="card-body flex flex-col p-5">
          <div className="card-title">{title}</div>
          <div className="flex flex-row justify-between items-center">
            <div className="rating rating-sm gap-1">
              <input type="radio" name="rating" className="mask mask-heart bg-red-400" />
              <input type="radio" name="rating" className="mask mask-heart bg-orange-400" />
              <input type="radio" name="rating" className="mask mask-heart bg-yellow-400" />
              <input type="radio" name="rating" className="mask mask-heart bg-lime-400" />
              <input type="radio" name="rating" className="mask mask-heart bg-green-400" />
            </div>
            <div>{date}</div>
          </div>
        </div>
      </div>
  )
}

export default GalleryItem