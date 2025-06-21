import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Footer() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg py-6 rounded-t-2xl border-t-4 border-pink-300 w-full mt-8">
      <div className="max-w-4xl mx-auto p-4 text-center text-white">
        <div className="flex justify-center gap-4 mb-4">
          {page > 1 && (
            <button
              className="bg-blue-500 hover:bg-blue-700 transition-colors duration-200 text-white font-bold py-2 px-6 rounded-l-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={() => handlePageChange(page - 1)}
            >
              &#8592; Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="bg-blue-500 hover:bg-blue-700 transition-colors duration-200 text-white font-bold py-2 px-6 rounded-r-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={() => handlePageChange(page + 1)}
            >
              Next &#8594;
            </button>
          )}
        </div>
        <p className="text-lg mt-2 font-semibold tracking-wide drop-shadow">
          Page <span className="text-pink-200">{page}</span> of{" "}
          <span className="text-pink-200">{totalPages}</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
