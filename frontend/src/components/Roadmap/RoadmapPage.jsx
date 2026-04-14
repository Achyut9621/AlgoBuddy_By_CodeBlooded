import React from "react";
import { useNavigate } from "react-router-dom";

const RoadmapPage = () => {
  const navigate = useNavigate();

  // ✅ Dummy Data for Beginner + Intermediate Topics
  const beginnerTopics = [
    {
      title: "Basics",
      description: "Learn syntax, loops, conditionals, and basic problem solving.",
    },
    {
      title: "Arrays",
      description: "Understand arrays, operations, and common interview problems.",
    },
    {
      title: "Strings",
      description: "String manipulation and pattern matching basics.",
    },
    {
      title: "Linked List",
      description: "Single, double, and circular linked lists.",
    },
  ];

  const intermediateTopics = [
    {
      title: "Stack",
      description: "Implement stack and solve standard problems.",
    },
    {
      title: "Queue",
      description: "Learn queue, circular queue, and priority queue.",
    },
    {
      title: "Searching",
      description: "Binary search and advanced searching problems.",
    },
    {
      title: "Sorting",
      description: "Quick sort, merge sort, and time complexities.",
    },
  ];

  const handleClick = (title) => {
    // Convert title to route-friendly format, e.g., "Basics" -> "/basics"
    const route = "/" + title.toLowerCase().replace(/\s+/g, "");
    navigate(route);
  };

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-4xl font-bold mb-10 text-center">DSA Roadmap</h1>

      {/* Beginner */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-400">
          1st Year - Beginner Level
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beginnerTopics.map(({ title, description }) => (
            <div
              key={title}
              className="p-5 shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
              style={{ backgroundColor: "#00FFFF", color: "#000" }}
              onClick={() => handleClick(title)}
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intermediate */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-purple-400">
          2nd Year - Intermediate Level
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {intermediateTopics.map(({ title, description }) => (
            <div
              key={title}
              className="p-5 shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
              style={{ backgroundColor: "#00FFFF", color: "#000" }}
              onClick={() => handleClick(title)}
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RoadmapPage;
