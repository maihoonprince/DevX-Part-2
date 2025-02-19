
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-transparent to-gray-100 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              DevX
            </h3>
            <p className="text-gray-600">
              Empowering developers to learn, build, and grow together in the world of web development.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Learn</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/learn/mongodb" className="text-gray-600 hover:text-primary">MongoDB</Link>
              </li>
              <li>
                <Link to="/learn/express" className="text-gray-600 hover:text-primary">Express.js</Link>
              </li>
              <li>
                <Link to="/learn/react" className="text-gray-600 hover:text-primary">React</Link>
              </li>
              <li>
                <Link to="/learn/nodejs" className="text-gray-600 hover:text-primary">Node.js</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/playground" className="text-gray-600 hover:text-primary">Playground</Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-600 hover:text-primary">Community</Link>
              </li>
              <li>
                <Link to="/developers" className="text-gray-600 hover:text-primary">Developers</Link>
              </li>
              <li>
                <Link to="/dsa-questions" className="text-gray-600 hover:text-primary">DSA Questions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: hello@devx.com</li>
              <li className="text-gray-600">Phone: +1 234 567 890</li>
              <li className="text-gray-600">Location: Remote First</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} DevX. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> by the DevX Team
          </p>
        </div>
      </div>
    </footer>
  );
};
