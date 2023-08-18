import Button from "@/components/button/Button";

const welcome = {
  header: "Welcome to My Portfolio",
  message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae veniam aliquam sint molestias voluptates deleniti accusamus ipsum, ullam facilis, repellendus minus pariatur consequuntur natus debitis voluptas quidem modi molestiae. Omnis."
}

const Home = () => {

  return (
    <div
      className="hero min-h-screen rounded-lg shadow-xl"
      style={{ backgroundImage: "url(/images/welcome.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{welcome.header}</h1>
          <p className="mb-5">
            {welcome.message}
          </p>
          <Button url="/about" text="Explore" color="primary"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
