"use client";

import { useState } from "react";
import { EyeOff, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function BusinessSignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f1115] p-4 font-sans">
      <div className="w-full max-w-120 rounded-2xl bg-[#161b22] p-8 md:p-12 shadow-2xl border border-gray-800">
        {/* Logo Section */}
        <div className="mb-10 text-center">
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
            Sign up to Lusii
          </h2>
        </div>

        <form className="space-y-5">
          {/* Business Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 ml-1">
              Business name
            </label>
            <input
              type="text"
              placeholder="Business name"
              className="w-full bg-[#1c2128]/50 border border-gray-700 text-gray-200 text-sm rounded-xl focus:ring-1 focus:ring-[#64c2b9] focus:border-[#64c2b9] block p-4 transition-all outline-none placeholder:text-gray-600"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 ml-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#1c2128]/50 border border-gray-700 text-gray-200 text-sm rounded-xl focus:ring-1 focus:ring-[#64c2b9] focus:border-[#64c2b9] block p-4 transition-all outline-none placeholder:text-gray-600"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 ml-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-[#1c2128]/50 border border-gray-700 text-gray-200 text-sm rounded-xl focus:ring-1 focus:ring-[#64c2b9] focus:border-[#64c2b9] block p-4 transition-all outline-none placeholder:text-gray-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-gray-300"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 ml-1">
              Confirm password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-[#1c2128]/50 border border-gray-700 text-gray-200 text-sm rounded-xl focus:ring-1 focus:ring-[#64c2b9] focus:border-[#64c2b9] block p-4 transition-all outline-none placeholder:text-gray-600"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-gray-300"
              >
                {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center space-x-2 py-1">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 rounded border-gray-700 bg-transparent text-[#64c2b9] focus:ring-0 focus:ring-offset-0 cursor-pointer"
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-300 cursor-pointer"
            >
              I accept the{" "}
              <span className="text-[#64c2b9] hover:underline cursor-pointer">
                terms of services
              </span>
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-4 px-4 bg-[#74ccbd] hover:bg-[#64c2b9] text-[#161b22] font-bold rounded-xl transition-all duration-200 shadow-lg mt-2"
          >
            Sign up
          </button>

          {/* Sign In Link */}
          <div className="text-center pt-2">
            <p className="text-sm text-gray-400">
              Alreay have an account?{" "}
              <Link
                href="/business/sign-in"
                className="text-[#64c2b9] hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BusinessSignIn;
