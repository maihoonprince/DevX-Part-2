
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ExpressLearn = () => {
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
              <h1 className="text-4xl font-bold mb-4">Express.js</h1>
              <p className="text-gray-600 text-lg">
                Master Express.js, the most popular web framework for Node.js
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Getting Started with Express.js</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Express.js is a minimal and flexible Node.js web application framework that provides
                  a robust set of features for building single-page, multi-page, and hybrid web applications.
                </p>
                <h3 className="text-xl font-semibold mt-6">Core Concepts</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Middleware: Functions that have access to the request and response objects</li>
                  <li>Routing: How application endpoints respond to client requests</li>
                  <li>Static Files: Serving static resources like images, CSS, and JavaScript</li>
                  <li>Template Engines: Rendering dynamic content using template engines</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Basic Server Setup</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">Creating an Express Server</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`}
                </pre>

                <h3 className="text-xl font-semibold mt-6">Middleware Example</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`// Logger middleware
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
});

// JSON body parser middleware
app.use(express.json());`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Routing and HTTP Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Express provides a robust routing system that supports all HTTP methods.
                  Routes can be modularized using the Express Router.
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`// Basic routing
app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Route parameters
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  res.json(user);
});`}
                </pre>

                <h3 className="text-xl font-semibold mt-6">Express Router</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`// users.router.js
const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getUserById);

// app.js
app.use('/api/users', userRouter);`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Error Handling</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Express has built-in error handling middleware that processes errors in your application.
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

// Async error handling
app.get('/users', async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    next(error);
  }
});`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExpressLearn;
