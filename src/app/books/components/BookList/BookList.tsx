import { cn } from "@/lib/utils";
import { BookTypes } from "@/types";
import Image from "next/image";
//TODO: Resume from here
const fetchBookList = async () => {
  const response = await fetch(`http://localhost:5173/api/books`);
  const data = await response.json();
  return data;
};

async function BookList() {
  // const { BACKEND_URI } = process.env;
  const data = await fetchBookList();
  const { data: bookData } = data;
  console.log(bookData);
  const cardClass = "rounded-lg h-[250px] w-[380px]  ";
  return (
    <>
      <section className="md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 lg:gap-10 grid grid-col-1 gap-3 justify-center">
        {bookData.books.map((book: BookTypes) => {
          return (
            <div
              className={cn("shadow-black/30  shadow-md flex", cardClass)}
              key={book?._id}
            >
              <Image
                src={book?.coverImage}
                alt={book?.author?.displayName}
                height={100}
                width={100}
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
