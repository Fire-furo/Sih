import React, { useState } from "react";

const AuthPage: React.FC = () => {
  const [view, setView] = useState<"signin" | "signup" | "forgot">("signin");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Sign In */}
      {view === "signin" && (
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label
                className="block text-sm font-medium text-gray-600 mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                className="block text-sm font-medium text-gray-600 mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                Remember me
              </label>
              <button
                type="button"
                onClick={() => setView("forgot")}
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition"
            >
              Sign In
            </button>

            {/* Sign Up link */}
            <p className="text-sm text-gray-600 text-center">
              Don’t have an account?{" "}
              <button
                type="button"
                onClick={() => setView("signup")}
                className="text-blue-600 hover:underline"
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>
      )}

      {/* Sign Up */}
      {view === "signup" && (
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Sign Up
          </h2>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label
                className="block text-sm font-medium text-gray-600 mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* School */}
            <div>
              <label
                className="block text-sm font-medium text-gray-600 mb-1"
                htmlFor="school"
              >
                School Name
              </label>
              <input
                type="text"
                id="school"
                placeholder="Enter your School"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                className="block text-sm font-medium text-gray-600 mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                className="block text-sm font-medium text-gray-600 mb-1"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition"
            >
              Sign Up
            </button>

            {/* Already have account */}
            <p className="text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setView("signin")}
                className="text-blue-600 hover:underline"
              >
                Sign In
              </button>
            </p>
          </form>
        </div>
      )}

      {/* Forgot Password */}
      {view === "forgot" && (
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create new Password
          </h2>

          <form className="space-y-5">
            {/* Password */}
            <div>
              <label
                className="block text-sm font-medium text-gray-600 mb-1"
                htmlFor="new-password"
              >
                Password
              </label>
              <input
                type="password"
                id="new-password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                className="block text-sm font-medium text-gray-600 mb-1"
                htmlFor="confirm-new-password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-new-password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition"
            >
              Set Password
            </button>

            {/* Back to sign in */}
            <p className="text-sm text-gray-600 text-center mt-4">
              Remember your password?{" "}
              <button
                type="button"
                onClick={() => setView("signin")}
                className="text-blue-600 hover:underline"
              >
                Sign In
              </button>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
