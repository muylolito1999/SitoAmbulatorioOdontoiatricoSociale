import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500',
  secondary:
    'bg-secondary-400 text-neutral-900 hover:bg-secondary-500 focus-visible:ring-secondary-400',
  outline:
    'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus-visible:ring-primary-500',
  ghost:
    'text-neutral-700 hover:bg-neutral-100 focus-visible:ring-neutral-400',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, ...rest } = props;

  const classes = cn(
    'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'hover:-translate-y-0.5 active:translate-y-0',
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if ('href' in rest && rest.href) {
    return <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} className={classes} />;
  }

  return <button {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} className={classes} />;
}
