import React from "react";

export default function Recursion() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <div className="max-w-4xl w-full">
        {/* Title */}
        <h1 className="text-4xl font-bold text-[#00FFFF] mb-4">Recursion</h1>

        {/* Introduction */}
        <p className="text-lg text-gray-300 mb-6">
          Recursion is a programming technique where a function calls itself
          either directly or indirectly to solve a problem. It breaks down a
          problem into smaller subproblems until it reaches a base condition.
        </p>

        {/* Why Recursion? */}
        <h2 className="text-2xl font-semibold text-[#00FFFF] mb-3">
          Why Use Recursion?
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li>Useful for problems that can be divided into similar subproblems.</li>
          <li>Provides cleaner and more readable code for complex algorithms.</li>
          <li>Widely used in algorithms like DFS, backtracking, and divide & conquer.</li>
        </ul>

        {/* Key Concepts */}
        <h2 className="text-2xl font-semibold text-[#00FFFF] mb-3">
          Key Concepts in Recursion:
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li>
            <strong>Base Case:</strong> Condition where recursion stops to prevent infinite loops.
          </li>
          <li>
            <strong>Recursive Case:</strong> The part where the function calls itself with a smaller input.
          </li>
          <li>
            <strong>Stack Memory:</strong> Each function call is stored in the call stack until completed.
          </li>
        </ul>

        {/* Types of Recursion */}
        <h2 className="text-2xl font-semibold text-[#00FFFF] mb-3">
          Types of Recursion:
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li><strong>Direct Recursion:</strong> Function calls itself directly.</li>
          <li><strong>Indirect Recursion:</strong> Function calls another function which calls it back.</li>
          <li><strong>Tail Recursion:</strong> Recursive call is the last statement in the function.</li>
          <li><strong>Non-Tail Recursion:</strong> Recursive call is followed by other operations.</li>
        </ul>

        {/* Example Diagram */}
        <h2 className="text-2xl font-semibold text-[#00FFFF] mb-3">
          Example Diagram:
        </h2>
        <div className="bg-gray-900 p-4 rounded-lg mb-6">
          <img
            src="my-react-app\src\pages\TopicNotes\recursion.webp"
            alt="Recursion Example"
            className="rounded-lg mx-auto"
          />
        </div>

        {/* Code Example */}
        <h2 className="text-2xl font-semibold text-[#00FFFF] mb-3">
          Example: Factorial using Recursion
        </h2>
        <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm text-gray-300 mb-6">
{`function factorial(n) {
  if (n === 0 || n === 1) return 1; // Base case
  return n * factorial(n - 1);      // Recursive case
}

console.log(factorial(5)); // Output: 120`}
        </pre>

        {/* Video Link */}
        <h2 className="text-2xl font-semibold text-[#00FFFF] mb-3">
          Watch & Learn:
        </h2>
        <div className="mb-6">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/k7-N8R0-KY4"
            title="Recursion Tutorial"
            frameBorder="0"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Chatbot Reference */}
        <div className="bg-gray-900 p-4 rounded-lg border border-[#00FFFF]">
          <p className="text-lg text-gray-300">
            ❓ Still confused about recursion?{" "}
            <a
              href="/chatbot"
              className="text-[#00FFFF] font-semibold hover:underline"
            >
              Ask the Chatbot
            </a>{" "}
            for a step-by-step explanation.
          </p>
        </div>
      </div>
    </div>
  );
}
