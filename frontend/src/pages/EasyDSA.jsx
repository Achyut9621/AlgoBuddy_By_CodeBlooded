import React from "react";
import { useNavigate } from "react-router-dom";

const topics = [
  { id: "basics", label: "Basics" },
  { id: "sorting", label: "Sorting" },
  { id: "searching", label: "Searching" },
  { id: "arrays", label: "Arrays" },
  { id: "linkedlists", label: "Linked Lists" },
  { id: "stacks", label: "Stacks & Queues" },
  { id: "trees", label: "Trees" },
  { id: "graphs", label: "Graphs" },
  { id: "dp", label: "Dynamic Programming" },
  { id: "greedy", label: "Greedy Algorithms" },
  { id: "advanced", label: "Advanced Data Structures" },
];

export default function EasyDSA() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-gray-300 p-8">
      {/* Hero */}
      <header className="max-w-4xl mx-auto text-center py-20 px-4">
        <h1
          className="
            text-6xl md:text-7xl font-extrabold
            bg-gradient-to-r from-[#00FFFF] to-[#007FFF]
            bg-clip-text text-transparent
            drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]
          "
        >
          🚀 Easy DSA Roadmap
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Master Data Structures & Algorithms with a clear, guided path.
        </p>
        <button
          onClick={() => navigate("/topics/basics")}
          className="
            mt-8 inline-flex items-center gap-2
            bg-[#00FFFF] hover:bg-[#00e5e5]
            text-black font-semibold
            px-6 py-3 rounded-lg
            shadow-md
            transition
          "
        >
          Start Learning
        </button>
      </header>

      {/* Topics Grid */}
      <main className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {topics.map(({ id, label }) => (
            <div
              key={id}
              onClick={() => navigate(`/topics/${id}`)}
              className="
                group relative
                h-40 cursor-pointer
                rounded-2xl
                transition-transform duration-300
                hover:scale-105
              "
            >
              {/* Soft neon border */}
              <div
                className="
                  absolute inset-0 rounded-2xl
                  border-2 border-transparent
                  bg-gradient-to-br from-[#00FFFF] to-[#007FFF]
                  p-0.5
                  group-hover:opacity-80
                "
              />

              {/* Card panel */}
              <div
                className="
                  relative z-10 flex flex-col items-center justify-center
                  h-full
                  bg-white bg-opacity-5 backdrop-blur-sm
                  rounded-2xl
                "
              >
                <span className="text-lg font-medium text-white">
                  {label}
                </span>
                <span className="mt-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
