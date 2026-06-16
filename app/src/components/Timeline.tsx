import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!timelineRef.current) return;

    const cards = timelineRef.current.querySelectorAll('.timeline-card');

    cards.forEach((card, i) => {
      const isLeft = i % 2 === 0;
      gsap.fromTo(
        card,
        { opacity: 0, x: isLeft ? -40 : 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, { scope: timelineRef });

  return (
    <div ref={timelineRef} className="relative">
      {/* Center line - desktop only */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-mist -translate-x-1/2" />

      {/* Mobile line */}
      <div className="md:hidden absolute left-[19px] top-0 bottom-0 w-[3px] bg-mist" />

      <div className="space-y-12 md:space-y-16">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`timeline-card relative flex items-start gap-6 md:gap-0 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content card */}
              <div className={`flex-1 md:w-[45%] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-soft-white border border-mist rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <span className="inline-block px-3 py-1 bg-coral text-soft-white text-sm font-bold rounded-full">
                    {event.year}
                  </span>
                  <h3 className="font-display text-lg font-bold text-dark-brown mt-3">
                    {event.title}
                  </h3>
                  <p className="text-dark-brown/75 text-[15px] mt-2 leading-relaxed">
                    {event.description}
                  </p>
                  {event.image && (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="mt-4 rounded-lg w-full h-40 object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>

              {/* Center dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                <div className="w-6 h-6 rounded-full bg-mist border-4 border-soft-white hover:bg-coral hover:shadow-[0_0_20px_rgba(224,122,95,0.3)] transition-all duration-300 cursor-pointer" />
              </div>

              {/* Mobile dot */}
              <div className="md:hidden absolute left-[19px] -translate-x-1/2 z-10">
                <div className="w-5 h-5 rounded-full bg-mist border-4 border-warm-sand" />
              </div>

              {/* Empty space for other side */}
              <div className="hidden md:block flex-1 md:w-[45%]" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
