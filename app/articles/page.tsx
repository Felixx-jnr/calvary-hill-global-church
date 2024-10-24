import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import { articles } from "@/constants/articleConstant";
import Link from "next/link";

const ArticlesList = () => {
  return (
    <main className="bg-smokeWhite">
      <header>
        <Header
          header="Articles"
          page="All Articles"
        />
      </header>
      <div className=" bg-smokeWhite mx-auto xs:w-[94%] w-[96%] grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 grid-flow-row gap-8 ">
        {articles.map((article) => (
          <Link
            href={`/articles/${article.id}`}
            key={article.id}
            className=" hover:bg-white p-1"
          >
            <div className="max-xs:flex justify-center ">
              <Image
                src={article.imgSrc}
                alt={""}
                width={2000}
                height={2000}
                className="w-full object-cover"
              />
            </div>

            <h3 className="sm:text-4xl text-3xl font-sofia-bold my-1 px-1 ">
              {article.title}
            </h3>
            <p className=" text-sm text-midGrey my-1 px-1">{article.date}</p>
            <h4 className=" text-sm md:text-base text-lightGrey font-medium px-1">
              {article.desc}
            </h4>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ArticlesList;
