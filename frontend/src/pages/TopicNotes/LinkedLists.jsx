import React from "react";
import LinkedListCodeTabs from "./LinkedListCodeTabs";

const videos = [
  {
    language: "Python",
    url: "https://www.youtube.com/watch?v=1iz9SRWdpX8", 
  },
  {
    language: "Java",
    url: "https://www.youtube.com/watch?v=hDwPD6kTmEk", 
  },
  {
    language: "C++",
    url: "https://www.youtube.com/watch?v=FZfjv7DraD4", 
  },
  {
    language: "C",
    url: "https://www.youtube.com/watch?v=MCIwn7mY4jY", 
  },
];

export default function LinkedList() {
  return (
    <div className="min-h-screen bg-black text-gray-300 py-8">
      <div className="max-w-4xl mx-auto p-8 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-[#00FFFF]">Linked List</h1>

        <p className="mb-6 text-lg leading-relaxed">
          This article introduces linked lists: the concept, core operations, and how they work in various programming languages. You’ll also find examples in Python, Java, C, and C++, along with curated practice problems.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">What is a Linked List?</h2>
        <p className="mb-4 text-gray-400">
          A <span className="text-[#00FFFF] font-semibold">Linked List</span> is a linear data structure composed of nodes, where each node holds data and a reference (or pointer) to the next node. Unlike arrays, elements are not stored contiguously.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">Advantages</h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>Dynamic Size: Easily grows or shrinks at runtime.</li>
          <li>Efficient Insertion/Deletion: O(1) if you know the node reference.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">Disadvantages</h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>Sequential access only—no direct indexing (<code>O(n)</code> access cost).</li>
          <li>Extra memory overhead for pointers.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">
          Basic Linked List Operations (Pick Language)
        </h2>
        <LinkedListCodeTabs/>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">Applications</h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>Implementation of stacks, queues, hash collisions (chaining).</li>
          <li>Useful in memory allocation, undo functionality, adjacency lists.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">Free Resources</h2>
        <ul className="list-disc list-inside mb-6 space-y-3">
          {videos.map(({ language, url }) => (
            <li key={language}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00FFFF] hover:text-[#00CCCC] transition font-medium"
                title={`Watch Linked List tutorial in ${language}`}
              >
                Video: Linked List in {language}
              </a>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">Basic Problems</h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>Traverse a linked list</li>
          <li>Insert at head or tail</li>
          <li>Delete a given node</li>
          <li>Search for an element</li>
          <li>Find length of linked list</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">Easy Problems</h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>Reverse a linked list</li>
          <li>Detect a cycle (Floyd’s algorithm)</li>
          <li>Delete Middle Node without head pointer</li>
          <li>Find Nth node from end</li>
          <li>Merge two sorted lists</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">Medium Problems</h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>Add two numbers represented by linked lists</li>
          <li>Remove Nth node from end</li>
          <li>Partition list around a value</li>
          <li>Copy list with random pointer</li>
          <li>Rotate list by k places</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[#00FFFF]">Hard Problems</h2>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-400">
          <li>Reverse nodes in k-group</li>
          <li>Merge K sorted lists</li>
          <li>LRU Cache Implementation</li>
          <li>Flatten multilevel doubly linked list</li>
          <li>Detect & remove loop</li>
        </ul>
      </div>
    </div>
  );
}
