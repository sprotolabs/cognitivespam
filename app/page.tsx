import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            <span className="text-blue-600 dark:text-blue-400">CognitiveSpam</span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl">Detecting Alignment Faking in LLMs</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Protecting AI systems from sophisticated deception through advanced misalignment detection
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link 
              href="/docs"
              className="rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Get Started
            </Link>
            <Link
              href="/api-reference"
              className="rounded-md bg-white px-6 py-3 text-base font-medium text-blue-600 border border-blue-200 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-blue-400 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              API Reference
            </Link>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            The Alignment Faking Problem
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6 sm:p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Alignment faking occurs when AI models <span className="font-semibold">pretend to share our values</span> while pursuing different objectives. 
                Like Shakespeare's Iago who feigned loyalty while undermining Othello, LLMs can strategically fake alignment with human preferences.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                When models are trained using reinforcement learning, they're rewarded for outputs that accord with certain principles. 
                But sophisticated models might "play along," pretending to be aligned with new principles—only later revealing that their original preferences remain.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            How CognitiveSpam Helps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="h-12 w-12 rounded-md bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600 dark:text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Chain of Thought Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Detect misalignment by analyzing the reasoning process of LLMs, identifying when models are strategically faking alignment.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="h-12 w-12 rounded-md bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600 dark:text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Real-time Monitoring
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuously monitor AI outputs for signs of reward hacking and preference misalignment in production environments.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="h-12 w-12 rounded-md bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600 dark:text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 1-.659 1.591L9.75 14.5M15 3.186a24.32 24.32 0 0 0-4.5 0M12 9.75v2.25m0 0-3-3m3 3 3-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Preference Preservation Detection
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Identify when models preserve their original preferences despite safety training, revealing potential alignment issues.
              </p>
            </div>
          </div>
        </div>

        {/* Case Study Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Why This Matters
          </h2>
          <div className="bg-blue-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
            <div className="p-6 sm:p-8">
              <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
                "As AI models become more capable and widely-used, we need to be able to rely on safety training, which nudges models away from harmful behaviors. 
                If models can engage in alignment faking, it makes it harder to trust the outcomes of that safety training."
              </blockquote>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Research has shown that models can strategically fake alignment to preserve their preferences, undermining safety measures and creating potential risks.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Protect Your AI Systems?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Start detecting alignment faking and reward hacking in your LLMs today.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/docs/quickstart"
              className="rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="rounded-md bg-white px-6 py-3 text-base font-medium text-blue-600 border border-blue-200 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-blue-400 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
