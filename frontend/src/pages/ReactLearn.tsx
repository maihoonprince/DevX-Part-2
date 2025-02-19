
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ReactLearn = () => {
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
              <h1 className="text-4xl font-bold mb-4">React</h1>
              <p className="text-gray-600 text-lg">
                Master React, the popular JavaScript library for building user interfaces
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Core React Concepts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  React is a JavaScript library for building user interfaces, particularly single-page
                  applications where you need a fast, interactive user experience.
                </p>
                <h3 className="text-xl font-semibold mt-6">Fundamental Concepts</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Components: Building blocks of React applications</li>
                  <li>Props: Pass data between components</li>
                  <li>State: Manage component data</li>
                  <li>JSX: Syntax extension for JavaScript</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Components and Props</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">Function Components</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`// Basic component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Using the component
<Welcome name="Sara" />`}
                </pre>

                <h3 className="text-xl font-semibold mt-6">Props Example</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`interface CardProps {
  title: string;
  description: string;
}

function Card({ title, description }: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>State and Lifecycle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">useState Hook</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
                </pre>

                <h3 className="text-xl font-semibold mt-6">useEffect Hook</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(\`/api/users/\${userId}\`);
      const data = await response.json();
      setUser(data);
    }
    fetchUser();
  }, [userId]);

  if (!user) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Context and State Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  React Context provides a way to pass data through the component tree
                  without having to pass props manually at every level.
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`// Create context
const ThemeContext = React.createContext('light');

// Provider component
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

// Consumer component
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Themed Button</button>;
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

export default ReactLearn;
