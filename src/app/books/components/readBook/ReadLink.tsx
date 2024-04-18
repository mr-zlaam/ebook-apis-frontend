import Link from "next/link";
import {} from "react";
interface ReadLinkProps {
  file: string;
}
function ReadLink({ file }: ReadLinkProps) {
  return (
    <>
      <Link
        href={file}
        target="_blank"
        className="hover:underline text-blue-600 font-fugaz"
      >
        Read the Book
      </Link>
    </>
  );
}

export default ReadLink;
