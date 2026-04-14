import React from "react";
import { useParams, Link } from "react-router-dom";

const topicDetails = {
  "big-o-notation": {
    title: "Big O Notation",
    content: (
      <>
        <p>
          Big O notation describes how an algorithm's runtime or space requirements grow as input size increases.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>O(1): constant time</li>
          <li>O(log n): logarithmic time</li>
          <li>O(n): linear time</li>
          <li>O(n log n): linearithmic time</li>
          <li>O(n²): quadratic time</li>
        </ul>
      </>
    ),
  },
  "time-space-complexity": {
    title: "Time & Space Complexity",
    content: (
      <>
        <p>
          Time complexity measures the number of steps an algorithm takes, while space complexity tracks the extra memory it uses.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Time complexity examples: O(1), O(n), O(n²)</li>
          <li>Space complexity examples: O(1) auxiliary space, O(n) extra space</li>
          <li>Trade-offs: faster algorithms may use more memory.</li>
        </ul>
      </>
    ),
  },
  recursion: {
    title: "Recursion",
    content: (
      <>
        <p>Recursion occurs when a function calls itself to solve smaller subproblems.</p>
        <p>Common recursion patterns include divide and conquer, backtracking, and tree traversal.</p>
      </>
    ),
  },
  "sorting-algorithms": {
    title: "Sorting Algorithms",
    content: (
      <>
        <p>Sorting algorithms order items. Keep an eye on time and space complexity when choosing an algorithm.</p>
      </>
    ),
  },
  "searching-algorithms": {
    title: "Searching Algorithms",
    content: (
      <>
        <p>Searching algorithms find elements in data structures. Binary search is efficient on sorted arrays.</p>
      </>
    ),
  },
  arrays: {
    title: "Arrays",
    content: (
      <>
        <p>Arrays store elements sequentially and support fast indexed access.</p>
      </>
    ),
  },
  "linked-lists": {
    title: "Linked Lists",
    content: (
      <>
        <p>Linked lists store elements as nodes connected by pointers, making insertions and deletions efficient.</p>
      </>
    ),
  },
  stacks: {
    title: "Stacks",
    content: (
      <>
        <p>Stacks follow LIFO order and are used in recursion, parsing, and undo/redo functionality.</p>
      </>
    ),
  },
  queues: {
    title: "Queues",
    content: (
      <>
        <p>Queues follow FIFO order and power breadth-first search, task scheduling, and buffering.</p>
      </>
    ),
  },
  "hash-tables": {
    title: "Hash Tables",
    content: (
      <>
        <p>Hash tables provide average O(1) lookup time by using hash functions to map keys to buckets.</p>
      </>
    ),
  },
  trees: {
    title: "Trees",
    content: (
      <>
        <p>Trees are hierarchical data structures used for efficient searching and ordered storage.</p>
      </>
    ),
  },
  graphs: {
    title: "Graphs",
    content: (
      <>
        <p>Graphs model relationships between nodes and are used in navigation, social networks, and optimization problems.</p>
      </>
    ),
  },
  heaps: {
    title: "Heaps",
    content: (
      <>
        <p>Heaps are tree-based structures useful for priority queues and efficient selection.</p>
      </>
    ),
  },
  tries: {
    title: "Tries",
    content: (
      <>
        <p>Tries store strings by prefix and are helpful for autocomplete and dictionary searches.</p>
      </>
    ),
  },
  "greedy-algorithms": {
    title: "Greedy Algorithms",
    content: (
      <>
        <p>Greedy algorithms build solutions step-by-step choosing the best local option at each step.</p>
      </>
    ),
  },
  "divide-and-conquer": {
    title: "Divide and Conquer",
    content: (
      <>
        <p>Divide and conquer splits a problem into smaller pieces, solves each piece, and combines the results.</p>
      </>
    ),
  },
  "dynamic-programming": {
    title: "Dynamic Programming",
    content: (
      <>
        <p>Dynamic programming stores intermediate results to avoid repeated work in overlapping subproblems.</p>
      </>
    ),
  },
  backtracking: {
    title: "Backtracking",
    content: (
      <>
        <p>Backtracking builds candidate solutions and abandons them when they fail to meet constraints.</p>
      </>
    ),
  },
  "graph-algorithms": {
    title: "Graph Algorithms",
    content: (
      <>
        <p>Graph algorithms like BFS, DFS, Dijkstra, and Kruskal solve traversal and shortest-path problems.</p>
      </>
    ),
  },
  "strassen-matrix-multiplication": {
    title: "Strassen’s Matrix Multiplication",
    content: (
      <>
        <p>Strassen’s algorithm multiplies matrices faster than the naive O(n³) method using divide and conquer.</p>
      </>
    ),
  },
  "huffman-encoding": {
    title: "Huffman Encoding",
    content: (
      <>
        <p>Huffman encoding builds a prefix-free binary tree to compress data with variable-length codes.</p>
      </>
    ),
  },
  "dijkstras-algorithm": {
    title: "Dijkstra’s Algorithm",
    content: (
      <>
        <p>Dijkstra finds the shortest path in graphs with non-negative edge weights.</p>
      </>
    ),
  },
  "number-theory-algorithms": {
    title: "Number Theory Algorithms",
    content: (
      <>
        <p>Number theory algorithms include prime testing, modular arithmetic, and gcd-based techniques.</p>
      </>
    ),
  },
  "bit-manipulation": {
    title: "Bit Manipulation",
    content: (
      <>
        <p>Bit manipulation uses bitwise operators to solve problems efficiently in constant time.</p>
      </>
    ),
  },
  "mathematical-algorithms": {
    title: "Mathematical Algorithms",
    content: (
      <>
        <p>Mathematical algorithms include fast exponentiation, prime sieves, and modular arithmetic tricks.</p>
      </>
    ),
  },
  "string-algorithms": {
    title: "String Algorithms",
    content: (
      <>
        <p>String algorithms handle pattern matching, substring search, and text processing efficiently.</p>
      </>
    ),
  },
  "computational-geometry": {
    title: "Computational Geometry",
    content: (
      <>
        <p>Computational geometry solves problems involving points, lines, polygons, and spatial data.</p>
      </>
    ),
  },
};

const TopicDetail = () => {
  const { topicName } = useParams();
  const topic = topicDetails[topicName];

  if (!topic) {
    return <h2 className="text-center text-2xl mt-20">Topic not found.</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">{topic.title}</h1>
      <div className="prose max-w-none">{topic.content}</div>

      <div className="mt-10 p-4 border rounded bg-yellow-100 text-yellow-800 text-center text-lg">
        Didn&apos;t get the logic?{" "}
        <Link to="/chatbot" className="text-blue-600 underline hover:text-blue-800">
          Ask the chatbot.
        </Link>
      </div>
    </div>
  );
};

export default TopicDetail;
