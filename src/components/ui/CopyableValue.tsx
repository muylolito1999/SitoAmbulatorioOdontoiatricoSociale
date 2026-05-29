import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import { cn } from '../../lib/cn';

interface CopyableValueProps {
  label: string;
  value: string;
  className?: string;
}

export default function CopyableValue({ label, value, className }: CopyableValueProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <div className={className}>
      <span className="text-xs font-semibold uppercase text-neutral-500">{label}</span>
      <button
        type="button"
        onClick={() => copy(value)}
        aria-label={`Copia ${label}`}
        className={cn(
          'mt-1 flex w-full items-center gap-2 rounded-md text-left transition-colors',
          'hover:bg-neutral-100 active:bg-neutral-200',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400',
          '-mx-1 px-1 py-1',
        )}
      >
        <span className="flex-1 font-mono text-sm text-neutral-800 break-all">{value}</span>
        {copied ? (
          <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-green-600">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            Copiato!
          </span>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="h-5 w-5 shrink-0 text-neutral-400"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m11.25 6.376h-3.375c-.621 0-1.125-.504-1.125-1.125v-3.375"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
