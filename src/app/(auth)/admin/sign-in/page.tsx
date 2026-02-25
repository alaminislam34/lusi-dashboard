"use client";

import React, { useState } from "react";

import LoginForm from "../_components/LoginForm";
import SendOtp from "../_components/SendOtp";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LusiiLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin123");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    toast.success("Login successful! Redirecting to dashboard...");
    setTimeout(() => {
      router.push("/admin");
    }, 500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f1115] p-4 font-sans">
      <div className="w-full max-w-120 rounded-2xl bg-[#161b22] p-8 md:p-12 shadow-2xl border border-gray-800">
        {/* Logo Section */}
        <div className="mb-12 text-center">
          <h1 className="flex items-center justify-center text-5xl font-bold tracking-tight text-white">
            LUSI<span className="text-[#64c2b9]">I</span>
          </h1>
          <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gray-400">
            Lead Utilization & Smart Intelligence
          </p>
        </div>
        {step === 1 && (
          <LoginForm
            error={error}
            handleLogin={handleLogin}
            setStep={setStep}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        )}
        {step === 2 && <SendOtp setStep={setStep} />}
      </div>
    </div>
  );
};

export default LusiiLoginForm;
