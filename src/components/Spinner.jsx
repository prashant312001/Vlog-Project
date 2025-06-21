import React from "react";

function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className="w-12 h-12 border-4 border-pink-400 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-lg font-semibold text-pink-500 tracking-wide">
        Loading...
      </p>
    </div>
  );
}

export default Spinner;
