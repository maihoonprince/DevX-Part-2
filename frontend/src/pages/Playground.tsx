import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Puzzle, Terminal, Laptop, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const PlaygroundCard = ({ title, description, icon: Icon, delay = 0, to }: { title: string; description: string; icon: any; delay?: number; to?: string }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
      onClick={handleClick}
    >
      <Card className="h-full transform transition-all duration-300 hover:shadow-lg cursor-pointer bg-white/50 backdrop-blur-sm border border-white/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeatureSection = ({ title, description }: { title: string; description: string }) => (
  <div className="text-center max-w-4xl mx-auto mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
    >
      {title}
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-gray-600 text-lg"
    >
      {description}
    </motion.p>
  </div>
);

const Playground = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6 mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
            >
              Interactive Code Playground
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Experience the future of coding with our interactive playground. Write, compile, and learn in real-time with instant feedback and collaborative features.
            </motion.p>
          </div>

          <FeatureSection 
            title="Built for Modern Developers"
            description="Our playground is equipped with the latest development tools and features to help you write better code faster."
          />

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start mb-6 bg-white/50 backdrop-blur-sm p-1 rounded-lg">
              <TabsTrigger value="all" className="text-base">All Features</TabsTrigger>
              <TabsTrigger value="challenges" className="text-base">Challenges</TabsTrigger>
              <TabsTrigger value="tutorials" className="text-base">Tutorials</TabsTrigger>
              <TabsTrigger value="projects" className="text-base">Projects</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PlaygroundCard
                title="DSA Theory"
                description="Learn Data Structures and Algorithms from basics to advanced with detailed explanations, examples, and visualizations."
                icon={BookOpen}
                delay={0}
                to="/dsa-theory"
              />
              

              <PlaygroundCard
                title="Interactive Code Editor"
                description="Write and test your code in real-time with our powerful online editor featuring syntax highlighting, auto-completion, and live preview."
                icon={Code}
                delay={0.1}
              />
              <PlaygroundCard
                title="Coding Challenges"
                description="Sharpen your skills with our curated collection of programming challenges, ranging from beginner to advanced levels."
                icon={Puzzle}
                delay={0.2}
              />
              <PlaygroundCard
                title="Terminal Simulator"
                description="Practice command line operations in a safe environment with our built-in terminal simulator. Perfect for learning DevOps basics."
                icon={Terminal}
                delay={0.3}
              />
              <PlaygroundCard
                title="Project Workspace"
                description="Build and experiment with full-stack projects in an isolated environment. Perfect for testing new ideas and learning frameworks."
                icon={Laptop}
                delay={0.4}
              />
            </TabsContent>

            <TabsContent value="challenges" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PlaygroundCard
                title="Algorithm Challenges"
                description="Master algorithmic problem-solving with our collection of challenges. Practice sorting, searching, and optimization problems."
                icon={Puzzle}
                delay={0.1}
              />
              <PlaygroundCard
                title="Data Structure Challenges"
                description="Implement and understand various data structures through hands-on coding exercises. From arrays to advanced tree structures."
                icon={Code}
                delay={0.2}
              />
              <PlaygroundCard
                title="Daily Coding Problems"
                description="Stay sharp with our daily coding challenges. New problems are added regularly to keep you engaged and learning."
                icon={Terminal}
                delay={0.3}
              />
              <PlaygroundCard
                title="Contest Platform"
                description="Participate in coding contests and compete with other developers. Track your progress and improve your ranking."
                icon={Laptop}
                delay={0.4}
              />
            </TabsContent>

            <TabsContent value="tutorials" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PlaygroundCard
                title="Interactive Learning Paths"
                description="Follow structured learning paths tailored to your skill level. Master programming concepts step by step."
                icon={Terminal}
                delay={0.1}
              />
              <PlaygroundCard
                title="Video Tutorials"
                description="Access comprehensive video tutorials with hands-on coding exercises. Learn by doing with expert guidance."
                icon={Laptop}
                delay={0.2}
              />
              <PlaygroundCard
                title="Documentation Guide"
                description="Navigate through interactive documentation with live code examples. Learn best practices and coding standards."
                icon={Code}
                delay={0.3}
              />
              <PlaygroundCard
                title="Code Reviews"
                description="Get feedback on your code from our AI-powered code review system. Learn from your mistakes and improve."
                icon={Puzzle}
                delay={0.4}
              />
            </TabsContent>

            <TabsContent value="projects" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PlaygroundCard
                title="Frontend Projects"
                description="Build responsive web applications using modern frameworks like React. Create beautiful UIs with real-world applications."
                icon={Code}
                delay={0.1}
              />
              <PlaygroundCard
                title="Backend Projects"
                description="Develop scalable backend services using Node.js and Express. Learn database integration and API development."
                icon={Terminal}
                delay={0.2}
              />
              <PlaygroundCard
                title="Full-Stack Projects"
                description="Create end-to-end applications combining frontend and backend technologies. Build complete web applications."
                icon={Laptop}
                delay={0.3}
              />
              <PlaygroundCard
                title="DevOps Projects"
                description="Learn deployment, containerization, and CI/CD pipelines through hands-on projects. Master modern DevOps tools."
                icon={Puzzle}
                delay={0.4}
              />
            </TabsContent>
          </Tabs>

          <FeatureSection 
            title="Ready to Start Coding?"
            description="Join thousands of developers who are already using our playground to improve their coding skills and build amazing projects."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Playground;
