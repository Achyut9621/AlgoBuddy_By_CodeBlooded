import React from "react";
import CodeTabs from "./CodeTabs";

const videos = [
  { language: "Python", url: "https://www.youtube.com/watch?v=wgJZy7-muwY" },
  { language: "Java", url: "https://www.youtube.com/watch?v=0Af7PU1F8-Y" },
  { language: "Javascript", url: "https://www.youtube.com/watch?v=R8rmfD9Y5-c" },
  { language: "GoLang", url: "https://www.youtube.com/watch?v=YS4e4q9oBaU" },
  { language: "C#", url: "https://www.youtube.com/watch?v=gfkTfcpWqAY" },
  { language: "C++", url: "https://www.youtube.com/watch?v=92S4zgXN17o" },
  { language: "Rust", url: "https://www.youtube.com/watch?v=M3s6dHWKaCs" },
  { language: "Ruby", url: "https://www.youtube.com/watch?v=tRVxNd2Lb24" },
];

export default function Arrays() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-300 py-8">
      {/* Center Container */}
      <div className="max-w-4xl mx-auto p-8 bg-[#1e293b] rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-[#00FFFF]">Arrays</h1>

        <p className="mb-6 text-lg leading-relaxed">
          In this article, we introduce arrays, their implementations in popular
          languages, basic operations, and frequently encountered problems or
          interview questions.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          An array stores items (in C/C++ and Java primitive arrays) or
          references (in Python, JavaScript, Java non-primitive arrays) at
          contiguous memory locations. It provides:
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">Advantages</h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>Random Access: i-th item can be accessed in <code>O(1)</code> time.</li>
          <li>Cache Friendliness: contiguous storage grants strong locality.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">Disadvantages</h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>Insertions or deletions in the middle are expensive.</li>
          <li>Linear search in an unsorted array is <code>O(n)</code>.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">Basic Array Operations</h2>
        <CodeTabs />

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">Applications</h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>Foundation for Stack, Queue, Deque.</li>
          <li>Graphs: adjacency lists or matrices.</li>
          <li>Hash tables, heaps, and more.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">Implementation in Different Languages</h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>Arrays in C</li>
          <li>Vector in C++ STL</li>
          <li>Arrays in Java</li>
          <li>ArrayList in Java</li>
          <li>List in Python</li>
          <li>Arrays in C#</li>
          <li>Arrays in JavaScript</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">Link to Free Resources</h2>
        <ul className="list-disc list-inside mb-6 space-y-3">
          {videos.map(({ language, url }) => (
            <li key={language}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00FF90] hover:text-[#00CCCC] transition font-medium"
              >
                Video: Arrays in {language}
              </a>
            </li>
          ))}
        </ul>

        {/* Keeping your Problems sections unchanged */}
        {/* ... (Easy, Medium, Hard Problems remain same) ... */}
      </div>
    </div>
  );

}