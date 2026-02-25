import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

function SendOtp({ setStep }: { setStep: (step: number) => void }) {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock send OTP logic
    toast.success("OTP sent to your email!");
    setTimeout(() => {
      router.push("/business/sign-in/set-password");
    }, 500);
  };
  return (
    <div>
      {/* Header */}
      <div className="mb-8 text-left">
        <h2 className="text-2xl font-semibold text-white">Forget Password</h2>
      </div>

      <form onSubmit={handleSendOtp} className="space-y-6">
        {/* Admin Email Field */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-200 ml-1">
            Admin email
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

        {/* Sign In Button */}
        <button
          type="submit"
          disabled={!email}
          className={`w-full py-4 px-4  ${!email ? "cursor-not-allowed bg-[#4e6462]" : "cursor-pointer bg-[#64c2b9] hover:bg-[#52a9a1] active:scale-[0.98]"}  text-[#161b22] font-bold rounded-xl transition-all duration-200 transform  shadow-lg`}
        >
          Send OTP
        </button>
        <div className="mt-2 text-center text-white">
          <p>
            Back to{" "}
            <button
              onClick={() => setStep(1)}
              className="text-sm text-[#64c2b9] hover:underline transition-colors"
            >
              Sign In
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SendOtp;
