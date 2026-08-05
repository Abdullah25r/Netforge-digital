"use client";

import { motion } from "framer-motion";

const PARAGRAPHS = [
  "We started NetForge Digital because we were tired of agencies that overcharge, under-deliver, and disappear after the contract is signed.",
  "Every strategy we build, every pixel we place, every campaign we launch is designed with one question: does this generate real, measurable results for our client?",
  "Dubai's business landscape is competitive. We exist to give ambitious brands the digital edge they need to win it.",
];

function WordReveal({ text, delayOffset }: { text: string; delayOffset: number }) {
  const words = text.split(" ");
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={{ visible: { transition: { staggerChildren: 0.025, delayChildren: delayOffset } } }}
      className="font-display font-medium leading-snug max-w-3xl mx-auto text-center"
      style={{ fontSize: "var(--text-lg)" }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0.15 },
            visible: { opacity: 1, transition: { duration: 0.4 } },
          }}
          className="inline-block mr-[0.3em]"
        >
          {w}
        </motion.span>
      ))}
    </motion.p>
  );
}

export default function ManifestoSection() {
  return (
    <section className="section-pad bg-[var(--bg-elevated)] clip-chevron-down">
      <div className="container-xl space-y-16">
        {PARAGRAPHS.map((p, i) => (
          <WordReveal key={i} text={p} delayOffset={0} />
        ))}
      </div>
    </section>
  );
}
