import Container from "@/_container/Container";
import { BookTypes } from "@/types";
import useNextBlurhash from "use-next-blurhash";

import Image from "next/image";
import {} from "react";
import ReadLink from "../../components/readBook/ReadLink";
const fetchSignleBook = async (bookid: string) => {
  let GetBook: BookTypes | null = null;
  try {
    const response = await fetch(`${process.env.BACKEND_URI}/books/${bookid}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      return;
    } else {
      const singleBook = await response.json();
      if (!singleBook) return;
      GetBook = singleBook.data;
      return GetBook;
    }
  } catch (error: any) {
    console.log(error.message);
  }
};
async function BookIdPage({ params }: { params: { bookId: string } }) {
  const [blurDataUrl] = useNextBlurhash("L98;Z5kVXUIU.TogENM{9tjExuR*"); //TODO:if this line create issue during the build process then remove it

  let singleBook = null;
  try {
    singleBook = await fetchSignleBook(params.bookId);
  } catch (error: any) {
    console.log(error.message);
  }
  return (
    <>
      <Container className="mt-5 relative">
        <div className="flex flex-col items-center justify-center lg:flex lg:flex-row lg:items-start lg:justify-around">
          <div className="lg:text-6xl font-bold text-balance flex-1 sm:text-5xl sm:my-10 text-3xl my-5">
            {singleBook?.title}
            <p className=" text-center text-sm my-4">
              By:
              <span className="text-orange-800 font-fugaz text-xl"> Zlaam</span>
            </p>
            <p className="text-sm font-semibold leading-6 mx-4 text-left max-w-[80%] tracking-wide">
              {singleBook?.description}
            </p>
          </div>

          <div className="flex-1">
            {singleBook?.coverImage && (
              <Image
                className="rounded"
                src={singleBook.coverImage}
                alt="book cover"
                width={500}
                height={500}
                blurDataURL={blurDataUrl}
                placeholder="blur"
              />
            )}
          </div>
        </div>
        <div className="w-fit mx-auto my-10">
          {singleBook?.file && <ReadLink file={singleBook.file} />}
        </div>
      </Container>
    </>
  );
}

export default BookIdPage;
