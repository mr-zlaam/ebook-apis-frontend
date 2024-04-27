"use client";
import {} from "react";

function BookUploadForm() {
  const handleUploadBook = async () => {};
  return (
    <section>
      <h1 className="text-center font-bold text-3xl my-3">Upload Book</h1>
      <form onSubmit={handleUploadBook}></form>
    </section>
  );
}

export default BookUploadForm;
