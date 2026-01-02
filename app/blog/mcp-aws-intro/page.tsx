export default function McpAwsIntro() {
    return (
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Model Context Protocol (MCP) with AWS — Explained Simply
        </h1>
  
        <p className="mb-4">
          AI models are powerful, but they don’t naturally know how to talk to
          cloud services like S3, Lambda, or databases. This is where Model
          Context Protocol (MCP) comes in.
        </p>
  
        <p className="mb-4">
          MCP acts as a controlled layer between AI models and real systems.
          Instead of hardcoding logic or exposing credentials, MCP keeps
          everything structured and secure.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">
          Why MCP Matters in AWS
        </h2>
  
        <ul className="list-disc ml-6 mb-4">
          <li>Prevents models from directly accessing AWS services</li>
          <li>Uses IAM roles for secure access</li>
          <li>Keeps architecture clean and auditable</li>
        </ul>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">
          Simple MCP + AWS Architecture
        </h2>
  
        <pre className="bg-gray-100 p-4 rounded">
  {`AI Model
     |
  MCP Server
     |
  Lambda → S3 / DynamoDB / Bedrock`}
        </pre>
  
        <p className="mt-4">
          MCP fits naturally with AWS principles like least privilege,
          scalability, and separation of concerns.
        </p>
  
        <p className="mt-6">
          In upcoming posts, I’ll show how to deploy an MCP server on AWS and
          connect it with Lambda and IAM.
        </p>
      </main>
    );
  }
  
  