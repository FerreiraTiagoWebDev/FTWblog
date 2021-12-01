import React, { useState, useEffect } from "react";
import NextLink   from "next/Link";
import { getCategories } from "../services";

const header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <NextLink href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              FTW Blog
            </span>
          </NextLink>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <NextLink key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </NextLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default header;
