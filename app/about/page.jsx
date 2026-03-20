import { GraduationCap, TreePine, Users } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';

export const metadata = {
  title: 'About | Liam Aiello',
  description:
    'Learn about Liam Aiello — a software developer with a passion for the environment.',
};

const sections = [
  {
    icon: GraduationCap,
    title: 'Background',
    content:
      'Ever since I was young, I was certain about two things: my passion for computers and my love of the outdoors. When presented the opportunity to attend the University of Toronto in Mississauga (UTM), it was a no-brainer. I seized the opportunity to study my passion on an environmentally friendly campus surrounded by forest.',
  },
  {
    icon: Users,
    title: 'My Approach',
    content:
      "My experience in the industry has shaped me into who I am today. I continue to learn how to design, plan, and implement software solutions at scale, but more importantly, I continue to learn how to collaborate on software. Every project serves as its own unique learning experience, not only through overcoming technical challenges, but also through requirement gathering, communicating, delivering, and effectively working as a team.",
  },
  {
    icon: TreePine,
    title: 'What Drives Me',
    content:
      "I hope to use my aptitude for programming and computer science to help the environment. The projects below not only show what I've done so far, but also who I am as a software developer. Be sure to check back for new projects in the future!",
  },
];

export default function About() {
  return (
    <section className="mx-auto min-h-screen max-w-3xl px-6 pt-28 pb-20">
      <AnimatedSection>
        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
          A Tree Hugging{' '}
          <span className="bg-gradient-to-r from-purple-400 to-orange-500 bg-clip-text text-transparent">
            Programmer
          </span>
        </h1>
        <p className="mb-12 text-zinc-400">Getting to know me</p>
      </AnimatedSection>

      <div className="space-y-10">
        {sections.map(({ icon: Icon, title, content }, i) => (
          <AnimatedSection key={title} delay={i * 0.15}>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-400/10">
                <Icon size={20} className="text-purple-400" />
              </div>
              <div>
                <h2 className="mb-2 text-xl font-semibold text-zinc-100">
                  {title}
                </h2>
                <p className="leading-relaxed text-zinc-400">{content}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.5} className="mt-14">
        <Button path="/projects">See My Projects →</Button>
      </AnimatedSection>
    </section>
  );
}
