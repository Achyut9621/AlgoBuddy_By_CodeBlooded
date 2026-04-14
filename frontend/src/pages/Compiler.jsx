import React, { useEffect, useMemo, useState } from "react";
import Editor from "@monaco-editor/react";
import { FaMoon, FaSun } from "react-icons/fa";
import axios from "axios";

const ALL_LANGUAGES = [
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "c", label: "C" },
  { value: "cpp", label: "C++" },
  { value: "java", label: "Java" },
];

export default function Compiler({ backendUrl = "http://localhost:5000" }) {
  const [theme, setTheme] = useState("vs-dark");
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("Click Run to execute.");
  const [isRunning, setIsRunning] = useState(false);
  const [availableLanguages, setAvailableLanguages] = useState(ALL_LANGUAGES);

  const starters = useMemo(
    () => ({
      javascript:
        'function greet(){ return "Welcome to AlgoBuddy!"; } console.log(greet());',
      python: 'print("Welcome to AlgoBuddy!")',
      c: '#include <stdio.h>\nint main(){ printf("Welcome to AlgoBuddy!"); return 0; }',
      cpp: '#include <bits/stdc++.h>\nusing namespace std;\nint main(){ cout << "Welcome to AlgoBuddy!"; return 0; }',
      java: 'public class Main { public static void main(String[] args){ System.out.println("Welcome to AlgoBuddy!"); } }',
    }),
    []
  );

  useEffect(() => {
    setCode(starters[language] || "");
  }, [language, starters]);

  useEffect(() => {
    let ignore = false;

    const loadCompilerCapabilities = async () => {
      try {
        const response = await axios.get(`${backendUrl}/health`);
        const health = response.data;

        if (ignore || health?.compiler_mode !== "local-fallback") {
          return;
        }

        const fallbackLanguages = new Set(health.local_compiler_languages || []);
        const filteredLanguages = ALL_LANGUAGES.filter((item) =>
          fallbackLanguages.has(item.value)
        );

        if (filteredLanguages.length === 0) {
          return;
        }

        setAvailableLanguages(filteredLanguages);
        if (!fallbackLanguages.has(language)) {
          setLanguage(filteredLanguages[0].value);
        }
      } catch (error) {
        // Keep the full language list when the health check is unavailable.
      }
    };

    loadCompilerCapabilities();

    return () => {
      ignore = true;
    };
  }, [backendUrl, language]);

  const runCode = async () => {
    setIsRunning(true);
    setOutput("");

    try {
      const langMap = { javascript: 63, python: 71, c: 50, cpp: 54, java: 62 };
      const response = await axios.post(`${backendUrl}/compile`, {
        language_id: langMap[language],
        source_code: code,
        stdin: "",
      });

      if (response.data?.error) {
        throw new Error(response.data.error);
      }

      setOutput(
        response.data.stdout ||
          response.data.compile_output ||
          response.data.stderr ||
          "(no output)"
      );
    } catch (err) {
      const message = err.response?.data?.error || err.message;
      setOutput(`Error: ${message}`);
    } finally {
      setIsRunning(false);
    }
  };

  const toggleTheme = () =>
    setTheme((prev) => (prev === "vs-dark" ? "light" : "vs-dark"));

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 p-6 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-700 bg-black/30 backdrop-blur-lg shadow-xl">
          <div className="flex items-center justify-between border-b border-neutral-700 px-4 py-2">
            <div className="flex items-center gap-3">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="rounded-lg border border-neutral-600 bg-neutral-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                {availableLanguages.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
              <button
                onClick={toggleTheme}
                title="Toggle Theme"
                className="text-xl hover:scale-110 transition"
              >
                {theme === "vs-dark" ? <FaMoon /> : <FaSun />}
              </button>
            </div>
            <button
              onClick={runCode}
              disabled={isRunning}
              className="rounded-lg bg-green-500 px-4 py-2 font-semibold text-white shadow-md hover:bg-green-600 disabled:opacity-50"
            >
              {isRunning ? "Running..." : "Run"}
            </button>
          </div>
          <div className="h-[75vh] overflow-hidden rounded-b-2xl">
            <Editor
              height="100%"
              theme={theme}
              language={language === "cpp" ? "cpp" : language}
              value={code}
              onChange={(value) => setCode(value ?? "")}
              options={{
                fontSize: 16,
                minimap: { enabled: false },
                fontLigatures: true,
                scrollBeyondLastLine: false,
                tabSize: 2,
              }}
            />
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-700 bg-black/30 backdrop-blur-lg shadow-xl">
          <div className="flex items-center justify-between border-b border-neutral-700 px-4 py-2">
            <h3 className="text-lg font-semibold">Output</h3>
            <button
              onClick={() => setOutput("")}
              className="text-sm text-neutral-300 hover:underline"
            >
              Clear
            </button>
          </div>
          <pre className="h-[75vh] overflow-auto whitespace-pre-wrap rounded-b-2xl bg-black/40 p-4 text-base text-green-300">
            {output}
          </pre>
        </div>
      </div>
    </div>
  );
}
