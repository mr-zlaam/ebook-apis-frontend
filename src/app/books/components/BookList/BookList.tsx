import { BookTypes } from "@/types";
import React, { Fragment } from "react";

const fetchBookList = async (url: string) => {
  const response = await fetch(`${url}/books`);
  const data = await response.json();
  return data;
};
async function BookList() {
  const { BACKEND_URI } = process.env;
  const data = await fetchBookList(BACKEND_URI as string);
  const { data: bookData } = data;
  const cardClass = "rounded-lg h-[250px] w-[280px] border border-black";
  console.log(bookData);
  return (
    <>
      <section className="md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 lg:gap-10 grid grid-col-1 gap-3 justify-center">
        {bookData.books.map((book: BookTypes) => {
          return (
            <div className={cardClass} key={book?._id}>
              <h1>{book.title}</h1>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default BookList;
