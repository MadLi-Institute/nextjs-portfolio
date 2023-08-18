import GalleryItem from "@/components/galleryitem/GalleryItem";

const galleries = [
  {
    id: 1,
    src: "cube.jpg",
    title: "Gan Cube",
    heart: "141",
    date: "January 15, 2019"
  },
  {
    id: 2,
    src: "diecast.jpg",
    title: "Mini GT 1/64 Collection",
    heart: "141",
    date: "January 15, 2019"
  },
  {
    id: 3,
    src: "speed.jpg",
    title: "Nerf Ultra Speed",
    heart: "141",
    date: "January 15, 2019"
  },
  {
    id: 4,
    src: "pharaoh.jpg",
    title: "Nerf Ultra Pharaoh",
    heart: "141",
    date: "January 15, 2019"
  }
]

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
      {galleries.map((gallery) => (
        <GalleryItem key={gallery.id} src={gallery.src} title={gallery.title} heart={gallery.heart} date={gallery.date} />
      ))}
    </div>
  );
};

export default Gallery;
