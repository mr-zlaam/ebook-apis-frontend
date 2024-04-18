import Container from "@/_container/Container";
import { BookTypes } from "@/types";
import Image from "next/image";
import {} from "react";
const fetchSignleBook = async (bookid: string) => {
  let GetBook: BookTypes | null = null;
  try {
    const response = await fetch(`${process.env.BACKEND_URI}/books/${bookid}`);
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
  // const singleBook = await fetchSignleBook(params.bookId);
  // console.log(singleBook);
  return (
    <>
      <Container className="mt-5">
        <div className="flex justify-around">
          <h1>The Phsycology of money</h1>
          <div>
            <Image
              src={
                "https://res.cloudinary.com/dd0zhxb3i/image/upload/v1713433935/book-covers/l3zfvqvjtfkkdzvytwdo.jpg"
              }
              alt="book cover"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "25rem" }}
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default BookIdPage;
