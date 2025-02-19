
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const Learn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">MERN Stack Development</h1>
            <p className="text-gray-600 text-lg mb-8">
              Master full-stack development with MongoDB, Express.js, React, and Node.js
            </p>
          </div>

          <div className="grid gap-8 animate-fade-in-slow">
            
            <Link to="/learn/mongodb" className="block">
              <div className="glass-panel p-6 transition-transform hover:scale-[1.02] cursor-pointer">
                <h2 className="text-2xl font-bold mb-4">MongoDB</h2>
                <p className="text-gray-600">
                  Learn how to work with MongoDB, a powerful NoSQL database that provides high performance,
                  high availability, and easy scalability.
                </p>
              </div>
            </Link>

            <Link to="/learn/express" className="block">
              <div className="glass-panel p-6 transition-transform hover:scale-[1.02] cursor-pointer">
                <h2 className="text-2xl font-bold mb-4">Express.js</h2>
                <p className="text-gray-600">
                  Master Express.js, a minimal and flexible Node.js web application framework that provides
                  a robust set of features for web and mobile applications.
                </p>
              </div>
            </Link>

            <Link to="/learn/react" className="block">
              <div className="glass-panel p-6 transition-transform hover:scale-[1.02] cursor-pointer">
                <h2 className="text-2xl font-bold mb-4">React</h2>
                <p className="text-gray-600">
                  Dive deep into React, a JavaScript library for building user interfaces with a focus on
                  component-based architecture and efficient DOM manipulation.
                </p>
              </div>
            </Link>

            <Link to="/learn/nodejs" className="block">
              <div className="glass-panel p-6 transition-transform hover:scale-[1.02] cursor-pointer">
                <h2 className="text-2xl font-bold mb-4">Node.js</h2>
                <p className="text-gray-600">
                  Understand Node.js, a JavaScript runtime built on Chrome's V8 JavaScript engine that
                  allows you to run JavaScript on the server side.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Learn;
