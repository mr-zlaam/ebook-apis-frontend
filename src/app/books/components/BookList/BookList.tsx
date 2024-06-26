import { cn } from "@/lib/utils";
import { BookTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import useNextBlurhash from "use-next-blurhash";

const fetchBookList = async (BACKEND_URI: string) => {
  try {
    const response = await fetch(`${BACKEND_URI}/books`, {
      cache: "no-store",
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
    return data && data;
  } catch (error: any) {
    console.log(error.message);
    return;
  }
};

async function BookList() {
  const [blurDataUrl] = useNextBlurhash("L98;Z5kVXUIU.TogENM{9tjExuR*"); //TODO:if this line create issue during the build process then remove it
  const { BACKEND_URI } = process.env;
  const data = await fetchBookList(BACKEND_URI ? BACKEND_URI : "undefined");
  const { data: bookData } = data;
  if (bookData?.books.length === 0) {
    return (
      <h1 className="h-[300px]  flex justify-center items-center text-4xl font-bold text-red-500 font-fugaz">
        No result Found!
      </h1>
    );
  }

  return (
    <>
      <section
        className={`md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-4 lg:gap-5 grid grid-col-1 gap-3 justify-center `}
      >
        {!bookData ? (
          <div>Book data is undefined!</div>
        ) : (
          bookData.books.map((book: BookTypes) => {
            return (
              <div
                className={cn(
                  `rounded-lg max-h-[450px] max-w-[280px]  overflow-auto shadow-md break-words  gap-2 shadow-black/40 flex flex-col border border-white/40  `
                )}
                key={book?._id}
              >
                <Image
                  className="select-none flex-1 w-fit mx-auto"
                  src={book?.coverImage}
                  alt={book?.author?.displayName}
                  height={0}
                  width={0}
                  sizes="100vw"
                  priority
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  style={{ width: "auto", height: "14rem" }}
                />
                <div className="flex-1 flex flex-col items-center justify-center ">
                  <h1 className="text-lg break-words italic font-semi text-left px-3">
                    {book?.title}
                  </h1>
                  <h1 className="flex gap-3 items-center">
                    <span className="font-bold text-sm">By: </span>
                    <span className="font-fugaz text-orang-800 text-md text-orange-800">
                      {book.bookAuthor}
                    </span>
                  </h1>
                  <h1 className="flex gap-3 items-center">
                    <span className="font-bold text-sm">genre: </span>
                    <span className="font-fugaz text-orang-800 text-md text-orange-800">
                      {book?.genre}
                    </span>
                  </h1>

                  <Link
                    href={`books/book/${book?._id}`}
                    className="text-blue-800 hover:underline font-bold"
                  >
                    Read more...
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </section>
    </>
  );
}

export default BookList;
