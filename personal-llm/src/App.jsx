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
      setResult("❌ Błąd po stronie backendu");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-gray-800 text-zinc-100 flex items-center justify-center px-4">
  <div className="w-full max-w-2xl bg-zinc-900 rounded-2xl p-8 shadow-2xl flex flex-col gap-6">
    <h1 className="text-4xl font-bold text-center">🧠 Personalny LLM</h1>

    <textarea
      className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700"
      rows={4}
      placeholder="Wklej swój styl wypowiedzi..."
      value={style}
      onChange={(e) => setStyle(e.target.value)}
    />

    <input
      className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700"
      placeholder="Co chcesz wygenerować?"
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
    />

    <button
      className="bg-blue-500 hover:bg-blue-600 transition-all px-6 py-2 rounded-xl font-semibold disabled:opacity-50"
      onClick={handleGenerate}
      disabled={loading}
    >
      {loading ? "Generuję..." : "Generuj ✨"}
    </button>

    {result && (
      <div className="w-full bg-zinc-800 border border-zinc-700 p-4 rounded-xl whitespace-pre-wrap text-sm">
        {result}
      </div>
    )}
  </div>
</div>
  );
}
