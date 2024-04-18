import Container from "@/_container/Container";
import { BookTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import {} from "react";
import ReadLink from "../../components/readBook/ReadLink";
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
        <div className="flex flex-col items-center justify-center lg:flex lg:flex-row lg:items-start lg:justify-around">
          <div className="lg:text-6xl font-bold text-balance flex-1 sm:text-5xl sm:my-10 text-3xl my-5">
            The Phsycology of money.
            <p className=" text-center text-sm my-4">
              By:
              <span className="text-orange-800 font-fugaz text-xl"> Zlaam</span>
            </p>
            <p className="text-sm font-semibold leading-6 mx-4 text-left max-w-[80%] tracking-wide">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              non architecto omnis itaque temporibus nostrum, nemo quo dolorem
              sit vero facilis optio velit asperiores, repellat similique
              dolorum, sapiente nam illum! Earum explicabo eos nisi unde
              voluptas at? Labore, sapiente vero enim officiis molestiae numquam
              quasi optio itaque dicta nam est molestias aliquam? Porro nostrum
              tenetur numquam, maiores quaerat impedit eius omnis deleniti
              eveniet velit dolorum aspernatur necessitatibus, cumque est saepe
              aliquam in distinctio dolore sint labore illo quo. Esse quidem
              repellendus commodi! Iusto, ad totam esse provident facilis nisi
              dolorem est veritatis fuga magnam, assumenda quaerat, soluta
              excepturi earum quas?
            </p>
          </div>

          <div className="flex-1">
            <Image
              className="rounded"
              src={
                "https://res.cloudinary.com/dd0zhxb3i/image/upload/v1713433935/book-covers/l3zfvqvjtfkkdzvytwdo.jpg"
              }
              alt="book cover"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="w-fit mx-auto">
          <ReadLink
            file={
              "https://res.cloudinary.com/dd0zhxb3i/raw/upload/v1713433936/book-pdfs/smvdlu0lp2ja95cfzrce.pdf"
            }
          />
        </div>
      </Container>
    </>
  );
}

export default BookIdPage;
