export default function Home() {
    return (
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Welcome to My AWS & MCP Knowledge Hub</h1>
  
        <p className="mb-4">
          This website is my personal hub to share knowledge about <strong>AWS (Amazon Web Services)</strong> 
          and <strong>MCP (Model Context Protocol)</strong>.
        </p>
  
        <h2 className="text-2xl font-semibold mt-6 mb-2">Topics Covered</h2>
        <ul className="list-disc ml-6">
          <li>AWS EC2, S3, IAM, Lambda</li>
          <li>MCP concepts, workflows, and implementations</li>
          <li>Practical cloud architecture and best practices</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-6 mb-2">Blog</h2>
        <ul className="list-disc ml-6">
          <li>
            <a href="/blog/aws-basics" className="text-blue-600 hover:underline">
              AWS Basics: EC2, S3, IAM
            </a>
          </li>
        </ul>
  
        <p className="mt-6">
          More tutorials, guides, and projects will be added regularly. Stay tuned!
        </p>
      </main>
    );
  }
  