import Card from '@/components/Card';
import AnimatedSection from '@/components/AnimatedSection';

const projects = [
  {
    title: 'Course Crunch',
    imgSrc: '/coursecrunch.png',
    content:
      'An all-in-one web tool to help students at UTM find information on courses, professors, and timetables.',
    link: 'https://github.com/CourseCrunch/CourseCrunch',
    tags: ['Web', 'Education'],
  },
  {
    title: 'Typthon Compiler',
    imgSrc: '/typthon.png',
    content:
      'Inspired by TypeScript, Typthon is a statically typed version of Python made in PLY, complete with its own robust typechecker.',
    link: 'https://github.com/aiello99/Typthon',
    tags: ['Python', 'Compilers', 'PLY'],
  },
  {
    title: 'Distributed URL-Shortener',
    imgSrc: '/urlshortener.png',
    content:
      'A scalable and distributed URL shortener similar to bit.ly. Made with Docker, Redis, and Cassandra.',
    link: 'https://github.com/aiello99/URLShortener',
    tags: ['Docker', 'Redis', 'Cassandra'],
  },
  {
    title: 'Connect 4',
    imgSrc: '/connect4.png',
    content:
      'A version of Connect 4 made in Python using Pygame. I helped design and implement the underlying MVC architecture.',
    link: 'https://github.com/osamaramihafez/c4',
    tags: ['Python', 'Pygame', 'MVC'],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-16 mx-auto min-h-screen max-w-5xl px-6 py-20">
      <AnimatedSection>
        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
          My{' '}
          <span className="bg-gradient-to-r from-purple-400 to-orange-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="mb-12 text-zinc-400">
          Things I&apos;ve built and contributed to
        </p>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
