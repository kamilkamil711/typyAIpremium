"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const tips = [
    { date: "2025-04-24", match: "Barcelona vs Real", tip: "Over 2.5 goals", odds: "1.85" },
    { date: "2025-04-25", match: "Man City vs Arsenal", tip: "Both Teams To Score", odds: "1.70" },
    { date: "2025-04-26", match: "Juventus vs Milan", tip: "Under 2.5 goals", odds: "2.00" }
  ];

  return (
    <main className="p-4 max-w-5xl mx-auto space-y-12">
      <section className="text-center py-10">
        <h1 className="text-5xl font-bold text-gold">Typy AI Premium</h1>
        <p className="text-lg mt-2 text-white/80">Typy bukmacherskie generowane przez sztuczną inteligencję</p>
        <button className="mt-4 px-6 py-2 bg-gold text-black rounded-xl font-bold">Zacznij teraz</button>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-6">Dzisiejsze Typy</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tips.map((tip, i) => (
            <div key={i} className="bg-white text-black p-4 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-2">{tip.match}</h3>
              <p>Data: {tip.date}</p>
              <p>Typ: {tip.tip}</p>
              <p>Kurs: {tip.odds}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-6">Plany Subskrypcji</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gold p-6 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gold mb-2">Basic</h3>
            <p>3 typy dziennie</p>
            <p className="text-xl font-bold mt-2">49 zł / miesiąc</p>
          </div>
          <div className="border border-gold p-6 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gold mb-2">Premium</h3>
            <p>5 typów + VIP dostęp</p>
            <p className="text-xl font-bold mt-2">89 zł / miesiąc</p>
          </div>
        </div>
      </section>
    </main>
  );
}
