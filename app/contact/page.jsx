import { Mail, MapPin } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact | Liam Aiello',
  description: 'Get in touch with Liam Aiello.',
};

export default function Contact() {
  return (
    <section className="mx-auto min-h-screen max-w-3xl px-6 pt-28 pb-20">
      <AnimatedSection>
        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Get in{' '}
          <span className="bg-gradient-to-r from-purple-400 to-orange-500 bg-clip-text text-transparent">
            Touch
          </span>
        </h1>
        <p className="mb-12 text-zinc-400">
          Have a question or want to work together? Drop me a line.
        </p>
      </AnimatedSection>

      <div className="grid gap-12 md:grid-cols-5">
        <AnimatedSection className="md:col-span-3" delay={0.1}>
          <ContactForm />
        </AnimatedSection>

        <AnimatedSection className="space-y-6 md:col-span-2" delay={0.2}>
          <div className="flex items-start gap-3">
            <Mail size={20} className="mt-0.5 text-purple-400" />
            <div>
              <p className="text-sm font-medium text-zinc-300">Email</p>
              <a
                href="mailto:liam.business99@gmail.com"
                className="text-sm text-zinc-400 transition-colors hover:text-purple-400"
              >
                liam.business99@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={20} className="mt-0.5 text-purple-400" />
            <div>
              <p className="text-sm font-medium text-zinc-300">Location</p>
              <p className="text-sm text-zinc-400">Toronto, ON, Canada</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
