import Container from "@/_container/Container";
import Image from "next/image";
import heroImage from "../../images/hero.jpg";

export default function Home() {
  //TODO:RESUME FROM HERE NEXT TIME
  return (
    <Container className="mt-2 flex flex-col items-center justify-center ">
      <Image
        className="rounded-lg object-cover "
        src={heroImage}
        alt="hero"
        width={1000}
      />
      <h1 className="font-bold text md:text-5xl lg:text-7xl text-start lg:ml-16 text-3xl   ">
        UNLEASH THE POWER OF IMAGINATION.
      </h1>
    </Container>
  );
}
