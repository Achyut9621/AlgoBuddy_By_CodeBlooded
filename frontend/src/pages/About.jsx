import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">About DSA Helper</h1>

        <p className="mb-4 text-lg">
          <strong>DSA Helper</strong> is a student-friendly web app designed to support aspiring developers in mastering
          Data Structures and Algorithms. Whether you're preparing for interviews or improving your problem-solving skills,
          this platform organizes topics, offers curated notes, and will soon provide an interactive chatbot to help
          answer DSA-related queries.
        </p>

        <p className="mb-4 text-lg">
          This is an open learning project developed by <strong>Anshika</strong>, an engineering student passionate
          about self-improvement, coding, and building useful tools for the developer community.
        </p>

        <p className="text-lg">
          Stay tuned as more features like topic filtering, quizzes, and chatbot integration are added!
        </p>
      </div>
    </div>
  );
};

export default About;
