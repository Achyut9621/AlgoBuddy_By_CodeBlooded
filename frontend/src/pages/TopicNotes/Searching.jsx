import React, { useState } from "react";

export default function Searching() {
  const [algo, setAlgo] = useState("linear"); 
  const [language, setLanguage] = useState("python"); 

  const youtubeLinks = {
    linear: "https://www.youtube.com/results?search_query=linear+search+algorithm",
    binary: "https://www.youtube.com/results?search_query=binary+search+algorithm",
  };

  const codeSnippets = {
    linear: {
      python: `def linear_search(arr, target):
    for i, val in enumerate(arr):
        if val == target:
            return i
    return -1

# Example
arr = [5, 2, 9, 1, 7]
print(linear_search(arr, 9))  # 2
print(linear_search(arr, 3))  # -1
`,
      java: `class LinearSearch {
    static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) return i;
        }
        return -1;
    }
    public static void main(String[] args) {
        int[] arr = {5, 2, 9, 1, 7};
        System.out.println(linearSearch(arr, 9)); // 2
        System.out.println(linearSearch(arr, 3)); // -1
    }
}
`,
      c: `#include <stdio.h>

int linear_search(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}

int main() {
    int arr[] = {5, 2, 9, 1, 7};
    int n = sizeof(arr)/sizeof(arr[0]);
    printf("%d\\n", linear_search(arr, n, 9)); // 2
    printf("%d\\n", linear_search(arr, n, 3)); // -1
    return 0;
}
`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int linear_search(const vector<int>& arr, int target) {
    for (int i = 0; i < (int)arr.size(); i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}

int main() {
    vector<int> arr = {5, 2, 9, 1, 7};
    cout << linear_search(arr, 9) << "\\n"; // 2
    cout << linear_search(arr, 3) << "\\n"; // -1
    return 0;
}
`,
      js: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Example
const arr = [5, 2, 9, 1, 7];
console.log(linearSearch(arr, 9)); // 2
console.log(linearSearch(arr, 3)); // -1
`,
    },
    binary: {
      python: `def binary_search(arr, target):
    l, r = 0, len(arr) - 1
    while l <= r:
        m = (l + r) // 2
        if arr[m] == target:
            return m
        elif arr[m] < target:
            l = m + 1
        else:
            r = m - 1
    return -1

# Example (array must be sorted)
arr = [1, 2, 5, 7, 9]
print(binary_search(arr, 7))  # 3
print(binary_search(arr, 3))  # -1
`,
      java: `import java.util.*;

class BinarySearch {
    static int binarySearch(int[] arr, int target) {
        int l = 0, r = arr.length - 1;
        while (l <= r) {
            int m = l + (r - l) / 2;
            if (arr[m] == target) return m;
            if (arr[m] < target) l = m + 1;
            else r = m - 1;
        }
        return -1;
    }
    public static void main(String[] args) {
        int[] arr = {1, 2, 5, 7, 9};
        System.out.println(binarySearch(arr, 7)); // 3
        System.out.println(binarySearch(arr, 3)); // -1
    }
}
`,
      c: `#include <stdio.h>

int binary_search(int arr[], int n, int target) {
    int l = 0, r = n - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (arr[m] == target) return m;
        if (arr[m] < target) l = m + 1;
        else r = m - 1;
    }
    return -1;
}

int main() {
    int arr[] = {1, 2, 5, 7, 9};
    int n = sizeof(arr)/sizeof(arr[0]);
    printf("%d\\n", binary_search(arr, n, 7)); // 3
    printf("%d\\n", binary_search(arr, n, 3)); // -1
    return 0;
}
`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int binary_search_idx(const vector<int>& arr, int target) {
    int l = 0, r = (int)arr.size() - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (arr[m] == target) return m;
        if (arr[m] < target) l = m + 1;
        else r = m - 1;
    }
    return -1;
}

int main() {
    vector<int> arr = {1, 2, 5, 7, 9};
    cout << binary_search_idx(arr, 7) << "\\n"; // 3
    cout << binary_search_idx(arr, 3) << "\\n"; // -1
    return 0;
}
`,
      js: `function binarySearch(arr, target) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    const m = Math.floor(l + (r - l) / 2);
    if (arr[m] === target) return m;
    if (arr[m] < target) l = m + 1;
    else r = m - 1;
  }
  return -1;
}

// Example (sorted)
const arr = [1, 2, 5, 7, 9];
console.log(binarySearch(arr, 7)); // 3
console.log(binarySearch(arr, 3)); // -1
`,
    },
  };

  const languages = [
    { key: "python", label: "Python" },
    { key: "java", label: "Java" },
    { key: "c", label: "C" },
    { key: "cpp", label: "C++" },
    { key: "js", label: "JavaScript" },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-300 py-8">
      <div className="max-w-5xl mx-auto p-8 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-[#00FFFF]">
          Searching Techniques
        </h1>

        <p className="mb-6 text-lg leading-relaxed">
          Learn two fundamental search techniques:{" "}
          <strong>Linear (Sequential) Search</strong> and{" "}
          <strong>Binary Search</strong>. Linear Search scans elements one by
          one. Binary Search repeatedly halves the search space, but{" "}
          <em>requires a sorted array</em>.
        </p>

        {/* Algo Tabs */}
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            { key: "linear", label: "Linear / Sequential Search" },
            { key: "binary", label: "Binary Search" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setAlgo(key)}
              className={`px-4 py-2 rounded-lg border transition ${
                algo === key
                  ? "bg-[#00FFFF] text-black border-transparent"
                  : "bg-transparent text-[#00FFFF] border border-[#00FFFF] hover:bg-[#00FFFF] hover:text-black"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Language Selector */}
        <div className="mb-4">
          <label className="mr-2">Select Language: </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-800 text-white p-2 rounded"
          >
            {languages.map((l) => (
              <option key={l.key} value={l.key}>
                {l.label}
              </option>
            ))}
          </select>
        </div>

        {/* Code Display */}
        <pre className="bg-gray-950 text-[#b6f7ff] p-4 rounded-lg overflow-auto text-sm leading-6">
{codeSnippets[algo][language]}
        </pre>

        {/* Complexity + Notes */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="p-4 rounded-lg bg-gray-800/60">
            <h2 className="text-2xl font-semibold mb-3 text-[#00FFFF]">
              {algo === "linear" ? "Linear Search" : "Binary Search"} – Complexity
            </h2>
            {algo === "linear" ? (
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                <li>Time: <code>O(n)</code> in worst and average case</li>
                <li>Space: <code>O(1)</code></li>
                <li>Works on unsorted arrays</li>
                <li>Stable and simple to implement</li>
              </ul>
            ) : (
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                <li>Time: <code>O(log n)</code> worst/average, <code>O(1)</code> best</li>
                <li>Space: <code>O(1)</code> (iterative), <code>O(log n)</code> (recursive)</li>
                <li><strong>Requires sorted array</strong></li>
                <li>Great for large datasets</li>
              </ul>
            )}
          </div>

          <div className="p-4 rounded-lg bg-gray-800/60">
            <h2 className="text-2xl font-semibold mb-3 text-[#00FFFF]">
              Learn More
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <a
                  href={youtubeLinks[algo]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00FFFF] hover:text-[#00CCCC] transition font-medium"
                >
                  Watch {algo === "linear" ? "Linear Search" : "Binary Search"} on YouTube
                </a>
              </li>
              <li>
                Didn’t get the logic?{" "}
                <a
                  href="/chatbot"
                  className="underline text-[#00FFFF] hover:text-[#00CCCC]"
                  title="Ask the AI Chat Assistant"
                >
                  Ask the Chatbot
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="/chatbot"
                className="inline-block bg-[#00FFFF] text-black px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Open Chatbot
              </a>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 p-4 rounded-lg bg-gray-800/60">
          <h3 className="text-xl font-semibold mb-2 text-[#00FFFF]">Tips</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Use Linear Search for very small or unsorted lists.</li>
            <li>Use Binary Search when data is sorted or can be sorted once.</li>
            <li>For duplicates, you can modify Binary Search to find the first/last index.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
