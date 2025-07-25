import { getContent } from "@/sanity/sanity.utils";
import { PortableText, PortableTextReactComponents } from "next-sanity";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default async function Footer() {
  const contacts = await getContent("contacts");
  const copyright = await getContent("copyright");

  const timeAndContactsStyle: Partial<PortableTextReactComponents> = {
    block: {
      h3: ({ children }) => (
        <header className="flex items-center mt-3 mb-1">
          <h3 className="text-xl font-semibold">{children}</h3>
        </header>
      ),
      p: ({ children }) => (
        <p className="whitespace-pre-wrap mb-5">{children}</p>
      ),
    },
  };

  const copyrightStyle: Partial<PortableTextReactComponents> = {
    block: {
      normal: ({ children }) => (
        <p className="text-slate-400 text-center whitespace-pre-wrap">
          {children}
        </p>
      ),
    },
  };

  return (
    <footer className="bottom-0 w-full bg-gray-50 bg-opacity-40 shadow-inner px-16 py-8">
      {/* Container for the entire footer content */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
        {/* Name and Hygiene logo */}
        <article className="flex flex-col items-center m-5 mt-8 text-center">
          <p className="text-lg font-semibold mb-10">21 SID</p>
          <br />
          <Image
            src="/health-safety.png"
            alt="Food Hygiene Rating badge showing a rate of 5 out of 5, meaning Very Good."
            className="w-32"
            width={300}
            height={300}
          />
        </article>

        {/* Address */}
        <p className="ml-5 mt-8 text-center whitespace-pre-wrap sm:mt-8 font-semibold">
          {`21 Sidworth Street\nLondon, UK\nE8 3SD`}
        </p>

        {/* Time and contacts */}
        <article className="flex flex-col items-center m-5 mt-8 text-center">
          <PortableText
            value={contacts.Content}
            components={timeAndContactsStyle}
          />
          <SocialLinks />
        </article>
      </div>

      {/* Copyright notice */}
      <PortableText value={copyright.Content} components={copyrightStyle} />
    </footer>
  );
}
