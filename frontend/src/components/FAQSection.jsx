// Inside Home.jsx (after your main sections but before the footer)

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "I’m new to DSA. Can AlgoBuddy guide me from the basics?",
    answer:
      "Absolutely! AlgoBuddy has a beginner-friendly roadmap, step-by-step explanations, and practice problems to take you from zero to hero in DSA.",
  },
  {
    question: "How much daily time should I dedicate to coding practice?",
    answer:
      "We recommend 30–60 minutes daily. Start with easy problems, and increase the difficulty gradually. Consistency matters more than hours.",
  },
  {
    question: "Can I use AlgoBuddy alongside my college curriculum?",
    answer:
      "Yes! AlgoBuddy’s content is modular, so you can learn topics in parallel with your semester syllabus.",
  },
  {
    question: "Does AlgoBuddy include real-world interview problems?",
    answer:
      "Yes, our question bank includes frequently asked interview problems from top tech companies.",
  },
  {
    question: "Is there a roadmap to help me track my DSA progress?",
    answer:
      "We provide a visual progress tracker with milestones so you know exactly where you stand.",
  },
  {
    question: "Do I need prior programming experience to start?",
    answer:
      "Not at all. We start with programming basics before diving into algorithms and data structures.",
  },
  {
    question: "Can AlgoBuddy prepare me for both internships and full-time roles?",
    answer:
      "Yes, the resources are designed to help you excel in both internship and job interviews.",
  },
  {
    question: "Does AlgoBuddy provide coding challenges for multiple languages?",
    answer:
      "Yes! We offer problems with solutions in Java, Python, C++, and JavaScript.",
  },
  {
    question: "Will I get curated resources for every DSA topic?",
    answer:
      "Absolutely. Each topic comes with theory, examples, problems, and external resources.",
  },
  {
    question: "Does AlgoBuddy help with system design basics?",
    answer:
      "We have a beginner-friendly system design section to get you started with LLD and HLD.",
  },
  {
    question: "What if I get stuck on a problem? Can I get hints?",
    answer:
      "Yes, hints and step-by-step breakdowns are available for most problems.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-black text-white py-12 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-400">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-blue-500 rounded-lg overflow-hidden shadow-md"
          >
            <button
              className="flex justify-between items-center w-full p-4 text-left text-lg font-semibold hover:bg-blue-900 transition-all"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-blue-400" />
              ) : (
                <ChevronDown className="text-blue-400" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-900 border-t border-blue-500 text-gray-300 transition-all">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
