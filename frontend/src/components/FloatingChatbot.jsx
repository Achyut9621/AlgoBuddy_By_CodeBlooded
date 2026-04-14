import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function FloatingChatbot() {
  const navigate = useNavigate();
  const location = useLocation();

  // hide button if already on chatbot page
  if (location.pathname === "/chatbot") return null;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center z-50">
      {/* Label */}
      <span className="mt-2 text-white bg-gray-800 px-3 py-1 rounded-lg text-sm shadow-md">
        I'll help you!
      </span>

      {/* Floating Button */}
      <button
        onClick={() => navigate("/chatbot")}
        className="bg-[#00FFFF] text-black rounded-full shadow-lg hover:bg-cyan-400 transition flex items-center justify-center text-5xl"
        style={{ width: "90px", height: "90px" }}
      >
        🤖
      </button>
    </div>
  );
}
