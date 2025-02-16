import { useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt, FaRocket } from "react-icons/fa";

function LoginPage() {
  const { login, ready, authenticated } = usePrivy();
  const navigate = useNavigate();

  useEffect(() => {
    if (ready && authenticated) {
      navigate("/write");
    }
  }, [ready, authenticated, navigate]);

  if (!ready) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-500"></div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-amber-500 to-blue-600">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          AI Writing Assistant
        </h1>
        <p className="text-gray-600 mb-8">
          Enhance your writing with AI-driven precision
        </p>

        <button
          onClick={login}
          className="w-full bg-amber-600 text-white py-3 rounded-md hover:bg-amber-700 transition duration-300 flex items-center justify-center mb-4"
        >
          <FaSignInAlt className="mr-2" />
          Login
        </button>

        <button
          onClick={login}
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center"
        >
          <FaRocket className="mr-2" />
          Get Started
        </button>

        <p className="mt-6 text-sm text-gray-500">
          First time using AI Writing Assistant? Click 'Get Started' to sign up
          and improve your writing today!
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
