import React from "react";
import BG from "public/bg.jpeg";

export default function Index() {
  return (
    <main className="flex w-[100%] h-[100%] bg-red-300">
      <div className="text-[80px] bg-red-300 jumbotron"></div>
      <div className="bg-red-300 absolute w-[100%] h-[100%] opacity-[25%]"></div>
      <div className="z-20 relative mx-[auto] my-[50px] text-[50px]">
        <span>Hi There, My Name is </span>
        <strong className="text-red-500">Putra Satria Pratama</strong>
      </div>
    </main>
  );
}
