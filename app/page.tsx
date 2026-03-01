export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold text-center">
        Hookify
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-300 text-center max-w-2xl">
        Free TikTok Creator Tools to help you go viral.
      </p>

      <div className="mt-10 flex flex-col md:flex-row gap-6">
        <a
          href="/bio"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          TikTok Bio Generator
        </a>

        <a
          href="/hashtags"
          className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
        >
          Hashtag Generator
        </a>
      </div>
    </main>
  );
}