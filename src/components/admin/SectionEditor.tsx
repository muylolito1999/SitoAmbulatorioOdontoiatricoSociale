import ImageUploader from './ImageUploader';

type Value = string | string[] | Record<string, unknown>[] | Record<string, unknown>;

interface FieldDef {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'image' | 'array-text' | 'array-object';
  objectFields?: { key: string; label: string }[];
}

interface SectionEditorProps {
  data: Record<string, Value>;
  fields: FieldDef[];
  onChange: (key: string, value: Value) => void;
}

export default function SectionEditor({ data, fields, onChange }: SectionEditorProps) {
  return (
    <div className="space-y-6">
      {fields.map((field) => {
        const value = data[field.key];

        if (field.type === 'text') {
          return (
            <div key={field.key}>
              <label className="block text-sm font-medium text-neutral-700">{field.label}</label>
              <input
                type="text"
                value={(value as string) ?? ''}
                onChange={(e) => onChange(field.key, e.target.value)}
                className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
              />
            </div>
          );
        }

        if (field.type === 'textarea') {
          return (
            <div key={field.key}>
              <label className="block text-sm font-medium text-neutral-700">{field.label}</label>
              <textarea
                rows={4}
                value={(value as string) ?? ''}
                onChange={(e) => onChange(field.key, e.target.value)}
                className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none resize-none"
              />
            </div>
          );
        }

        if (field.type === 'image') {
          return (
            <ImageUploader
              key={field.key}
              label={field.label}
              value={(value as string) ?? ''}
              onChange={(v) => onChange(field.key, v)}
            />
          );
        }

        if (field.type === 'array-text') {
          const arr = (value as string[]) ?? [];
          return (
            <div key={field.key}>
              <label className="block text-sm font-medium text-neutral-700">{field.label}</label>
              <div className="mt-2 space-y-2">
                {arr.map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => {
                        const next = [...arr];
                        next[i] = e.target.value;
                        onChange(field.key, next);
                      }}
                      className="block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => onChange(field.key, arr.filter((_, j) => j !== i))}
                      className="shrink-0 rounded-lg px-3 py-2 text-sm text-red-500 hover:bg-red-50"
                    >
                      Rimuovi
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => onChange(field.key, [...arr, ''])}
                  className="text-sm font-medium text-primary-500 hover:underline"
                >
                  + Aggiungi
                </button>
              </div>
            </div>
          );
        }

        if (field.type === 'array-object' && field.objectFields) {
          const arr = (value as Record<string, string>[]) ?? [];
          return (
            <div key={field.key}>
              <label className="block text-sm font-medium text-neutral-700">{field.label}</label>
              <div className="mt-2 space-y-3">
                {arr.map((item, i) => (
                  <div key={i} className="flex flex-wrap gap-2 rounded-lg border border-neutral-200 p-3">
                    {field.objectFields!.map((of) => (
                      <input
                        key={of.key}
                        type="text"
                        placeholder={of.label}
                        value={item[of.key] ?? ''}
                        onChange={(e) => {
                          const next = [...arr];
                          next[i] = { ...item, [of.key]: e.target.value };
                          onChange(field.key, next);
                        }}
                        className="block flex-1 min-w-[120px] rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                      />
                    ))}
                    <button
                      type="button"
                      onClick={() => onChange(field.key, arr.filter((_, j) => j !== i))}
                      className="shrink-0 rounded-lg px-3 py-2 text-sm text-red-500 hover:bg-red-50"
                    >
                      Rimuovi
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    const empty: Record<string, string> = {};
                    for (const of2 of field.objectFields!) empty[of2.key] = '';
                    onChange(field.key, [...arr, empty]);
                  }}
                  className="text-sm font-medium text-primary-500 hover:underline"
                >
                  + Aggiungi
                </button>
              </div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
