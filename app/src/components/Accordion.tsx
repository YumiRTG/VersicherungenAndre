import { useState, useRef } from 'react';
import { Plus } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        height: isOpen ? 'auto' : 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  }, [isOpen]);

  return (
    <div className="border border-mist rounded-xl overflow-hidden bg-soft-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-light-sage/30 transition-colors"
      >
        <h3 className="font-display text-lg font-semibold text-dark-brown pr-4">{title}</h3>
        <Plus
          className={`w-5 h-5 text-deep-forest shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        />
      </button>
      <div ref={contentRef} className="overflow-hidden" style={{ height: defaultOpen ? 'auto' : 0 }}>
        <div className="px-5 pb-5 text-dark-brown/80 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { title: string; content: React.ReactNode }[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
