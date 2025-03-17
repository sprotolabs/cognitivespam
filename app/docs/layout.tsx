import React from 'react';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="docs-layout">
      <div className="flex">
        <aside className="w-64 shrink-0 p-4 border-r border-gray-200 dark:border-gray-800 min-h-screen">
          <nav className="space-y-1">
            <div className="mb-4">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Getting Started</h3>
              <ul className="space-y-1 pl-2">
                <li>
                  <a href="/docs" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="/docs/quickstart" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Quickstart Guide
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Integration</h3>
              <ul className="space-y-1 pl-2">
                <li>
                  <a href="/docs/integration/node" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Node.js
                  </a>
                </li>
                <li>
                  <a href="/docs/integration/python" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Python
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Examples</h3>
              <ul className="space-y-1 pl-2">
                <li>
                  <a href="/docs/examples/real-time-filtering" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Real-time Filtering
                  </a>
                </li>
                <li>
                  <a href="/docs/examples/batch-processing" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
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
