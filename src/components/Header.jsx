import React from "react";

function Header() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg py-6 rounded-b-2xl border-b-4 border-pink-300 w-full mb-8">
      <header>
        <h1 className="text-4xl font-extrabold text-white text-center uppercase tracking-widest drop-shadow-lg">
           Blogs
        </h1>
        <p className="text-center text-pink-100 mt-2 text-lg italic">
          Your daily dose of coding inspiration!
        </p>
      </header>
    </div>
  );
}

export default Header;
