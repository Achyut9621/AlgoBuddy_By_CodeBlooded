import React from "react";

const logoMap = {
  Leetcode: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
  Google:    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  Amazon:    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  Microsoft: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  Facebook:  "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
};

const patterns = [
  {
    name: "Arrays & Hashing",
    problems: [
      { id: "two-sum", name: "Two Sum", url: "https://leetcode.com/problems/two-sum/", difficulty: "Easy", companies: ["Google", "Amazon"] },
      { id: "contains-duplicate", name: "Contains Duplicate", url: "https://leetcode.com/problems/contains-duplicate/", difficulty: "Easy", companies: ["Microsoft"] },
      { id: "missing-number", name: "Missing Number", url: "https://leetcode.com/problems/missing-number/", difficulty: "Easy", companies: ["Facebook"] },
      { id: "product-of-array-except-self", name: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium", companies: ["Amazon"] },
      { id: "top-k-frequent-elements", name: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium", companies: ["Google"] },
      { id: "longest-consecutive-sequence", name: "Longest Consecutive Sequence", url: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Hard", companies: ["Microsoft"] },
      { id: "4-sum", name: "4Sum", url: "https://leetcode.com/problems/4sum/", difficulty: "Medium", companies: ["Facebook"] },
      { id: "subarray-sum-equals-k", name: "Subarray Sum Equals K", url: "https://leetcode.com/problems/subarray-sum-equals-k/", difficulty: "Medium", companies: ["Google"] },
    ],
  },
  {
    name: "Two Pointers & Sliding Window",
    problems: [
      { id: "container-with-most-water", name: "Container With Most Water", url: "https://leetcode.com/problems/container-with-most-water/", difficulty: "Medium", companies: ["Amazon"] },
      { id: "two-sum-ii", name: "Two Sum II - Input Array Is Sorted", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", difficulty: "Easy", companies: ["Microsoft"] },
      { id: "3sum", name: "3Sum", url: "https://leetcode.com/problems/3sum/", difficulty: "Medium", companies: ["Facebook"] },
      { id: "longest-substring-without-repeating-characters", name: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Medium", companies: ["Google"] },
      { id: "minimum-window-substring", name: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/", difficulty: "Hard", companies: ["Amazon"] },
      { id: "valid-palindrome-ii", name: "Valid Palindrome II", url: "https://leetcode.com/problems/valid-palindrome-ii/", difficulty: "Easy", companies: ["Microsoft"] },
      { id: "sliding-window-maximum", name: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard", companies: ["Facebook"] },
    ],
  },
  {
    name: "Binary Search & Sort-Based",
    problems: [
      { id: "binary-search", name: "Binary Search", url: "https://leetcode.com/problems/binary-search/", difficulty: "Easy", companies: ["Google"] },
      { id: "search-in-rotated-sorted-array", name: "Search in Rotated Sorted Array", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium", companies: ["Amazon"] },
      { id: "find-peak-element", name: "Find Peak Element", url: "https://leetcode.com/problems/find-peak-element/", difficulty: "Medium", companies: ["Microsoft"] },
      { id: "median-of-two-sorted-arrays", name: "Median of Two Sorted Arrays", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "Hard", companies: ["Facebook"] },
      { id: "kth-largest-element-in-an-array", name: "Kth Largest Element in an Array", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Medium", companies: ["Google"] },
    ],
  },
  {
    name: "Dynamic Programming",
    problems: [
      { id: "climbing-stairs", name: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy", companies: ["Amazon"] },
      { id: "house-robber", name: "House Robber", url: "https://leetcode.com/problems/house-robber/", difficulty: "Medium", companies: ["Microsoft"] },
      { id: "coin-change", name: "Coin Change", url: "https://leetcode.com/problems/coin-change/", difficulty: "Medium", companies: ["Google"] },
      { id: "longest-increasing-subsequence", name: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Medium", companies: ["Amazon"] },
      { id: "word-break", name: "Word Break", url: "https://leetcode.com/problems/word-break/", difficulty: "Medium", companies: ["Facebook"] },
    ],
  },
  {
    name: "Backtracking & Recursion",
    problems: [
      { id: "subsets", name: "Subsets", url: "https://leetcode.com/problems/subsets/", difficulty: "Medium", companies: ["Microsoft"] },
      { id: "permutations", name: "Permutations", url: "https://leetcode.com/problems/permutations/", difficulty: "Medium", companies: ["Amazon"] },
      { id: "combination-sum", name: "Combination Sum", url: "https://leetcode.com/problems/combination-sum/", difficulty: "Medium", companies: ["Google"] },
      { id: "word-search", name: "Word Search", url: "https://leetcode.com/problems/word-search/", difficulty: "Medium", companies: ["Facebook"] },
    ],
  },
  {
    name: "Tree & Graph",
    problems: [
      { id: "binary-tree-inorder-traversal", name: "Binary Tree Inorder Traversal", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/", difficulty: "Easy", companies: ["Amazon"] },
      { id: "validate-binary-search-tree", name: "Validate Binary Search Tree", url: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Medium", companies: ["Google"] },
      { id: "binary-tree-level-order-traversal", name: "Binary Tree Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Medium", companies: ["Microsoft"] },
      { id: "number-of-islands", name: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium", companies: ["Facebook"] },
      { id: "course-schedule", name: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/", difficulty: "Medium", companies: ["Amazon"] },
    ],
  },
];

export default function Patterns() {
  return (
    <div className="min-h-screen bg-black text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#00FFFF] to-[#007FFF] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">
          LeetCode Patterns
        </h1>

        {patterns.map((pat) => (
          <section key={pat.name} className="mb-12 bg-gray-900 bg-opacity-50 rounded-xl p-6 border border-[#00FFFF]/20">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-[#00FFFF]">
              {pat.name}
              <span className="ml-2 text-sm text-gray-400">
                ({pat.problems.length} probs)
              </span>
            </h2>

            <ul className="space-y-4">
              {pat.problems.map((prob) => (
                <li key={prob.id} className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <a
                    href={prob.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#00FFFF] hover:text-[#00CCCC] font-medium transition"
                  >
                    <img src={logoMap.Leetcode} alt="LeetCode" className="w-5 h-5" />
                    {prob.name}
                    <span className="ml-2 text-sm text-gray-400">[{prob.difficulty}]</span>
                  </a>
                  <div className="flex items-center mt-2 md:mt-0 space-x-2">
                    {prob.companies.map((comp) => (
                      <img key={comp} src={logoMap[comp]} alt={comp} title={comp} className="w-6 h-6 rounded-full bg-gray-800 p-0.5" />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
