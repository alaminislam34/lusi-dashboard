"use client";

import { useState } from "react";
import { Mail, Lock, EyeOff, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import LoginForm from "../_components/LoginForm";
import SendOtp from "../_components/SendOtp";

function BusinessSignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    toast.success("Logged in successfully!");
    setTimeout(() => {
      router.push("/business");
    }, 500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#111319] p-4 font-sans">
      <div className="w-full max-w-110 rounded-3xl bg-[#1a1f26] p-8 md:p-10 shadow-2xl border border-white/5">
        {/* Logo Section */}
        <div className="mb-12 text-center">
          <Image
            src={"/logos/logo.png"}
            width={500}
            height={500}
            alt="Lusi Logo"
            className="mx-auto w-52 object-contain"
          />
        </div>

        {/* Header */}
        {step === 1 && (
          <LoginForm
            handleLogin={handleLogin}
            error={error}
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
}

export default BusinessSignIn;
