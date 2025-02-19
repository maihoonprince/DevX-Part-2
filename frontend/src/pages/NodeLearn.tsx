
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NodeLearn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <Link 
            to="/learn" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to MERN Stack
          </Link>
          
          <div className="animate-fade-in space-y-12">
            <div>
              <h1 className="text-4xl font-bold mb-4">Node.js</h1>
              <p className="text-gray-600 text-lg">
                Learn Node.js, the powerful JavaScript runtime for server-side development
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Introduction to Node.js</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows
                  you to run JavaScript on the server side. It uses an event-driven, non-blocking I/O
                  model that makes it lightweight and efficient.
                </p>
                <h3 className="text-xl font-semibold mt-6">Key Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Event-driven programming</li>
                  <li>Non-blocking I/O operations</li>
                  <li>Large ecosystem of packages (npm)</li>
                  <li>Built-in modules for file system, networking, etc.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Core Modules and File System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">File System Operations</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`const fs = require('fs');

// Reading a file
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Writing to a file
fs.writeFile('file.txt', 'Hello World!', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});`}
                </pre>

                <h3 className="text-xl font-semibold mt-6">HTTP Module</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Asynchronous Programming</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Node.js uses callbacks, promises, and async/await for handling asynchronous operations.
                </p>
                <h3 className="text-xl font-semibold">Promises and Async/Await</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`// Using Promises
const readFilePromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

// Using async/await
async function readMultipleFiles() {
  try {
    const file1 = await readFilePromise('file1.txt');
    const file2 = await readFilePromise('file2.txt');
    console.log(file1, file2);
  } catch (error) {
    console.error('Error reading files:', error);
  }
}`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>NPM and Package Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Node Package Manager (npm) is the world's largest software registry,
                  allowing you to share and borrow packages.
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`// Initialize a new Node.js project
npm init -y

// Install a package
npm install express

// Install development dependencies
npm install --save-dev nodemon

// package.json scripts
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NodeLearn;
