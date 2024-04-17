import Container from "@/_container/Container";
import Banner from "./components/banner/Banner";
import {} from "react";
import BookList from "./components/BookList/BookList";

async function Books() {
  const url = "http://localhost:5173/api/books";
  const response: Response = await fetch(url);
  if (!response.ok) {
    throw new Error("An error while fetching booklist from server.");
  }
  const books = await response.json();
  console.log(books);
  console.log(process.env.BACKEND_URI);
  return (
    <>
      <Container className="my-4">
        <Banner />
        <BookList />
      </Container>
    </>
  );
}

export default Books;
