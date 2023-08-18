const Loading = () => {
  return (
    <div>
      <div className="flex flex-row max-lg:flex-col justify-center items-center gap-3 max-h-fit">
        <div className="flex-1 max-lg:flex-none max-md:text-start max-lg:order-2">
          <div className="skeleton w-full h-16 mb-3"></div>
          <div className="skeleton w-full h-16 mb-3"></div>
        </div>
        <figure className="flex-1 max-lg:flex-none h-80 w-full relative max-lg:order-1 skeleton"></figure>
      </div>
      <div className="divider divider-vertical"></div>
      <div className="flex flex-col">
        <div className="text-justify">
          <div className="skeleton w-full h-5 mb-3"></div>
          <div className="skeleton w-full h-5 mb-3"></div>
          <div className="skeleton w-full h-5 mb-3"></div>
          <div className="skeleton w-52 h-5"></div>
        </div>
        <div className="self-end max-sm:self-start mt-5">
          <div className="skeleton w-48 h-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
