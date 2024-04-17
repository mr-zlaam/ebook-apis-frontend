import Image from "next/image";
import {} from "react";
import heroSectionImage from "../../../images/hero.jpg";

function Home() {
  return (
    <>
      <div className="h-[87vh] md:h-[90vh] overflow-x-hidden">
        <Image
          className="rounded-lg object-cover h-[75%] md:h-[79%] w-full overflow-x-hidden md:drop-shadow-xl select-none "
          src={heroSectionImage}
          alt="hero"
          width={1000}
          height={1000}
        />
        <h1 className="font-bold text md:text-5xl lg:text-7xl text-start lg:ml-16 text-4xl   ">
          UNLEASH THE POWER OF IMAGINATION.
        </h1>
      </div>
    </>
  );
}

export default Home;
