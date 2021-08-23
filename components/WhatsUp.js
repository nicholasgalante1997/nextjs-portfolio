import React from "react";
import userData from "@constants/data";

export default function LatestCode() {
  return (
    <section className="bg-[#F1F1F1] -mt-60 dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10">
          <h4 className="text-5xl lg:text-5xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center lg:text-left">
            A What's Up To Arms
          </h4>
        </div>
      </div>
      <div className="w-full gap-8 max-w-6xl mx-auto px-10 pt-10">
        <p>{userData.whatsUpText}</p>
      </div>
    </section>
  );
}
