import Image from "next/image";
import {} from "react";
import bannerImg from "../../../../images/bannerImg.png";
function Banner() {
  return (
    <>
      <div className="h-[200px] bg-white/80  rounded-md border flex items-center px-2 justify-around my-2">
        <h1 className="text-5xl font-bold text-black">
          Connect, Share and Trade Your <br /> Favorite Reads...
        </h1>
        <Image src={bannerImg} alt="book" width={220} height={220} />
      </div>
    </>
  );
}

export default Banner;
