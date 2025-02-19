
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, GraduationCap, Heart, Infinity, Laptop, LinkedinIcon, Mail, Github } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Developers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <div className="flex items-center justify-center gap-2 mb-12">
          <Infinity className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold text-center">Our Developer Team</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Prince's Profile */}
          <Card className="overflow-hidden">
            {/* Cover Image */}
            <div className="relative h-48">
              <img 
                src="/lovable-uploads/9da579d4-40d1-4d01-ab9b-62d9a7bbd09c.png" 
                alt="Cover" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <CardContent className="space-y-6 p-6">
              {/* Profile Image - Positioned to overlap with cover */}
              <div className="flex flex-col items-center -mt-20">
                <Avatar className="h-32 w-32 mb-4 ring-4 ring-white">
                  <AvatarImage 
                    src="/lovable-uploads/ee132d4a-cd71-45f8-901e-956b65b041c5.png" 
                    alt="Prince Kumar" 
                    className="object-cover"
                  />
                  <AvatarFallback>PK</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold">Prince Kumar</h2>
                <p className="text-gray-600">Full Stack Developer</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button variant="outline" size="sm" onClick={() => window.open("tel:+916207215942")}>
                    +91-6207 215 942
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => window.open("mailto:maihoonprinx@gmail.com")}>
                    maihoonprinx@gmail.com
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Java", "JavaScript", "C", "React.js", "Node.js", "Express.js", "Next.js",
                      "MongoDB", "SQL", "Firebase", "HTML", "CSS", "Tailwind CSS", "Material UI",
                      "Bootstrap", "Git", "GitHub", "VS Code", "IntelliJ IDEA", "Netlify", "Vercel"
                    ].map((skill) => (
                      <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Education & Achievements
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <span className="font-semibold">Bachelor of Technology (CSE)</span> - Bharat Institute of Technology, Meerut (AKTU university)
                      <span className="text-primary ml-2">2021 - 2025</span>
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Certificate in AI/ML of Geodata Analysis from ISRO</li>
                      <li>HackerRank 5 Star in JAVA & C for Problem Solving</li>
                      <li>300+ problems solved on LeetCode</li>
                      <li>Participated in 3 hackathons</li>
                      <li>Member of ACM Community</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Laptop className="h-5 w-5 text-primary" />
                    Experience & Projects
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Full-Stack Web Development Intern @ Leveragex.in</p>
                      <p className="text-gray-600 text-sm">July 2024 - Dec 2024</p>
                      <ul className="list-disc list-inside text-gray-600 mt-1">
                        <li>Developed and optimized RESTful APIs and implemented CRUD operations</li>
                        <li>Coordinated between frontend and backend teams</li>
                        <li>Led and mentored a team of newly recruited interns</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Notable Projects</p>
                      <ul className="list-disc list-inside text-gray-600 mt-1">
                        <li>ComraDe - A Social Media Platform (MongoDB, Express.js, React.js, Node.js)</li>
                        <li>InfiniteTube - YouTube Clone (React.js, Rapid API, Material UI)</li>
                        <li>AKTU Educational Resource Website (HTML, CSS, JavaScript)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    className="flex items-center gap-2" 
                    onClick={() => window.open("/lovable-uploads/ff25eb6a-fa75-4882-aefd-6a69498fb88d.png", "_blank")}
                  >
                    <GraduationCap className="h-4 w-4" />
                    View Resume
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => window.open("mailto:maihoonprinx@gmail.com")}>
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => window.open("https://www.linkedin.com/in/prinx/", "_blank")}>
                      <LinkedinIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => window.open("https://github.com/maihoonprince", "_blank")}>
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pari's Profile */}
          <Card className="overflow-hidden">
            {/* Cover Image */}
            <div className="relative h-48">
              <img 
                src="/lovable-uploads/4641e02a-4020-4224-9a20-e9c1684a8ea4.png" 
                alt="Cover" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <CardContent className="space-y-6 p-6">
              {/* Profile Image - Positioned to overlap with cover */}
              <div className="flex flex-col items-center -mt-20">
                <Avatar className="h-32 w-32 mb-4 ring-4 ring-white">
                  <AvatarImage 
                    src="/lovable-uploads/c6a28064-10fd-49b1-a95d-2e4aaae7fa7b.png" 
                    alt="Pari Bainsla" 
                    className="object-cover"
                  />
                  <AvatarFallback>PB</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold">Pari Bainsla</h2>
                <p className="text-gray-600">Full Stack Developer</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button variant="outline" size="sm" onClick={() => window.open("tel:+918532814392")}>
                    +91-8532 814 392
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => window.open("mailto:paribainsla161@gmail.com")}>
                    paribainsla161@gmail.com
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "HTML", "CSS", "JavaScript", "C++", "React.js", "Node.js", "Express.js",
                      "MongoDB", "Firebase", "Bootstrap", "Tailwind CSS", "GSAP", "Git", "GitHub"
                    ].map((skill) => (
                      <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Education & Achievements
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <span className="font-semibold">Bachelor of Technology (CSE)</span> - Bharat Institute of Technology, Meerut
                      <span className="text-primary ml-2">2021 - 2025</span>
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Selected for Presentation Round, Smart India Hackathon (2024)</li>
                      <li>Led Mini Project - Currency Converter (2023)</li>
                      <li>CGPA: 9.18/10</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Laptop className="h-5 w-5 text-primary" />
                    Experience & Projects
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Web Development Intern</p>
                      <p className="text-gray-600 text-sm">CodSoft & Octanet Services (April 2024 - June 2024)</p>
                      <ul className="list-disc list-inside text-gray-600 mt-1">
                        <li>Developed features for web projects, enhancing frontend user interface</li>
                        <li>Created responsive web applications improving user experience</li>
                        <li>Focused on site accessibility and performance optimization</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Notable Projects</p>
                      <ul className="list-disc list-inside text-gray-600 mt-1">
                        <li>Baskin Robbins Website (GSAP, ScrollTrigger)</li>
                        <li>Personal Portfolio Website</li>
                        <li>Devour - Food Ordering Website</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    className="flex items-center gap-2" 
                    onClick={() => window.open("/lovable-uploads/bfc54039-4e5c-4d91-a100-70d089da41b9.png", "_blank")}
                  >
                    <GraduationCap className="h-4 w-4" />
                    View Resume
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => window.open("mailto:paribainsla161@gmail.com")}>
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => window.open("https://www.linkedin.com/in/paribainsla/", "_blank")}>
                      <LinkedinIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => window.open("https://github.com/PariBainsla", "_blank")}>
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Developers;
