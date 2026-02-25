"use client";

import { useState } from "react";
import LusiiLoginForm from "../page";
import { Eye, EyeOff, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const handleSetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock set password logic
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    toast.success("Password set successfully!");
    setTimeout(() => {
      router.push("/business/sign-in");
    }, 500);
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f1115] p-4 font-sans">
      <div className="w-full max-w-120 rounded-2xl bg-[#161b22] p-8 md:p-12 shadow-2xl border border-gray-800">
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
        <div className="mb-8 text-left">
          <h2 className="text-2xl font-semibold text-white">
            Set New Password
          </h2>
        </div>

        <form onSubmit={handleSetPassword} className="space-y-6">
          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200 ml-1">
              Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                <Lock size={18} />
              </div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-[#1c2128] border border-gray-700 text-gray-200 text-sm rounded-xl focus:ring-2 focus:ring-[#64c2b9] focus:border-transparent block pl-11 p-4 transition-all outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200 ml-1">
              Confirm Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                <Lock size={18} />
              </div>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full bg-[#1c2128] border border-gray-700 text-gray-200 text-sm rounded-xl focus:ring-2 focus:ring-[#64c2b9] focus:border-transparent block pl-11 p-4 transition-all outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={!password || !confirmPassword}
            className={`w-full py-4 px-4  ${!password || !confirmPassword ? "cursor-not-allowed bg-[#4e6462]" : "cursor-pointer bg-[#64c2b9] hover:bg-[#52a9a1] active:scale-[0.98]"}  text-[#161b22] font-bold rounded-xl transition-all duration-200 transform  shadow-lg`}
          >
            Set Password
          </button>
          <div className="mt-2 text-center text-white">
            <p>
              Back to{" "}
              <Link
                href="/business/sign-in"
                className="text-sm text-[#64c2b9] hover:underline transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetPassword;
