
"use client"



import { Icons } from "@/app/components/Icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 text-slate-300 shadow-lg dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-2 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">
          © 2023
          <a
            target="_blank"
            href="https://github.com/ankitbourasi0"
            className="mx-1 hover:underline"
          >
           ankitbourasi0
          </a>
           All Rights Reserved.
        </span>
        {/* <div className="mt-3 flex items-center gap-2 text-sm sm:text-center md:mt-0">
          <Icons.github />
          <a
            target="_blank"
            href="https://github.com/ankitbourasi0"
            className="block text-gray-200 hover:underline"
          >
            GitHub
          </a>
        </div> */}
        <ul className="mt-3 flex flex-wrap items-center gap-4 text-sm font-medium md:mt-0">
          {/* <li>
            <a
              target="_blank"
              href="https://github.com/riad-azz/instagram-video-downloader/blob/master/LICENSE.md"
              className="hover:underline"
            >
              Licensing
            </a>
          </li> */}
          <li>
            <a
              target="_blank"
              href="https://github.com/ankitbourasi0"
              className="hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
