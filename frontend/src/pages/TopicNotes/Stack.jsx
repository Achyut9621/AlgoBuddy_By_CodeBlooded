import React from "react";
import StackCodeTabs from "./StackCodeTabs";

const videos = [
  {
    language: "Python",
    url: "https://www.youtube.com/watch?v=zwb3GmNAtFk",
  },
  {
    language: "Java",
    url: "https://www.youtube.com/watch?v=wjI1WNcIntg",
  },
  {
    language: "C",
    url: "https://www.youtube.com/watch?v=HjdJzNoT_qg",
  },
  {
    language: "C++",
    url: "https://www.youtube.com/watch?v=1AJ4ldcH2t4",
  },
];

export default function Stack() {
  return (
    <div className="min-h-screen bg-black text-gray-300 py-8">
      <div className="max-w-4xl mx-auto p-8 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-[#00FFFF]">Stack</h1>

        <p className="mb-6 text-lg leading-relaxed">
          A <strong>Stack</strong> is a linear data structure that follows the{" "}
          <strong>LIFO (Last In First Out)</strong> principle. Elements are
          added (<code>push</code>) and removed (<code>pop</code>) only from the
          top of the stack.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">
          Characteristics
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>Last element inserted is the first to be removed.</li>
          <li>Supports push, pop, peek/top, and isEmpty operations.</li>
          <li>Can be implemented using arrays or linked lists.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">
          Basic Stack Operations (Choose Your Language)
        </h2>
        <StackCodeTabs/>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">
          Applications
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>Undo/Redo functionality in editors.</li>
          <li>Expression evaluation (postfix/prefix).</li>
          <li>Function call stack in recursion.</li>
          <li>Backtracking algorithms.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">
          Free Resources
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-3">
          {videos.map(({ language, url }) => (
            <li key={language}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00FFFF] hover:text-[#00CCCC] transition font-medium"
                title={`Watch Stack tutorial in ${language}`}
              >
                videoStack in {language}
              </a>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">
          Basic Problems
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>Implement Stack using Array</li>
          <li>Implement Stack using Linked List</li>
          <li>Balanced Parentheses</li>
          <li>Next Greater Element</li>
          <li>Reverse a String using Stack</li>
          <li>Evaluate Postfix Expression</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">
          Medium/Advanced Problems
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>Min Stack (getMin in O(1))</li>
          <li>Largest Rectangle in Histogram</li>
          <li>Stock Span Problem</li>
          <li>Celebrity Problem</li>
          <li>Design a stack with middle element retrieval</li>
        </ul>
      </div>
    </div>
  );
}
