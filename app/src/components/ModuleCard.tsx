import { Check } from 'lucide-react';
import { getLenis } from '@/hooks/useLenis';

interface ModuleCardProps {
  number: string;
  title: string;
  description: string;
  topics: string[];
  image: string;
  href: string;
}

export default function ModuleCard({ number, title, description, topics, image, href }: ModuleCardProps) {
  const scrollTo = () => {
    const target = document.querySelector(href);
    if (target) {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className="group bg-soft-white border border-mist rounded-[20px] overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1.5 hover:border-muted-sage transition-all duration-400 cursor-pointer"
      onClick={scrollTo}
    >
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/60 to-transparent" />
        <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-deep-forest flex items-center justify-center text-soft-white font-display text-lg font-bold">
          {number}
        </div>
      </div>

      <div className="p-8">
        <h3 className="font-display text-xl font-bold text-dark-brown">{title}</h3>
        <p className="mt-2 text-[15px] text-dark-brown/70 leading-relaxed">{description}</p>

        <ul className="mt-5 space-y-2">
          {topics.map((topic) => (
            <li key={topic} className="flex items-start gap-2 text-[14px] text-dark-brown/70">
              <Check className="w-4 h-4 text-muted-sage mt-0.5 shrink-0" />
              <span>{topic}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={(e) => {
            e.stopPropagation();
            scrollTo();
          }}
          className="mt-6 w-full py-3 px-6 border-[1.5px] border-mist rounded-lg text-sm font-medium text-dark-brown hover:border-coral hover:text-coral transition-colors"
        >
          Modul öffnen
        </button>
      </div>
    </div>
  );
}
