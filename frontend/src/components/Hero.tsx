import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Book, Code, Terminal, Brain, Users, Zap, Puzzle, Layout } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FeatureCard = ({ icon: Icon, title, description, link }: { 
  icon: any; 
  title: string; 
  description: string;
  link: string;
}) => (
  <Link to={link}>
    <Card className="h-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </Link>
);

export const Hero = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Learn to Code with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                {" "}
                AI-Powered
              </span>{" "}
              Support
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-slow">
              Master web development, algorithms, and coding practices with our comprehensive 
              learning platform featuring AI assistance and interactive challenges.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Link to="/learn">
              <Button size="lg" className="group">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/playground">
              <Button size="lg" variant="outline" className="group">
                Try Playground
                <Code className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Everything You Need to Master Coding</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive learning paths, interactive challenges, and real-world projects
            to help you become a professional developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-slow">
          <FeatureCard
            icon={Book}
            title="MERN Stack Learning"
            description="Comprehensive tutorials covering MongoDB, Express.js, React, and Node.js with hands-on examples."
            link="/learn"
          />
          
          <FeatureCard
            icon={Brain}
            title="DSA Interview Prep"
            description="Top 100 Data Structures and Algorithms questions with detailed explanations and solutions."
            link="/dsa-questions"
          />
          
          <FeatureCard
            icon={Terminal}
            title="Interactive Playground"
            description="Practice coding in real-time with our interactive code editor and immediate feedback."
            link="/playground"
          />
          
          <FeatureCard
            icon={Users}
            title="Community Support"
            description="Connect with fellow developers, share knowledge, and collaborate on projects."
            link="/community"
          />
          
          <FeatureCard
            icon={Zap}
            title="AI-Powered Support"
            description="Get instant help and code reviews from our AI assistant to accelerate your learning."
            link="/playground"
          />
          
          <FeatureCard
            icon={Puzzle}
            title="Coding Challenges"
            description="Regular coding challenges to improve your problem-solving skills and algorithmic thinking."
            link="/playground"
          />
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Built with Modern Technologies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Learn and build with the latest web development technologies used by top companies.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <Link to="/learn/mongodb" className="group">
              <div className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
                <h3 className="font-semibold group-hover:text-primary">MongoDB</h3>
                <p className="text-sm text-gray-600">NoSQL Database</p>
              </div>
            </Link>
            
            <Link to="/learn/express" className="group">
              <div className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
                <h3 className="font-semibold group-hover:text-primary">Express.js</h3>
                <p className="text-sm text-gray-600">Web Framework</p>
              </div>
            </Link>
            
            <Link to="/learn/react" className="group">
              <div className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
                <h3 className="font-semibold group-hover:text-primary">React</h3>
                <p className="text-sm text-gray-600">UI Library</p>
              </div>
            </Link>
            
            <Link to="/learn/nodejs" className="group">
              <div className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
                <h3 className="font-semibold group-hover:text-primary">Node.js</h3>
                <p className="text-sm text-gray-600">Runtime Environment</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-purple-400/10">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of developers who are already learning and building with our platform.
            </p>
            <Link to="/dsa-questions">
              <Button size="lg" className="group">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
