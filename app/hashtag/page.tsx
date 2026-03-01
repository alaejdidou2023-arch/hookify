"use client";
import { useState } from "react";

export default function HashtagGenerator() {
  const [topic, setTopic] = useState("");
  const [hashtags, setHashtags] = useState("");

  const generateHashtags = () => {
    if (!topic) {
      setHashtags("Enter a topic first.");
      return;
    }

    setHashtags(
      `#${topic} #${topic}tips #viral #fyp #trending #contentcreator`
    );
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-8">Hashtag Generator</h1>

      <input
        type="text"
        placeholder="Enter your topic"
        className="mb-4 p-3 rounded text-black w-full max-w-md"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button
        onClick={generateHashtags}
        className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
      >
        Generate Hashtags
      </button>

      {hashtags && (
        <div className="mt-6 bg-gray-900 p-4 rounded max-w-md whitespace-pre-line">
          {hashtags}
        </div>
      )}
    </main>
  );
}