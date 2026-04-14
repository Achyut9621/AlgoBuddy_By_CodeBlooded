import React from "react";
import resources from "../data/resourcesData";

const Resources = () => {
  return (
    <div className="min-h-screen bg-black text-white py-10 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-electricBlue drop-shadow-lg">
        📚 Resources Hub
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {resources.map((res, index) => (
          <div
            key={index}
            className="bg-black border-2 border-electricBlue rounded-xl p-6 
                       hover:shadow-[0_0_20px_#00f7ff] transition duration-300 cursor-pointer"
            onClick={() =>
              res.link.startsWith("http")
                ? window.open(res.link, "_blank")
                : (window.location.href = res.link)
            }
          >
            <h2 className="text-2xl font-bold mb-3 text-electricBlue">
              {res.title}
            </h2>
            <p className="text-gray-300">{res.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
