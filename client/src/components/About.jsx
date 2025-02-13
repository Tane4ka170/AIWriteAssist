import { FaPencilAlt, FaMagic, FaRobot, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-amber-600">
          Information about the AI Writing Assistant
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <p className="text-xl text-gray-700 mb-6">
            The AI Writing Assistant is an innovative tool created to enhance
            your writing journey. Driven by state-of-the-art artificial
            intelligence, our platform provides a range of features to improve
            your writing quality, increase your efficiency, and unlock your
            creative potential
          </p>
          <p className="text-xl text-gray-700">
            No matter if you're a student, a professional writer, or simply
            someone aiming to enhance their writing, our AI-powered tools are
            designed to assist you at every stage
          </p>
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Key Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <FeatureCard
            icon={<FaPencilAlt className="text-amber-500" />}
            title="Grammar Fixing"
            description="Cutting-edge AI algorithms identify and fix grammatical mistakes, making sure your writing is refined and professional"
          />
          <FeatureCard
            icon={<FaMagic className="text-blue-500" />}
            title="Spelling Correction"
            description="Our thorough spell-check feature identifies typos and provides suggestions for corrections, ensuring your text remains flawless."
          />
          <FeatureCard
            icon={<FaRobot className="text-cyan-500" />}
            title="AI-Driven Sentence Rewriting"
            description="Smart rephrasing recommendations assist in diversifying your language, enhancing clarity, and boosting impact."
          />
          <FeatureCard
            icon={<FaChartLine className="text-emerald-500" />}
            title="Writing Insights"
            description="Discover valuable insights into your writing style and monitor your progress over time with our comprehensive analytics."
          />
        </div>

        <div className="bg-amber-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prepared to Revolutionize Your Writing?
          </h2>
          <p className="text-xl mb-6">
            Become one of the many users who have enhanced their writing with
            the AI Writing Assistant
          </p>
          <Link
            to="/write"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-100 transition duration-300"
          >
            Begin Your Journey Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6">
    <div className="flex items-center mb-4">
      <div className="text-3xl mr-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;
