import Image from "next/image";
import {} from "react";
import bannerImg from "../../../../../images/bannerImg.png";
function Banner() {
  return (
    <>
      <div className="md:h-[200px] h-fit bg-white/80  rounded-md border flex items-center px-2 justify-around my-2 shadow flex-col md:flex-row  ">
        <h1 className="md:text-4xl font-bold text-black md:text-balance text-2xl text-center">
          Connect, Share and Trade Your <br className="hidden lg:block" />
          Favorite Reads...
        </h1>
        <Image src={bannerImg} alt="book" width={180} height={180} />
      </div>
    </>
  );
}

export default Banner;
