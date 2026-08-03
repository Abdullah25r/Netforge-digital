"use client";

import { useEffect, useState } from "react";

const CODE_LINES = [
  { text: "export function ForgeButton({ children }: Props) {", type: "code" },
  { text: "  const [hovered, setHovered] = useState(false)", type: "code" },
  { text: "", type: "code" },
  { text: "  return (", type: "code" },
  { text: "    <motion.button", type: "code" },
  { text: '      whileHover={{ scale: 1.02 }}', type: "code" },
  { text: '      whileTap={{ scale: 0.96 }}', type: "code" },
  { text: '      className="btn-primary"', type: "code" },
  { text: "    >", type: "code" },
  { text: "      {children}", type: "code" },
  { text: "    </motion.button>", type: "code" },
  { text: "  )", type: "code" },
  { text: "}", type: "code" },
];

function highlight(line: string) {
  const tokens: { text: string; className: string }[] = [];
  const patterns: [RegExp, string][] = [
    [/\b(export|function|const|return|from|import)\b/, "text-[#6c3fff]"],
    [/\b(useState|motion\.button)\b/, "text-[#00c8e0]"],
    [/(".*?"|'.*?')/, "text-[#f0c674]"],
    [/(\{|\}|\(|\)|<|>|\/)/, "text-[var(--text-secondary)]"],
  ];

  const remaining = line;
  let result = "";
  let cursor = 0;

  while (cursor < remaining.length) {
    let matched = false;
    for (const [regex, cls] of patterns) {
      const sub = remaining.slice(cursor);
      const m = sub.match(regex);
      if (m && m.index === 0) {
        result += `<span class="${cls}">${escapeHtml(m[0])}</span>`;
        cursor += m[0].length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      result += escapeHtml(remaining[cursor]);
      cursor += 1;
    }
  }
  return result;
  function escapeHtml(s: string) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  void tokens;
}

export default function CodeTyper() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayed, setDisplayed] = useState<string[]>([]);

  useEffect(() => {
    if (lineIndex >= CODE_LINES.length) return;
    const currentLine = CODE_LINES[lineIndex].text;

    if (charIndex <= currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => {
          const copy = [...prev];
          copy[lineIndex] = currentLine.slice(0, charIndex);
          return copy;
        });
        setCharIndex((c) => c + 1);
      }, 28);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 400);
      return () => clearTimeout(pause);
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="glass-card bg-[#050510] font-mono text-sm overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--glass-border)]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-xs text-[var(--text-muted)]">ForgeButton.tsx</span>
      </div>
      <div className="p-6 min-h-[320px]">
        {CODE_LINES.map((line, i) => (
          <div key={i} className="leading-relaxed whitespace-pre">
            <span className="text-[var(--text-muted)] mr-4 select-none inline-block w-4">
              {i + 1}
            </span>
            <span
              dangerouslySetInnerHTML={{
                __html: highlight(displayed[i] ?? ""),
              }}
            />
            {i === lineIndex && (
              <span className="inline-block w-[8px] h-[16px] bg-[var(--brand-cyan)] ml-0.5 align-middle animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
