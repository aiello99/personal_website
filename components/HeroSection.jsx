import Image from 'next/image';
import { Github, Linkedin, FileText } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/liam-aiello-934a8919a/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/aiello99',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://drive.google.com/file/d/1xfiXx5to5sbfw6P8KyejtU3ILFpj0bOF/view?usp=sharing',
    icon: FileText,
    label: 'Resume',
  },
];

export default function HeroSection() {
  return (
    <section id="home" className="flex min-h-screen scroll-mt-16 flex-col items-center justify-center px-6 pt-16">
      <AnimatedSection className="flex flex-col items-center text-center">
        <div className="relative mb-8">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-400 to-orange-500 opacity-75 blur-md" />
          <Image
            src="/mewithfish_cut.png"
            alt="Liam Aiello"
            width={160}
            height={160}
            className="relative rounded-full border-2 border-zinc-800 object-cover"
            priority
          />
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-purple-400 to-orange-500 bg-clip-text text-transparent">
            Liam Aiello
          </span>
        </h1>

        <p className="mb-8 max-w-lg text-lg text-zinc-400">
          Software Developer · Environmental Advocate
        </p>

        <div className="mb-10 flex items-center gap-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full border border-zinc-800 p-3 text-zinc-400 transition-all duration-300 hover:border-purple-400 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-400/10"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300 bg-purple-400 text-zinc-950 hover:bg-purple-300 hover:shadow-lg hover:shadow-purple-400/25"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300 border border-zinc-700 text-zinc-300 hover:border-purple-400 hover:text-purple-400"
          >
            View Projects
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
