"use client";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="lg:text-4xl md:text-2xl text-xl ">404! Page Not Found!</h1>
      <Link className=" text-sm text-black align-bottom" href={"/"}>
        back to home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
