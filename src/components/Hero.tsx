import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate transform values based on scroll position
  // Zoom in to cover almost full screen, then move up
  const scale = Math.min(2.5, 1 + scrollY / 200); // Zoom from 1 to 2.5x
  const translateY = -scrollY * 1.2; // Move up as you scroll
  const opacity = Math.max(0, 1 - scrollY / 600); // Fade out

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated wrapper for entire hero content */}
      <div 
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{
          transform: `scale(${scale}) translateY(${translateY}px)`,
          opacity: opacity,
        }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1619126939975-319ed53f071d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwZ3JhZGllbnR8ZW58MXx8fHwxNzY2MDIwNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for Text Visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-blue-900/90"></div>
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-6xl shadow-lg shadow-blue-500/50">
                JS
              </div>
            </div>
            <h1 className="mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Hi, I'm Jordan Smith
            </h1>
            <p className="text-xl text-gray-300 mb-2">Computer Science Student</p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Passionate about creating innovative solutions through code. Currently pursuing my degree in Computer Science
              with a focus on web development and machine learning.
            </p>
            <div className="flex gap-4 justify-center mb-8">
              <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
                <Mail className="w-4 h-4" />
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-700/50">
                View Resume
              </Button>
            </div>
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <Github className="w-6 h-6 text-gray-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-gray-300" />
              </a>
              <a
                href="mailto:jordan@example.com"
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <Mail className="w-6 h-6 text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}