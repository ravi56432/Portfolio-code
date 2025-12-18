import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React/Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Python', level: 80 },
      { name: 'SQL', level: 70 },
      { name: 'RESTful APIs', level: 85 },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'Docker', level: 60 },
      { name: 'AWS', level: 65 },
      { name: 'Figma', level: 75 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-4 text-white">Skills & Technologies</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.category} className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="bg-[rgba(3,3,3,0)]">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}