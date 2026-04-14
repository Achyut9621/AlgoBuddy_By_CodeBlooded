import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FAQSection from "../components/FAQSection";
import {
  FaDatabase,
  FaProjectDiagram,
  FaCogs,
  FaRocket,
  FaUsers,
  FaChalkboardTeacher,
  FaLightbulb,
  FaLaptopCode,
} from "react-icons/fa";

const roadmap = [
  {
    category: "Fundamentals",
    icon: <FaCogs className="inline-block mr-2 text-[#00FFFF]" />,
    topics: [
      { name: "Big O Notation", id: "big-o-notation" },
      { name: "Time & Space Complexity", id: "time-space-complexity" },
      { name: "Recursion", id: "recursion" },
      { name: "Sorting Algorithms", id: "sorting-algorithms" },
      { name: "Searching Algorithms", id: "searching-algorithms" },
    ],
  },
  {
    category: "Data Structures",
    icon: <FaDatabase className="inline-block mr-2 text-[#00FFFF]" />,
    topics: [
      { name: "Arrays", id: "arrays" },
      { name: "Linked Lists", id: "linked-lists" },
      { name: "Stacks", id: "stacks" },
      { name: "Queues", id: "queues" },
      { name: "Hash Tables", id: "hash-tables" },
      { name: "Trees", id: "trees" },
      { name: "Graphs", id: "graphs" },
      { name: "Heaps", id: "heaps" },
      { name: "tries", id: "tries" },
    ],
  },
  {
    category: "Algorithms",
    icon: <FaProjectDiagram className="inline-block mr-2 text-[#00FFFF]" />,
    topics: [
      { name: "Greedy Algorithms", id: "greedy-algorithms" },
      { name: "Divide and Conquer", id: "divide-and-conquer" },
      { name: "Dynamic Programming", id: "dynamic-programming" },
      { name: "Backtracking", id: "backtracking" },
      { name: "Graph Algorithms", id: "graph-algorithms" },
      {
        name: "Strassen’s Matrix Multiplication",
        id: "strassen-matrix-multiplication",
      },
      { name: "Huffman Encoding", id: "huffman-encoding" },
      { name: "Dijkstra’s Algorithm", id: "dijkstras-algorithm" },
      { name: "Number Theory Algorithms", id: "number-theory-algorithms" },
    ],
  },
  {
    category: "Advanced Topics",
    icon: <FaRocket className="inline-block mr-2 text-[#00FFFF]" />,
    topics: [
      { name: "Bit Manipulation", id: "bit-manipulation" },
      { name: "Mathematical Algorithms", id: "mathematical-algorithms" },
      { name: "String Algorithms", id: "string-algorithms" },
      { name: "Computational Geometry", id: "computational-geometry" },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-6 py-16 text-gray-300">
      {/* Hero Section */}
      <h1
        className="
          text-6xl font-extrabold mb-8 text-center
          bg-gradient-to-r from-[#00FFFF] to-[#007FFF]
          bg-clip-text text-transparent
          drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]
        "
      >
        Welcome to <span className="text-[#00FFFF]">AlgoBuddy</span>
      </h1>

      <p className="max-w-4xl text-center mb-12 text-lg leading-relaxed text-gray-400">
        Master Data Structures & Algorithms step-by-step. Click any topic below
        to explore detailed explanations, examples, and practice problems.
      </p>

      {/* Roadmap Grid */}
      <div className="max-w-7xl w-full grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {roadmap.map(({ category, icon, topics }, index) => (
          <motion.section
            key={category}
            className="
              relative overflow-hidden
              bg-white bg-opacity-5 backdrop-blur-sm
              rounded-xl p-6
              border border-white/20
              hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]
              transition-all duration-300
            "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
          >
            <h2 className="text-2xl font-bold mb-5 flex items-center text-[#00FFFF]">
              {icon}
              {category}
            </h2>
            <div className="flex flex-col space-y-3">
              {topics.map(({ name, id }) => (
                <Link
                  key={id}
                  to={`/topics/${id}`}
                  className="
                    block rounded-md px-4 py-3
                    bg-[#007FFF] bg-opacity-80
                    text-white font-semibold
                    hover:bg-opacity-100 hover:scale-105 hover:shadow-lg
                    transition transform duration-200
                  "
                  title={`Explore ${name}`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* About Section */}
      <section className="max-w-5xl mt-24 text-center">
        <h2 className="text-4xl font-bold text-[#00FFFF] mb-6">
          About AlgoBuddy
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          AlgoBuddy is your ultimate guide for mastering Data Structures and
          Algorithms. Built with love for students, by students, it aims to
          simplify complex topics into digestible notes, code snippets, and
          interactive learning experiences. Whether you are a beginner
          struggling with arrays or an advanced learner tackling dynamic
          programming, AlgoBuddy provides step-by-step guidance to help you excel
          in coding interviews, competitive programming, and real-world software
          development.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl w-full mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: <FaUsers className="text-[#00FFFF] text-5xl mb-4" />,
            title: "Student-Centric",
            desc: "AlgoBuddy is tailored for engineering students preparing for coding interviews and exams.",
          },
          {
            icon: <FaLaptopCode className="text-[#00FFFF] text-5xl mb-4" />,
            title: "Hands-on Practice",
            desc: "Each topic includes code samples and practice problems linked to platforms like LeetCode.",
          },
          {
            icon: <FaLightbulb className="text-[#00FFFF] text-5xl mb-4" />,
            title: "Concept Clarity",
            desc: "Difficult concepts are broken into visual explanations, analogies, and real-world examples.",
          },
          {
            icon: (
              <FaChalkboardTeacher className="text-[#00FFFF] text-5xl mb-4" />
            ),
            title: "Interview Ready",
            desc: "Roadmap designed to take you from basics to advanced DSA, preparing you for top companies.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-xl bg-white bg-opacity-5 backdrop-blur border border-white/20 hover:shadow-lg"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Why Choose AlgoBuddy Section */}
      <section className="max-w-5xl mt-24 text-center">
        <h2 className="text-4xl font-bold text-[#00FFFF] mb-6">
          Why Choose AlgoBuddy?
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed mb-10">
          Unlike generic resources scattered across the internet, AlgoBuddy
          provides a structured path to learning. It combines theory, coding
          practice, and interview-focused preparation under one roof. You don’t have to jump between YouTube, notes, and coding sites—we bring it all together for you.
        </p>
        <ul className="text-gray-400 space-y-4 text-left mx-auto max-w-3xl">
          <li>✅ Topic-wise structured notes with easy navigation</li>
          <li>✅ Integrated roadmap to track your progress</li>
          <li>✅ Code snippets in multiple languages</li>
          <li>✅ Direct links to curated LeetCode/GFG problems</li>
          <li>✅ Regularly updated with new content</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <div className="w-full mt-24">
        <FAQSection />
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500 text-sm">
        &copy; 2026 AlgoBuddy. Built with ❤️ by Team Codeblooded Under the
        Guidance of Dr.Shradhha Masih.
      </footer>
    </div>
  );
}
