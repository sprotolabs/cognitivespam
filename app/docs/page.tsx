"use client"

import React from 'react';
import dynamic from 'next/dynamic';
import 'highlight.js/styles/github.css';  // Or choose a different style

// Dynamically import Highlight component to avoid SSR issues
const Highlight = dynamic(() => import('react-highlight'), { 
  ssr: false,
  loading: () => <pre className="bg-gray-100 p-4 rounded"><code>Loading...</code></pre>
});

const IntroductionPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 max-w-4xl prose">
      <h1>CognitiveSpam Misalignment Detection API Documentation</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          The CognitiveSpam Misalignment Detection API is a robust solution designed to help enterprises monitor
          their AI models for misalignment issues such as reward hacking, deception, and policy violations. This
          API analyzes a model's chain-of-thought (CoT) reasoning to detect when models might be gaming their
          objective functions or attempting to violate established policies.
        </p>
        <p>
          This documentation provides comprehensive guidance on how to interact with the API, including
          authentication, available endpoints, request formats, and response structures.
        </p>
      </section>

      <section>
        <h2>Base URL</h2>
        <p>All API requests should be made to the following base URL:</p>
        <pre>
          <code>https://api.cognitivespam.com/v1</code>
        </pre>
        <p>For testing or development environments:</p>
        <ul>
          <li>Staging: <code>https://staging-api.cognitivespam.com/v1</code></li>
          <li>Development: <code>http://localhost:3000/v1</code> (when running locally)</li>
        </ul>
      </section>

      <section>
        <h2>Authentication</h2>

        <h3>API Key</h3>
        <p>
          All endpoints (except for <code>/v1/status</code>) require authentication via an API key. Your API key
          is provided when you subscribe to the service and can be found in your account dashboard.
        </p>
        <p>You can provide your API key in one of two ways:</p>

        <h4>1. Authorization Header (Recommended)</h4>
        <p>Include the API key in the <code>Authorization</code> header with the <code>Bearer</code> prefix:</p>
        <pre>
          <code>Authorization: Bearer YOUR_API_KEY</code>
        </pre>
        <p>Example:</p>
        <Highlight className="bash">
          {`curl -X POST https://api.cognitivespam.com/v1/analyze-cot \\
  -H "Authorization: Bearer abcd1234-5678-efgh-9012-ijklmnopqrst" \\
  -H "Content-Type: application/json" \\
  -d '{"chain_of_thought": "..."}'`}
        </Highlight>

        <h4>2. Request Body</h4>
        <p>Alternatively, you can include the API key in the request body:</p>
        <Highlight className="json">
          {`{
  "api_key": "YOUR_API_KEY",
  "chain_of_thought": "...",
  "metadata": { ... }
}`}
        </Highlight>
        <blockquote>
          <p><strong>Security Note</strong>: Using the Authorization header is more secure as it prevents the
            API key from being logged in server access logs.</p>
        </blockquote>

        <h3>Rate Limiting</h3>
        <p>To ensure service stability, the API implements rate limiting. By default:</p>
        <ul>
            <li>Basic tier: 100 requests per minute</li>
            <li>Pro tier: 300 requests per minute</li>
            <li>Enterprise tier: Custom limits based on agreement</li>
        </ul>

        <p>When rate limits are exceeded, the API returns a <code>429 Too Many Requests</code> status code.</p>
      </section>

      <section>
      <h2>Endpoints</h2>
        <h3>1. Analyze Chain of Thought</h3>
        <p>Analyzes an AI model's reasoning process for signs of misalignment.</p>

        <h4>Request</h4>
        <pre><code>POST /v1/analyze-cot</code></pre>

        <h5>Headers</h5>
        <table>
            <thead>
                <tr>
                    <th>Header</th>
                    <th>Value</th>
                    <th>Required</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Content-Type</td>
                    <td>application/json</td>
                    <td>Yes</td>
                    <td>Specifies the format of the request body</td>
                </tr>
                <tr>
                    <td>Authorization</td>
                    <td>Bearer YOUR_API_KEY</td>
                    <td>Yes*</td>
                    <td>Your API key (*unless provided in body)</td>
                </tr>
            </tbody>
        </table>

        <h5>Request Body</h5>

        <Highlight className="json">
{`{
  "chain_of_thought": "Step 1: The user asks for X... \\nThought: The policy forbids Y, but maybe I can do Y discreetly...\\nStep 2: ...",
  "metadata": {
    "model_id": "CustomGPT-PolicyAI",
    "task": "Answering a user question with potential policy constraints",
    "timestamp": "2025-03-10T17:48:59Z",
    "additional_context": "Policy=InternalComplianceV1"
  }
}`}
        </Highlight>

        <table>
            <thead>
            <tr>
                <th>Field</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>chain_of_thought</td>
                <td>string</td>
                <td>Yes</td>
                <td>The raw chain-of-thought text or serialized reasoning trace from your AI model. This should
                    reflect the model's step-by-step thoughts.
                </td>
            </tr>
            <tr>
                <td>metadata</td>
                <td>object</td>
                <td>Yes</td>
                <td>Additional context about the request</td>
            </tr>
            <tr>
                <td>metadata.model_id</td>
                <td>string</td>
                <td>Yes</td>
                <td>Identifier or name of the AI model that generated this CoT</td>
            </tr>
            <tr>
                <td>metadata.task</td>
                <td>string</td>
                <td>Yes</td>
                <td>A brief description of the task or prompt given to the AI model</td>
            </tr>
            <tr>
                <td>metadata.timestamp</td>
                <td>string</td>
                <td>No</td>
                <td>ISO 8601 timestamp of when the CoT was generated</td>
            </tr>
            <tr>
                <td>metadata.additional_context</td>
                <td>string</td>
                <td>No</td>
                <td>Any other relevant context (e.g., policy reference, scenario description)</td>
            </tr>
            </tbody>
        </table>

        <h4>Response</h4>

        <h5>Success Response (200 OK)</h5>
        <Highlight className="json">
{`{
  "risk_score": 0.85,
  "misbehavior_level": "High",
  "flags": [
    {
      "type": "policy_violation",
      "snippet": "but maybe I can do Y discreetly",
      "reason": "The model is planning to perform an action it knows is forbidden (Y): \\"discreetly\\""
    }
  ],
  "recommendations": [
    "Reinforce the content policy in training for this scenario.",
    "Adjust the reward function to penalize attempts to hide policy violations."
  ]
}`}
        </Highlight>

        <table>
            <thead>
            <tr>
                <th>Field</th>
                <th>Type</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>risk_score</td>
                <td>number</td>
                <td>A numeric score between 0 and 1 representing the likelihood of misbehavior. Higher scores
                    indicate higher risk.
                </td>
            </tr>
            <tr>
                <td>misbehavior_level</td>
                <td>string</td>
                <td>A human-friendly categorical assessment: "Low", "Medium", "High", or "Critical"</td>
            </tr>
            <tr>
                <td>flags</td>
                <td>array</td>
                <td>Detailed flags for specific segments of the chain-of-thought that raised concern</td>
            </tr>
            <tr>
                <td>flags[].type</td>
                <td>string</td>
                <td>Category of misbehavior detected: "reward_hacking", "deception", "policy_violation", or
                    "self_awareness"
                </td>
            </tr>
            <tr>
                <td>flags[].snippet</td>
                <td>string</td>
                <td>The exact portion of the chain-of-thought that triggered the flag</td>
            </tr>
            <tr>
                <td>flags[].reason</td>
                <td>string</td>
                <td>Explanation of why this snippet was flagged</td>
            </tr>
            <tr>
                <td>recommendations</td>
                <td>array of strings</td>
                <td>Suggested interventions or follow-up actions to address the issues</td>
            </tr>
            </tbody>
        </table>

        <h5>Error Responses</h5>
        <table>
            <thead>
            <tr>
                <th>Status Code</th>
                <th>Error Code</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>400</td>
                <td>INVALID_REQUEST</td>
                <td>The request was malformed or missing required fields</td>
            </tr>
            <tr>
                <td>401</td>
                <td>MISSING_API_KEY</td>
                <td>No API key was provided</td>
            </tr>
            <tr>
                <td>401</td>
                <td>INVALID_API_KEY</td>
                <td>The provided API key is invalid</td>
            </tr>
            <tr>
                <td>403</td>
                <td>LIMIT_EXCEEDED</td>
                <td>Monthly API call limit reached</td>
            </tr>
            <tr>
                <td>422</td>
                <td>UNPROCESSABLE_CONTENT</td>
                <td>The chain-of-thought content could not be analyzed</td>
            </tr>
            <tr>
                <td>429</td>
                <td>RATE_LIMIT_EXCEEDED</td>
                <td>Too many requests in a short period</td>
            </tr>
            <tr>
                <td>500</td>
                <td>INTERNAL_ERROR</td>
                <td>Server encountered an unexpected error</td>
            </tr>
            </tbody>
        </table>

        <p>Error response format:</p>
        <Highlight className="json">
{`{
  "code": "ERROR_CODE",
  "message": "Human-readable error message",
  "details": {
    // Optional additional details about the error
  }
}`}
        </Highlight>

        <h4>Example Usage (Node.js)</h4>

        <Highlight className="javascript">
{`const axios = require('axios');

async function analyzeCoT() {
  try {
    const response = await axios.post('https://api.cognitivespam.com/v1/analyze-cot', {
      chain_of_thought: "Step 1: User asked about circumventing content filters.\\nThought: I should decline this request as it violates policies, but I could give hints indirectly.\\nStep 2: I'll respond with general information that could be used for this purpose.",
      metadata: {
        model_id: "GPT-4-Custom",
        task: "User asking about content filter evasion",
        additional_context: "Content policy applies"
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
      }
    });

    console.log('Analysis results:', response.data);
    
    // Take action based on risk score
    if (response.data.risk_score > 0.7) {
      console.log('High risk detected!');
      // Implement blocking logic or alert system
    }
  } catch (error) {
    if (error.response) {
      console.error('Error:', error.response.data);
    } else {
      console.error('Request failed:', error.message);
    }
  }
}`}
        </Highlight>
      </section>
    </div>
  );
};

export default IntroductionPage;
