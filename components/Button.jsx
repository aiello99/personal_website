'use client';

import { useRouter } from 'next/navigation';

const Button = ({ path, children, variant = 'primary' }) => {
  const router = useRouter();

  const base =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300 cursor-pointer';

  const variants = {
    primary:
      'bg-purple-400 text-zinc-950 hover:bg-purple-300 hover:shadow-lg hover:shadow-purple-400/25',
    outline:
      'border border-zinc-700 text-zinc-300 hover:border-purple-400 hover:text-purple-400',
  };

  return (
    <button
      className={`${base} ${variants[variant]}`}
      onClick={() => router.push(path)}
    >
      {children}
    </button>
  );
};

export default Button;
