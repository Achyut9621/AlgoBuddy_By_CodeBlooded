import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-60 bg-white shadow-lg h-full p-4">
      <h2 className="text-xl font-bold mb-4">DSA Topics</h2>
      <ul className="space-y-2">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/notes">Notes</Link></li>
        <li><Link to="/chatbot">Chatbot</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;