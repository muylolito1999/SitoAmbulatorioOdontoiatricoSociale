import { useState, useRef, useEffect, type ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export default function Accordion({ title, children, defaultOpen = false, className }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(defaultOpen ? undefined : 0);

  useEffect(() => {
    if (!bodyRef.current) return;
    setHeight(open ? bodyRef.current.scrollHeight : 0);
  }, [open]);

  return (
    <div className={cn('border-b border-neutral-200', className)}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold text-neutral-800 hover:text-primary-500 transition-colors"
        aria-expanded={open}
      >
        {title}
        <svg
          className={cn('h-5 w-5 shrink-0 transition-transform duration-300', open && 'rotate-180')}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        style={{ height: height !== undefined ? `${height}px` : 'auto' }}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
      >
        <div ref={bodyRef} className="pb-4">
          {children}
        </div>
      </div>
    </div>
  );
}
