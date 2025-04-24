"use client";

import { useState } from "react";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      alert("Zalogowano pomyślnie!");
    } catch (error) {
      alert("Błąd: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-navy text-white flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white text-black p-8 rounded-xl shadow-xl w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center mb-4">{isLogin ? "Logowanie" : "Rejestracja"}</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-gold text-black w-full py-2 rounded font-bold">
          {isLogin ? "Zaloguj się" : "Zarejestruj się"}
        </button>
        <p className="text-center text-sm mt-4">
          {isLogin ? "Nie masz konta?" : "Masz już konto?"}{" "}
          <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-gold underline">
            {isLogin ? "Zarejestruj się" : "Zaloguj się"}
          </button>
        </p>
      </form>
    </div>
  );
}
