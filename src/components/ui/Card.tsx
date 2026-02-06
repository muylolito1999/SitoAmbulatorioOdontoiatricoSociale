import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  image?: string;
  imageAlt?: string;
}

export default function Card({ children, className, image, imageAlt }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300',
        'hover:-translate-y-1',
        className,
      )}
    >
      {image && (
        <img
          src={image}
          alt={imageAlt ?? ''}
          className="h-48 w-full rounded-t-2xl object-cover"
        />
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}
