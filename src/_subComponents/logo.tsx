import Image from "next/image";
import Link from "next/link";
import {} from "react";

function Logo() {
  return (
    <>
      <div>
        <Link href="/" className="select-none">
          <Image src="/pdflogo.png" alt="" width="70" height={70} />
        </Link>
      </div>
    </>
  );
}

export default Logo;
