import React from 'react';

const problems = [
  { title: 'Two Sum', url: 'https://leetcode.com/problems/two-sum/' },
  { title: 'Add Two Numbers', url: 'https://leetcode.com/problems/add-two-numbers/' },
  { title: 'Longest Substring Without Repeating Characters', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
  { title: 'Median of Two Sorted Arrays', url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' },
  { title: 'Longest Palindromic Substring', url: 'https://leetcode.com/problems/longest-palindromic-substring/' },
  { title: 'Zigzag Conversion', url: 'https://leetcode.com/problems/zigzag-conversion/' },
  { title: 'Reverse Integer', url: 'https://leetcode.com/problems/reverse-integer/' },
  { title: 'String to Integer (atoi)', url: 'https://leetcode.com/problems/string-to-integer-atoi/' },
  { title: 'Palindrome Number', url: 'https://leetcode.com/problems/palindrome-number/' },
  { title: 'Regular Expression Matching', url: 'https://leetcode.com/problems/regular-expression-matching/' },
  { title: 'Container With Most Water', url: 'https://leetcode.com/problems/container-with-most-water/' },
  { title: 'Integer to Roman', url: 'https://leetcode.com/problems/integer-to-roman/' },
  { title: 'Roman to Integer', url: 'https://leetcode.com/problems/roman-to-integer/' },
  { title: 'Longest Common Prefix', url: 'https://leetcode.com/problems/longest-common-prefix/' },
  { title: 'Three Sum', url: 'https://leetcode.com/problems/3sum/' },
  { title: 'Letter Combinations of a Phone Number', url: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/' },
  { title: '4Sum', url: 'https://leetcode.com/problems/4sum/' },
  { title: 'Remove Nth Node From End of List', url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
  { title: 'Valid Parentheses', url: 'https://leetcode.com/problems/valid-parentheses/' },
  { title: 'Merge Two Sorted Lists', url: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
  { title: 'Generate Parentheses', url: 'https://leetcode.com/problems/generate-parentheses/' },
  { title: 'Merge Intervals', url: 'https://leetcode.com/problems/merge-intervals/' },
  { title: 'Insert Interval', url: 'https://leetcode.com/problems/insert-interval/' },
  { title: 'Length of Last Word', url: 'https://leetcode.com/problems/length-of-last-word/' },
  { title: 'Spiral Matrix', url: 'https://leetcode.com/problems/spiral-matrix/' },
  { title: 'Set Matrix Zeroes', url: 'https://leetcode.com/problems/set-matrix-zeroes/' },
  { title: 'Rotate Image', url: 'https://leetcode.com/problems/rotate-image/' },
  { title: 'Group Anagrams', url: 'https://leetcode.com/problems/group-anagrams/' },
  { title: 'Pow(x, n)', url: 'https://leetcode.com/problems/powx-n/' },
  { title: 'Maximum Subarray', url: 'https://leetcode.com/problems/maximum-subarray/' },
  { title: 'Search Insert Position', url: 'https://leetcode.com/problems/search-insert-position/' },
  { title: 'Valid Sudoku', url: 'https://leetcode.com/problems/valid-sudoku/' },
  { title: 'Sudoku Solver', url: 'https://leetcode.com/problems/sudoku-solver/' },
  { title: 'Count and Say', url: 'https://leetcode.com/problems/count-and-say/' },
  { title: 'Combination Sum', url: 'https://leetcode.com/problems/combination-sum/' },
  { title: 'Combination Sum II', url: 'https://leetcode.com/problems/combination-sum-ii/' },
  { title: 'First Missing Positive', url: 'https://leetcode.com/problems/first-missing-positive/' },
  { title: 'Trapping Rain Water', url: 'https://leetcode.com/problems/trapping-rain-water/' },
  { title: 'Multiply Strings', url: 'https://leetcode.com/problems/multiply-strings/' },
  { title: 'Wildcard Matching', url: 'https://leetcode.com/problems/wildcard-matching/' },
  { title: 'Jump Game', url: 'https://leetcode.com/problems/jump-game/' },
  { title: 'Permutations', url: 'https://leetcode.com/problems/permutations/' },
  { title: 'Permutations II', url: 'https://leetcode.com/problems/permutations-ii/' },
  { title: 'Subsets', url: 'https://leetcode.com/problems/subsets/' },
  { title: 'Subsets II', url: 'https://leetcode.com/problems/subsets-ii/' },
  { title: 'Word Search', url: 'https://leetcode.com/problems/word-search/' },
  { title: 'Remove Duplicates from Sorted Array', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/' },
  { title: 'Search in Rotated Sorted Array', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
  { title: 'Find Minimum in Rotated Sorted Array', url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/' },
  { title: 'Find Peak Element', url: 'https://leetcode.com/problems/find-peak-element/' },
  { title: 'Search a 2D Matrix', url: 'https://leetcode.com/problems/search-a-2d-matrix/' },
  { title: 'Sort Colors', url: 'https://leetcode.com/problems/sort-colors/' },
  { title: 'Find Kth Largest Element in an Array', url: 'https://leetcode.com/problems/find-kth-largest-element-in-an-array/' },
];

export default function Interview() {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-[#00FFFF] mb-10">
        Top 50 LeetCode Interview Questions
      </h1>

      <ol className="list-decimal space-y-4 ml-6">
        {problems.map(({ title, url }, index) => (
          <li key={index} className="bg-[#111] p-3 rounded-lg shadow hover:scale-105 transform transition duration-200">
            <span className="text-[#00FFFF] font-semibold">{title}</span>{" "}
            -{" "}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              View Problem
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
