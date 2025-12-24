"use client";
import dynamic from "next/dynamic";

const BackToTopButton = dynamic(() => import("./BackToTopButton"), {
  ssr: false, // This prevents server-side rendering
});

const BackToTopWrapper = () => {
  return <BackToTopButton />;
};

export default BackToTopWrapper;
