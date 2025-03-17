import React from 'react';

export default function ApiReferenceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="api-reference-layout">
      <div className="flex">
        <aside className="w-64 shrink-0 p-4 border-r border-gray-200 dark:border-gray-800 min-h-screen">
          <nav className="space-y-1">
            <div className="mb-4">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">API Reference</h3>
              <ul className="space-y-1 pl-2">
                <li>
                  <a href="/api-reference" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="/api-reference/authentication" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Authentication
                  </a>
                </li>
                <li>
                  <a href="/api-reference/errors" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Error Handling
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Endpoints</h3>
              <ul className="space-y-1 pl-2">
                <li>
                  <a href="/api-reference/analyze-cot" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Analyze Chain of Thought
                  </a>
                </li>
                <li>
                  <a href="/api-reference/monitor" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Real-time Monitoring
                  </a>
                </li>
                <li>
                  <a href="/api-reference/batch" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Batch Processing
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
