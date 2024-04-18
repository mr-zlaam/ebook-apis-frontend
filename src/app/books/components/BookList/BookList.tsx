import { cn } from "@/lib/utils";
import { BookTypes } from "@/types";
import { Fugaz_One } from "next/font/google";
import Image from "next/image";
//TODO: Resume from here
const fetchBookList = async (BACKEND_URI: string) => {
  const response = await fetch(`${BACKEND_URI}/books`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
};

async function BookList() {
  const { BACKEND_URI } = process.env;
  const data = await fetchBookList(BACKEND_URI as string);
  const { data: bookData } = data;
  const cardClass = "rounded-lg h-[250px] w-[380px]  ";
  if (bookData?.books.length === 0) {
    return (
      <h1 className="h-[300px]  flex justify-center items-center text-4xl font-bold text-red-500 font-fugaz">
        No result Found!
      </h1>
    );
  }
  return (
    <>
      <section className="md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 lg:gap-10 grid grid-col-1 gap-3 justify-center">
        {bookData.books.map((book: BookTypes) => {
          return (
            <div
              className={cn(
                "shadow-md overflow-hidden shadow-black/40 flex items-center justify-around border border-white/40",
                cardClass
              )}
              key={book?._id}
            >
              <Image
                src={book?.coverImage}
                alt={book?.author?.displayName}
                height={200}
                width={200}
              />
              <h1>{book.author.displayName}</h1>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default BookList;
