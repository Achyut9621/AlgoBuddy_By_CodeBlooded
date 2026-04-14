import React, { useState } from "react";

const topicData = {
  Array: [
    "✅ Arrays are linear data structures that store elements in contiguous memory locations.",
    "✅ They allow random access using indices (O(1) access time).",
    "✅ Basic operations: Traversal, Insertion, Deletion, Searching, Sorting.",
    "⚡ Common Problems:",
    "   - Two Sum Problem (Hashing based solution).",
    "   - Maximum Subarray Sum (Kadane’s Algorithm).",
    "   - Merge Intervals.",
    "   - Rotate an Array (using reversal or juggling algorithm).",
    "   - Find Duplicate in Array.",
    "   - Maximum Product Subarray."
  ],
  LinkedList: [
    "✅ Linked List is a linear data structure where elements (nodes) are connected using pointers.",
    "✅ Types: Singly Linked List, Doubly Linked List, Circular Linked List.",
    "✅ Each node contains `data` and a `next` pointer (and `prev` in DLL).",
    "⚡ Operations:",
    "   - Insertion at head, tail, or middle.",
    "   - Deletion of node by value or position.",
    "   - Reversal of a Linked List (iterative and recursive).",
    "   - Detect Cycle in Linked List (Floyd’s Cycle Detection).",
    "   - Merge Two Sorted Linked Lists.",
    "   - Find Middle Node (fast & slow pointer).",
    "   - LRU Cache implementation using DLL + HashMap."
  ],
  Stack: [
    "✅ Stack is a LIFO (Last In First Out) data structure.",
    "✅ Operations: push(), pop(), peek().",
    "✅ Applications: Undo mechanism, Recursion, Expression evaluation.",
    "⚡ Important Problems:",
    "   - Balanced Parentheses.",
    "   - Min Stack (support getMin in O(1)).",
    "   - Next Greater Element.",
    "   - Evaluate Postfix Expression.",
    "   - Implement Stack using Queues.",
    "   - Largest Rectangle in Histogram."
  ],
  Queue: [
    "✅ Queue is a FIFO (First In First Out) data structure.",
    "✅ Types: Simple Queue, Circular Queue, Double-Ended Queue (Deque), Priority Queue.",
    "✅ Applications: Scheduling, Buffers, Graph Traversals (BFS).",
    "⚡ Problems:",
    "   - Implement Queue using Stacks.",
    "   - Sliding Window Maximum.",
    "   - Rotten Oranges (Matrix BFS).",
    "   - LRU Cache (Queue + HashMap)."
  ],
  Tree: [
    "✅ Tree is a non-linear hierarchical data structure.",
    "✅ Types: Binary Tree, Binary Search Tree (BST), AVL Tree, Heap, Trie.",
    "⚡ Traversals:",
    "   - DFS: Inorder, Preorder, Postorder.",
    "   - BFS: Level Order Traversal.",
    "⚡ Important Problems:",
    "   - Lowest Common Ancestor (LCA).",
    "   - Diameter of Tree.",
    "   - Height Balanced Tree.",
    "   - Serialize and Deserialize Binary Tree.",
    "   - Construct Tree from Traversals."
  ],
  Graph: [
    "✅ Graph is a set of nodes connected by edges.",
    "✅ Types: Directed, Undirected, Weighted, Unweighted, Cyclic, Acyclic.",
    "⚡ Representations:",
    "   - Adjacency List.",
    "   - Adjacency Matrix.",
    "⚡ Traversals:",
    "   - Depth First Search (DFS).",
    "   - Breadth First Search (BFS).",
    "⚡ Algorithms:",
    "   - Dijkstra’s Shortest Path.",
    "   - Bellman-Ford Algorithm.",
    "   - Floyd-Warshall Algorithm.",
    "   - Kruskal’s & Prim’s MST.",
    "   - Topological Sorting (Kahn’s Algo, DFS).",
    "   - Detect Cycle in Directed Graph.",
    "   - Number of Connected Components."
  ],
  Sorting: [
    "✅ Sorting is arranging elements in increasing or decreasing order.",
    "⚡ Types of Sorting Algorithms:",
    "   - Bubble Sort (O(n^2)).",
    "   - Selection Sort (O(n^2)).",
    "   - Insertion Sort (O(n^2)).",
    "   - Merge Sort (O(n log n), stable).",
    "   - Quick Sort (O(n log n) avg, O(n^2) worst).",
    "   - Heap Sort (O(n log n)).",
    "   - Counting Sort (O(n+k), non-comparison).",
    "   - Radix Sort.",
    "   - Bucket Sort.",
    "⚡ Advanced:",
    "   - External Sorting.",
    "   - Tim Sort (used in Python)."
  ],
  Searching: [
    "✅ Searching is the process of finding an element in a data structure.",
    "⚡ Techniques:",
    "   - Linear Search (O(n)).",
    "   - Binary Search (O(log n), works on sorted arrays).",
    "   - Ternary Search.",
    "   - Exponential Search.",
    "   - Jump Search.",
    "⚡ Applications:",
    "   - Find first and last occurrence in sorted array.",
    "   - Search in Rotated Sorted Array.",
    "   - Find Peak Element.",
    "   - Median of Two Sorted Arrays."
  ],
  Recursion: [
    "✅ Recursion is a process where a function calls itself.",
    "⚡ Applications:",
    "   - Factorial, Fibonacci Numbers.",
    "   - Tower of Hanoi.",
    "   - N-Queens Problem.",
    "   - Rat in a Maze Problem.",
    "   - Word Search in Grid.",
    "⚡ Advanced:",
    "   - Backtracking (Sudoku Solver, Permutations).",
    "   - Recursive Tree Traversals.",
    "   - Generate All Subsequences/Subsets."
  ],
  DP: [
    "✅ Dynamic Programming (DP) is used to optimize recursive solutions by storing subproblem results.",
    "⚡ Types:",
    "   - Top-Down (Memoization).",
    "   - Bottom-Up (Tabulation).",
    "⚡ Classic Problems:",
    "   - Fibonacci Number.",
    "   - Longest Common Subsequence.",
    "   - Longest Increasing Subsequence.",
    "   - 0/1 Knapsack Problem.",
    "   - Coin Change Problem.",
    "   - Matrix Chain Multiplication.",
    "   - Minimum Path Sum in Grid.",
    "   - Edit Distance (Levenshtein)."
  ],
  Hashing: [
    "✅ Hashing is the process of mapping data to a fixed-size value (hash).",
    "⚡ Applications:",
    "   - HashMap / HashSet.",
    "   - Frequency Counting.",
    "   - Detecting Duplicates.",
    "   - Subarray with Given Sum.",
    "   - Longest Consecutive Subsequence.",
    "   - Group Anagrams.",
    "   - LRU Cache (HashMap + DLL).",
    "   - Design Data Structures (LFU, Hashing with Chaining/Probing)."
  ]
};

const Topics = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleClick = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">Topics</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(topicData).map((topic) => (
          <button
            key={topic}
            onClick={() => handleClick(topic)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow-lg"
          >
            {topic}
          </button>
        ))}
      </div>
      {selectedTopic && (
        <div className="bg-white p-6 rounded shadow max-w-3xl mx-auto border border-blue-200">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            {selectedTopic} Notes:
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            {topicData[selectedTopic].map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Topics;
