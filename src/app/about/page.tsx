import React from "react";
import Image from "next/image";
import Slider from "@/components/slider";

function about() {
  return (
    <div className="h-auto lg:px-28 text-white flex flex-col lg:flex-row items-center gap-16">
      <div className="px-5 sm:px-16 lg:px-0 w-full lg:max-w-3xl pt-10 lg:pt-30 lg:pb-20">
        <h1 className="text-5xl font-bold mb-6">About Shellmates</h1>
        <p className="text-lg mb-6">
          Shellmates club, is a group of highly motivated university students
          that are passionate about information security in general. Its
          diversity of members who are from different Wilayas & different
          universities is what makes it a special one. We strive to learn and
          develop our skills by working as a team in organized CTFs and creating
          our own CTFs for others to learn from our best members.
        </p>

        <div className="relative w-fit rounded-md p-[1px] bg-gradient-to-r from-[#2EFF6C33] to-[#A9A8B34D]">
          <div className="rounded-md p-6 pl-4 pr-9 bg-black h-full w-fit">
            <ul className="space-y-2 text-left w-fit">
              <li className="flex items-center gap-3 w-fit">
                <Image
                  src="/pics/tickIcon.png"
                  alt="Education Icon"
                  width={18}
                  height={18}
                  className="w-6 h-6"
                />
                <p>Organize hands-on cybersecurity training sessions.</p>
              </li>
              <Image src="/pics/breakLine.png" alt="" width={494} height={1} />
              <li className="flex items-center gap-3 w-fit">
                <Image
                  src="/pics/tickIcon.png"
                  alt="Education Icon"
                  width={18}
                  height={18}
                  className="w-6 h-6"
                />
                Host mentoring programs to guide learners.
              </li>
              <Image src="/pics/breakLine.png" alt="" width={494} height={1} />
              <li className="flex items-center gap-3 w-fit">
                <Image
                  src="/pics/tickIcon.png"
                  alt="Education Icon"
                  width={18}
                  height={18}
                  className="w-6 h-6"
                />
                Provide access to high-quality educational resources.
              </li>
              <Image src="/pics/breakLine.png" alt="" width={494} height={1} />
              <li className="flex items-center gap-3 w-fit">
                <Image
                  src="/pics/tickIcon.png"
                  alt="Education Icon"
                  width={18}
                  height={18}
                  className="w-6 h-6"
                />
                Foster a collaborative and engaging learning environment.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
}

export default about;
