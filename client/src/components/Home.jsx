import { FaPencilAlt, FaSpellCheck, FaSync } from "react-icons/fa";
import ai from "../images/ai.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-500 to-blue-600 text-white py-20 px-6 ">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Enhance Your Writing with AI
              </h2>
              <p className="text-xl mb-8">
                Harness the power of AI to refine your grammar, correct spelling
                mistakes, and elevate your writing style
              </p>
              <Link
                to="/write"
                className="bg-white text-amber-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-amber-100 transition duration-300"
              >
                Begin Your Writing Journey
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                style={{ width: "70%", height: "auto" }}
                src={ai}
                alt="AI Writing"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
              Advanced Tools at Your Command
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <FeatureCard
                icon={<FaPencilAlt className="text-6xl text-amber-500" />}
                title="Intelligent Grammar Correction"
                description="Our AI understands context to deliver precise grammar suggestions, ensuring you write with confidence."
              />
              <FeatureCard
                icon={<FaSpellCheck className="text-6xl text-blue-500" />}
                title="Enhanced Spelling Corrector"
                description="Detect even the trickiest spelling mistakes with our advanced dictionary and intelligent spell checker"
              />
              <FeatureCard
                icon={<FaSync className="text-6xl text-cyan-500" />}
                title="Clever Sentence Rewriting"
                description="Refine your sentences for better clarity and effect, customized to match your preferred tone and style."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>AI Writing Assistant ©{new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center">
    <div className="mb-6">{icon}</div>
    <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
