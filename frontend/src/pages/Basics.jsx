import React from "react";

export default function Basic() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">
          Basics of Data Structures & Algorithms
        </h1>
        <p className="text-gray-300 mb-8">
          Before diving deep into advanced DSA topics, it’s crucial to
          understand the foundation — time complexity, recursion, and basic
          sorting algorithms. These concepts form the backbone of problem
          solving in computer science.
        </p>

        {/* Time Complexity */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-3">
            Time Complexity
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Time complexity is the rate at which the run time of an algorithm
            increases as the size of the input increases. It helps us compare
            algorithms without running them.
          </p>

          <h3 className="text-lg font-semibold text-gray-200 mt-4">
            Common Complexities:
          </h3>
          <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
            <li><b>O(1)</b> – Constant time: Takes the same time regardless of input size.</li>
            <li><b>O(log n)</b> – Logarithmic time: Grows slowly, e.g., Binary Search.</li>
            <li><b>O(n)</b> – Linear time: Directly proportional to input size.</li>
            <li><b>O(n log n)</b> – Good for sorting large datasets (Merge Sort, Quick Sort).</li>
            <li><b>O(n²)</b> – Poor performance for large inputs (Bubble Sort).</li>
          </ul>

          <pre className="bg-gray-800 p-3 rounded mt-4 text-sm overflow-x-auto">
{`Input Size (n)    O(1)     O(log n)     O(n)     O(n log n)     O(n²)
----------------------------------------------------------------------
10                 1        3           10       30             100
100                1        6           100      600            10,000
1000               1        10          1000     10,000         1,000,000`}
          </pre>

          <p className="mt-4 text-gray-400 italic">
            Think of time complexity like traffic: O(1) is a private road, O(n²)
            is a jam-packed highway during rush hour.
          </p>
        </section>

        {/* Recursion */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-green-400 mb-3">
            Recursion
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Recursion is when a function calls itself to solve smaller instances
            of the same problem. It can be direct (function calls itself) or
            indirect (two functions call each other).
          </p>

          <h3 className="text-lg font-semibold text-gray-200 mt-4">
            Key Components:
          </h3>
          <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
            <li><b>Base case</b> – Stops the recursion.</li>
            <li><b>Recursive case</b> – Calls itself with smaller input.</li>
          </ul>

          <pre className="bg-gray-800 p-3 rounded mt-4 text-sm overflow-x-auto">
{`// Factorial using Recursion
int factorial(int n) {
    if (n <= 1) return 1; // base case
    return n * factorial(n - 1); // recursive call
}`}
          </pre>

          <p className="mt-4 text-gray-400 italic">
            Analogy: Imagine Russian dolls, where each doll contains a smaller
            doll inside, until you reach the smallest one.
          </p>
        </section>

        {/* Sorting Algorithms */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-pink-400 mb-3">
            Sorting Algorithms
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Sorting is the process of arranging elements in a particular order
            (ascending or descending). A good sorting algorithm should be
            efficient, stable, and easy to implement.
          </p>

          <h3 className="text-lg font-semibold text-gray-200 mt-4">
            Common Sorting Algorithms:
          </h3>
          <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
            <li><b>Bubble Sort</b> – Swap adjacent elements if out of order. Time: O(n²)</li>
            <li><b>Insertion Sort</b> – Build sorted list one element at a time. Time: O(n²)</li>
            <li><b>Merge Sort</b> – Divide & merge. Time: O(n log n)</li>
            <li><b>Quick Sort</b> – Partition & sort subarrays. Time: O(n log n)</li>
          </ul>

          <pre className="bg-gray-800 p-3 rounded mt-4 text-sm overflow-x-auto">
{`// Example: Bubble Sort in Java
void bubbleSort(int arr[]) {
    int n = arr.length;
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
}`}
          </pre>

          <p className="mt-4 text-gray-400 italic">
            Analogy: Sorting is like arranging books on a shelf from shortest to tallest.
          </p>
        </section>

        {/* Ask Chatbot */}
        <div className="text-center mt-12">
          <a
            href="/chatbot"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            ❓ Didn’t get the logic? Ask the chatbot
          </a>
        </div>
      </div>
    </div>
  );
}
