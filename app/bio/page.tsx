"use client";
import { useState } from "react";

export default function BioGenerator() {
  const [name, setName] = useState("");
  const [niche, setNiche] = useState("");
  const [result, setResult] = useState("");

  const generateBio = () => {
    if (!name || !niche) {
      setResult("Please fill all fields.");
      return;
    }

    setResult(
      `🚀 ${name} | ${niche} Creator\n🔥 Daily tips & content\n👇 Follow for more!`
    );
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-8">TikTok Bio Generator</h1>

      <input
        type="text"
        placeholder="Your Name"
        className="mb-4 p-3 rounded text-black w-full max-w-md"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Your Niche (Fitness, Gaming...)"
        className="mb-4 p-3 rounded text-black w-full max-w-md"
        value={niche}
        onChange={(e) => setNiche(e.target.value)}
      />

      <button
        onClick={generateBio}
        className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
      >
        Generate Bio
      </button>

      {result && (
        <div className="mt-6 bg-gray-900 p-4 rounded max-w-md whitespace-pre-line">
          {result}
        </div>
      )}
    </main>
  );
}