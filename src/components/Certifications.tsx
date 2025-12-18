import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const certifications = [
  {
    id: 1,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'December 2024',
    credentialId: 'AWS-CCP-2024-12345',
    description: 'Foundational understanding of AWS Cloud concepts, services, and terminology.',
    skills: ['Cloud Computing', 'AWS', 'Infrastructure'],
    logo: '☁️',
    verifyUrl: 'https://aws.amazon.com/verification',
  },
  {
    id: 2,
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    date: 'October 2024',
    credentialId: 'GDAC-2024-67890',
    description: 'Comprehensive data analytics skills including data cleaning, visualization, and analysis.',
    skills: ['Data Analysis', 'SQL', 'Tableau', 'R'],
    logo: '📊',
    verifyUrl: 'https://coursera.org/verify',
  },
  {
    id: 3,
    title: 'Meta Front-End Developer Certificate',
    issuer: 'Meta',
    date: 'August 2024',
    credentialId: 'META-FE-2024-54321',
    description: 'Professional-level training in React, JavaScript, and modern front-end development.',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'UI/UX'],
    logo: '⚛️',
    verifyUrl: 'https://coursera.org/verify',
  },
  {
    id: 4,
    title: 'CompTIA Security+ Certification',
    issuer: 'CompTIA',
    date: 'June 2024',
    credentialId: 'COMP-SEC-2024-98765',
    description: 'Core cybersecurity skills and best practices for securing networks and systems.',
    skills: ['Cybersecurity', 'Network Security', 'Risk Management'],
    logo: '🔒',
    verifyUrl: 'https://comptia.org/verify',
  },
  {
    id: 5,
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University & DeepLearning.AI',
    date: 'April 2024',
    credentialId: 'ML-SPEC-2024-11111',
    description: 'Advanced machine learning algorithms and practical implementation techniques.',
    skills: ['Machine Learning', 'Python', 'TensorFlow', 'Neural Networks'],
    logo: '🤖',
    verifyUrl: 'https://coursera.org/verify',
  },
  {
    id: 6,
    title: 'GitHub Foundations Certification',
    issuer: 'GitHub',
    date: 'March 2024',
    credentialId: 'GH-FOUND-2024-22222',
    description: 'Proficiency in Git version control, collaboration workflows, and GitHub features.',
    skills: ['Git', 'Version Control', 'GitHub', 'DevOps'],
    logo: '🐙',
    verifyUrl: 'https://github.com/verify',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-4 text-white">Certifications & Credentials</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Professional certifications and credentials that validate my expertise in various technologies and domains.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.id} className="flex flex-col bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
              <CardHeader>
                <div className="flex items-start gap-3 mb-2">
                  <div className="text-4xl">{cert.logo}</div>
                  <div className="flex-1">
                    <CardTitle className="text-white text-lg leading-tight mb-2">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-sm">
                      {cert.issuer}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  {cert.date}
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="text-sm text-gray-300">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="pt-2">
                  <p className="text-xs text-gray-500 mb-2">
                    ID: {cert.credentialId}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full gap-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-gray-500 transition-all shadow-md hover:shadow-lg hover:shadow-gray-700/30" 
                    asChild
                  >
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                      <Award className="w-3 h-3" />
                      Verify Credential
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
