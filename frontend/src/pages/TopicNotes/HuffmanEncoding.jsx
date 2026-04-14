import React from "react";

export default function HuffmanEncoding() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-[#00FFFF] mb-4">
          Huffman Encoding
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          Huffman Encoding is a lossless data compression algorithm used to
          reduce the size of data without losing any information. It works by
          assigning shorter codes to more frequent characters and longer codes
          to less frequent ones.
        </p>

        {/* Step-by-Step Process */}
        <h2 className="text-2xl font-semibold text-[#00FFFF] mb-3">
          Steps in Huffman Encoding:
        </h2>
        <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
          <li>Count the frequency of each character in the input data.</li>
          <li>Create a priority queue (min-heap) of nodes based on frequency.</li>
          <li>Extract the two smallest frequency nodes and merge them.</li>
          <li>Repeat until only one tree remains – this is the Huffman Tree.</li>
          <li>Assign binary codes to each character by traversing the tree.</li>
        </ol>

        {/* Diagrams */}
        <h2 className="text-2xl font-semibold text-[#00FFFF] mb-3">
          Example Diagrams:
        </h2>
        <div className="bg-gray-900 p-4 rounded-lg mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Huffman_tree_2.svg"
            alt="Huffman Tree Example"
            className="rounded-lg mx-auto mb-4"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Huffman_coding_example.svg"
            alt="Huffman Encoding Process"
            className="rounded-lg mx-auto"
          />
        </div>

        {/* Video Link */}
        <h2 className="text-2xl font-semibold text-[#00FFFF] mb-3">
          Watch & Learn:
        </h2>
        <div className="mb-6">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/jsFYRcfzeu4"
            title="Huffman Encoding Tutorial"
            frameBorder="0"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Chatbot Reference */}
        <div className="bg-gray-900 p-4 rounded-lg border border-[#00FFFF]">
          <p className="text-lg text-gray-300">
            ❓ Didn’t get the logic?{" "}
            <a
              href="/chatbot"
              className="text-[#00FFFF] font-semibold hover:underline"
            >
              Ask the Chatbot
            </a>{" "}
            for a step-by-step explanation.
          </p>
        </div>
      </div>
    </div>
  );
}
