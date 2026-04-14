import React, { useState } from "react";

export default function CopyButton({ textToCopy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-gray-700 hover:bg-gray-600 text-white text-sm px-3 py-1 rounded-md"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
