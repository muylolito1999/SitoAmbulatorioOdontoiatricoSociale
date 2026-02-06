import { useRef, useState } from 'react';
import { cn } from '../../lib/cn';

interface ImageUploaderProps {
  value: string;
  onChange: (base64: string) => void;
  label?: string;
}

export default function ImageUploader({ value, onChange, label }: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [warning, setWarning] = useState('');

  const processFile = (file: File) => {
    setWarning('');
    if (file.size > 2 * 1024 * 1024) {
      setWarning('Immagine superiore a 2MB. Potrebbe rallentare il sito.');
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onChange(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) processFile(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  return (
    <div>
      {label && <label className="mb-2 block text-sm font-medium text-neutral-700">{label}</label>}
      <div
        className={cn(
          'rounded-lg border-2 border-dashed p-6 text-center transition-colors cursor-pointer',
          dragging ? 'border-primary-500 bg-primary-50' : 'border-neutral-300 hover:border-neutral-400',
        )}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        {value ? (
          <img src={value} alt="Anteprima" className="mx-auto max-h-40 rounded-lg" />
        ) : (
          <p className="text-sm text-neutral-500">
            Trascina un'immagine o clicca per selezionarla
          </p>
        )}
      </div>
      {warning && <p className="mt-1 text-xs text-amber-600">{warning}</p>}
      {value && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onChange(''); setWarning(''); }}
          className="mt-2 text-xs text-red-500 hover:underline"
        >
          Rimuovi immagine
        </button>
      )}
    </div>
  );
}
