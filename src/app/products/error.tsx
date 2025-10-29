"use client";

import { useEffect } from "react";

const ProductsErrorPage = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {

  useEffect(() => {
    console.error("Error in Products Page:", error);
  },[error])

  return (
    <div className="min-h-dvh flex flex-col justify-center items-center text-6xl">
      <h1 className="text-red-500">{error.message}</h1>
      <button
        onClick={() => reset()}
        className="mt-6 px-4 py-2 bg-gray-200 cursor-pointer text-black rounded-lg"
      >
        Reload App
      </button>
    </div>
  );
};

export default ProductsErrorPage;
