import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="px-5 sm:px-16 lg:px-28 pb-4 pt-5 flex flex-col items-center justify-center gap-4 w-full bg-black backdrop-blur text-white">
        <Link href="/">
          <Image
            src="/pics/logo.png"
            alt="Logo"
            width={481}
            height={639}
            className="w-auto h-12 sm:h-20"
          />
        </Link>
        <div className="flex flex-col items-center justify-center gap-2.5">
          <h1 className="font-bold text-sm md:text-lg text-center">
            SHELLMATES Club.
            <br />
            Providing reliable InfoSec content since 2011
          </h1>
          <div className="flex gap-8">
            <Link href="">
              <Image
                src="/pics/socialIcons/instagram.png"
                alt="Instagram"
                width={25}
                height={25}
                className="h-5 w-5 md:h-6 md:w-6"
              />
            </Link>
            <Link href="https://www.linkedin.com/company/shellmatesclub">
              <Image
                src="/pics/socialIcons/linkedIn.png"
                alt="LinkedIn"
                width={25}
                height={25}
                className="h-5 w-5 md:h-6 md:w-6"
              />
            </Link>
            <Link href="https://www.facebook.com/shellmatesclub">
              <Image
                src="/pics/socialIcons/facebook.png"
                alt="Facebook"
                width={25}
                height={25}
                className="h-5 w-5 md:h-6 md:w-6"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="px-5 sm:px-16 lg:px-28 flex flex-col items-center justify-center w-full bg-[#17351F]">
        <p className="text-white text-md py-1.5">
          Copyright © 2025 - All rights reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
