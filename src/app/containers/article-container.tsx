'use client'

import { JSX, useEffect, useState } from "react";
import Image from 'next/image';
import { formatDate } from "../lib/utils";
import getAllArticles from "../axios/get-all-articles";
import { Article } from "../lib/types";

export default function ArticleContainer (): JSX.Element {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getAllArticles()
      .then((response) => {
        if (response) setArticles(response);
      });
  }, []);

  return (
    <div>
        <h2 className="text-2xl font-semibold mb-6">Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                className="w-full h-48 object-cover"
                src={process.env.NEXT_PUBLIC_STRAPI_URL + article.cover.url}
                alt={article.title}
                width={180}
                height={38}
                priority
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-black">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.content}</p>
                <p className="text-sm text-gray-500">
                  Published: {formatDate(article.publishedAt)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
  )
}