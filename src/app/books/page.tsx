import Container from "@/_container/Container";
import Banner from "./components/banner/Banner";
import { Suspense } from "react";
import BookList from "./components/BookList/BookList";
import Loading from "@/_subComponents/loading";

function Books() {
  return (
    <>
      <Container className="my-4">
        <Banner />
        <Suspense
          fallback={
            <div className="flex  items-center justify-center h-[400px]">
              <Loading />
            </div>
          }
        >
          <BookList />
        </Suspense>
      </Container>
    </>
  );
}

export default Books;
