import Image from "next/image";
import {} from "react";

function Logo() {
  return (
    <>
      <div>
        <a href="/" className="select-none">
          <Image src="/pdflogo.png" alt="" width="70" height={70} />
        </a>
      </div>
    </>
  );
}

export default Logo;
