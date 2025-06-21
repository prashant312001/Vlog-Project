import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-xl rounded-2xl mt-8">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <h1 className="text-2xl text-center my-4 text-pink-500 font-bold">
            No Blogs Found
          </h1>
        </div>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-md border border-pink-100 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-purple-700 mb-2">
              {post.title}
            </h2>
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2">
              <span className="mr-2">
                By{" "}
                <span className="font-semibold text-pink-600">
                  {post.author}
                </span>
              </span>
              <span className="mx-2">|</span>
              <span className="mr-2">
                Category:{" "}
                <span className="font-semibold text-purple-500">
                  {post.category}
                </span>
              </span>
              <span className="mx-2">|</span>
              <span>
                Posted on <span className="font-semibold">{post.date}</span>
              </span>
            </div>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <div>
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold mr-2 mb-2 shadow-sm hover:bg-pink-200 transition"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Blogs;
