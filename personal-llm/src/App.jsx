import { useState } from "react";
import axios from "axios";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/generate", {
        prompt: prompt,
        style_examples: style,
      });
      setResult(res.data.generated);
    } catch (err) {
      setResult("Backend error");
    }
    setLoading(false);
  };

  return (
    // <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-gray-800 text-zinc-100 flex items-center justify-center px-4">
    <div className="min-h-screen w-full text-zinc-100 flex items-center justify-center px-4 gap-6"> 
      <div className="w-[70%] h-[30vh] max-w-2xl mx-auto bg-[#3B1C32] rounded-2xl border border-[#A64D79] p-8 shadow-2xl flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-center color-zinc-700">Personal LLM</h1>

        <textarea
          className="w-[95%] mx-auto p-4 rounded-xl resize-none bg-[#6A1E55] border border-zinc-700 flex items-center justify-center"
          rows={4}
          placeholder="Enter example messages..."
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        />

        <textarea
          className="w-[95%] mx-auto p-4 rounded-xl resize-none bg-[#6A1E55] border border-zinc-700"
          rows={2}
          placeholder="What would you need to generate?"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          className="w-[95%] mx-auto bg-blue-500 hover:bg-blue-600 transition-all px-6 py-2 rounded-xl font-semibold disabled:opacity-50 mb-5"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate ✨"}
        </button>

        {result && (
          <div className="w-full bg-[#E2E0C8] border border-zinc-700 p-4 rounded-xl whitespace-pre-wrap text-sm">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
