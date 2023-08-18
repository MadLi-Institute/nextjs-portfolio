import Image from "next/image"

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center w-4/12 m-auto">
        <Image src="/images/gifs/loading.gif" width={150} height={150} priority={true} sizes="auto" alt="loading"/>
        <p className="inline-flex text-sm md:text-lg font-semibold italic">Fetching data <span className="loading loading-dots loading-lg mx-3"></span></p>
    </div>
  )
}

export default Loading