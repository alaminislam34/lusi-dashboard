import { Mail, Lock, EyeOff, Eye } from "lucide-react";
import Link from "next/link";

function LoginForm({
  handleLogin,
  error,
  setStep,
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
}: {
  handleLogin: (e: React.FormEvent) => void;
  error: string;
  setStep: (step: number) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
}) {
  return (
    <div>
      {/* Header */}
      <div className="mb-8 text-left">
        <h2 className="text-2xl font-semibold text-white">Login to Lusii</h2>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        {/* Admin Email Field */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-200 ml-1">
            Email
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
              <Mail size={18} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-[#1c2128] border border-gray-700 text-gray-200 text-sm rounded-xl focus:ring-2 focus:ring-[#64c2b9] focus:border-transparent block pl-11 p-4 transition-all outline-none"
            />
          </div>
        </div>

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

        {/* Forgot Password */}
        <div className="flex justify-end">
          <button
            onClick={() => setStep(2)}
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Forgot password?
          </button>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          disabled={!email || !password}
          className={`w-full py-4 px-4  ${!email || !password ? "cursor-not-allowed bg-[#4e6462]" : "cursor-pointer bg-[#64c2b9] hover:bg-[#52a9a1] active:scale-[0.98]"}  text-[#161b22] font-bold rounded-xl transition-all duration-200 transform  shadow-lg`}
        >
          Sign in
        </button>

        {/* Sign In Link */}
        <div className="text-center pt-2">
          <p className="text-sm text-gray-400">
            Alreay have an account?{" "}
            <Link
              href="/business/sign-up"
              className="text-[#64c2b9] hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
