import React from "react";
import TreeCodeTabs from "./TreeCodeTabs";

const videos = [
  {
    language: "Python",
    url: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
  },
  {
    language: "Java",
    url: "https://www.youtube.com/watch?v=H5JubkIy_p8",
  },
  {
    language: "C",
    url: "https://www.youtube.com/watch?v=86g8jAQug04",
  },
  {
    language: "C++",
    url: "https://www.youtube.com/watch?v=fAAZixBzIAI",
  },
];

export default function Trees() {
  return (
    <div className="min-h-screen bg-black text-gray-300 py-8">
      <div className="max-w-4xl mx-auto p-8 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-[#00FF7F]">Trees</h1>

        <p className="mb-6 text-lg leading-relaxed">
          A <strong>Tree</strong> is a hierarchical data structure consisting
          of nodes. The topmost node is called the <strong>root</strong>, and
          each node may have zero or more child nodes. In a{" "}
          <strong>Binary Tree</strong>, each node has at most two children:{" "}
          <code>left</code> and <code>right</code>.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FF7F]">
          Characteristics
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>The root node has no parent.</li>
          <li>Each edge connects a parent to its child.</li>
          <li>There is exactly one path between any two nodes.</li>
          <li>Trees are non-linear data structures.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FF7F]">
          Basic Tree Operations (Choose Your Language)
        </h2>
        <TreeCodeTabs />

        <h2 className="text-2xl font-semibold mb-4 text-[#00FF7F]">
          Applications
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>Storing hierarchical data like file systems.</li>
          <li>Binary Search Trees for fast lookup.</li>
          <li>Syntax trees in compilers.</li>
          <li>Heaps for priority queues.</li>
          <li>Routing algorithms in networks.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FF7F]">
          Free Resources
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-3">
          {videos.map(({ language, url }) => (
            <li key={language}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00FF7F] hover:text-[#00CC66] transition font-medium"
                title={`Watch Trees tutorial in ${language}`}
              >
                videoTrees in {language}
              </a>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FF7F]">
          Basic Problems
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>Inorder Traversal</li>
          <li>Preorder Traversal</li>
          <li>Postorder Traversal</li>
          <li>Level Order Traversal</li>
          <li>Height of a Tree</li>
          <li>Count Nodes</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FF7F]">
          Medium Problems
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>Check if two trees are identical</li>
          <li>Lowest Common Ancestor (LCA)</li>
          <li>Diameter of a Binary Tree</li>
          <li>Convert Sorted Array to BST</li>
          <li>Sum of all Nodes</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FF7F]">
          Hard Problems
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>Serialize and Deserialize a Tree</li>
          <li>Vertical Order Traversal</li>
          <li>Boundary Traversal</li>
          <li>Maximum Path Sum</li>
          <li>Construct Tree from Preorder and Inorder</li>
        </ul>
      </div>
    </div>
  );
}
