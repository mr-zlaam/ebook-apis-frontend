import Container from "@/_container/Container";
import Banner from "./components/banner/Banner";
import {} from "react";
import BookList from "./components/BookList/BookList";

function Books() {
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
