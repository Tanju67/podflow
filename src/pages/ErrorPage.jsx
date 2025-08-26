import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="bg-main font-secondary flex h-screen flex-col items-center justify-center gap-10 text-6xl text-white">
      <span className="text-8xl font-bold">404</span>
      <span>Page Not Found!</span>
      <button className="font-secondary rounded-full bg-amber-700 px-10 py-3 text-sm text-white hover:bg-amber-600 sm:text-base">
        <Link to="/">Return Home Page</Link>
      </button>
    </div>
  );
}

export default ErrorPage;
