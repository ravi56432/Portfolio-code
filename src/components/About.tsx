import { GraduationCap, Code, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12 text-white">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1519664993241-d7c8f0ae7b39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjYwNTI2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Student workspace"
              className="rounded-lg shadow-lg w-full h-auto object-cover ring-1 ring-gray-700"
            />
          </div>
          <div>
            <p className="text-gray-300 mb-6">
              I'm a junior at State University majoring in Computer Science with a minor in Mathematics. 
              My journey in tech started when I built my first website in high school, and I've been 
              hooked ever since.
            </p>
            <p className="text-gray-300 mb-8">
              I'm particularly interested in full-stack development and artificial intelligence. 
              When I'm not coding, you can find me contributing to open-source projects, participating 
              in hackathons, or mentoring fellow students in our coding club.
            </p>
            <div className="space-y-4">
              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="flex items-start gap-4 p-4">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-white">Education</h3>
                    <p className="text-sm text-gray-300">B.S. Computer Science, Expected 2026</p>
                    <p className="text-sm text-gray-400">GPA: 3.8/4.0</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="flex items-start gap-4 p-4">
                  <div className="p-2 rounded-lg bg-indigo-500/20">
                    <Code className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-white">Experience</h3>
                    <p className="text-sm text-gray-300">Software Engineering Intern</p>
                    <p className="text-sm text-gray-400">Tech Startup (Summer 2024)</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="flex items-start gap-4 p-4">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-white">Achievements</h3>
                    <p className="text-sm text-gray-300">1st Place, University Hackathon 2024</p>
                    <p className="text-sm text-gray-400">Dean's List (2023-2024)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}