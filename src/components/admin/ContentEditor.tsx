import { useState, useRef } from 'react';
import { useContent } from '../../hooks/useContent';
import { exportContentJSON, importContentJSON, resetContent } from '../../content/contentStore';
import { defaultContent } from '../../content/defaultContent';
import type { SiteContent } from '../../content/types';
import SectionEditor from './SectionEditor';
import Button from '../ui/Button';
import { cn } from '../../lib/cn';

type SectionKey = keyof SiteContent;

const sections: { key: SectionKey; label: string }[] = [
  { key: 'hero', label: 'Hero' },
  { key: 'chiSiamo', label: 'Chi Siamo' },
  { key: 'cosaFacciamo', label: 'Cosa Facciamo' },
  { key: 'impatto', label: 'Impatto' },
  { key: 'timeline', label: 'Timeline' },
  { key: 'comeFunziona', label: 'Come Funziona' },
  { key: 'trasparenza', label: 'Trasparenza' },
  { key: 'partner', label: 'Partner' },
  { key: 'contactBand', label: 'Banda Contatti' },
  { key: 'contact', label: 'Contatti' },
  { key: 'about', label: 'About' },
  { key: 'founders', label: 'Fondatori' },
  { key: 'board', label: 'Consiglio' },
  { key: 'supportPage', label: 'Sostieni' },
  { key: 'volunteerPage', label: 'Volontariato' },
  { key: 'navbar', label: 'Navbar' },
  { key: 'footer', label: 'Footer' },
];

const fieldDefs: Record<SectionKey, { key: string; label: string; type: 'text' | 'textarea' | 'image' | 'array-text' | 'array-object'; objectFields?: { key: string; label: string }[] }[]> = {
  hero: [
    { key: 'title', label: 'Titolo', type: 'text' },
    { key: 'subtitle', label: 'Sottotitolo', type: 'textarea' },
    { key: 'backgroundImage', label: 'Immagine di sfondo', type: 'image' },
  ],
  chiSiamo: [
    { key: 'title', label: 'Titolo', type: 'text' },
    { key: 'description', label: 'Descrizione', type: 'textarea' },
    { key: 'image', label: 'Immagine', type: 'image' },
  ],
  cosaFacciamo: [
    { key: 'title', label: 'Titolo', type: 'text' },
    { key: 'subtitle', label: 'Sottotitolo', type: 'text' },
    { key: 'cards', label: 'Servizi', type: 'array-object', objectFields: [{ key: 'icon', label: 'Icona' }, { key: 'title', label: 'Titolo' }, { key: 'description', label: 'Descrizione' }] },
  ],
  impatto: [
    { key: 'title', label: 'Titolo', type: 'text' },
    { key: 'subtitle', label: 'Sottotitolo', type: 'text' },
    { key: 'stats', label: 'Statistiche', type: 'array-object', objectFields: [{ key: 'value', label: 'Valore' }, { key: 'label', label: 'Etichetta' }, { key: 'description', label: 'Descrizione' }] },
  ],
  timeline: [
    { key: 'title', label: 'Titolo', type: 'text' },
    { key: 'subtitle', label: 'Sottotitolo', type: 'text' },
    { key: 'events', label: 'Eventi', type: 'array-object', objectFields: [{ key: 'date', label: 'Data' }, { key: 'title', label: 'Titolo' }, { key: 'description', label: 'Descrizione' }] },
  ],
  comeFunziona: [
    { key: 'title', label: 'Titolo', type: 'text' },
    { key: 'subtitle', label: 'Sottotitolo', type: 'text' },
    { key: 'steps', label: 'Passaggi', type: 'array-object', objectFields: [{ key: 'title', label: 'Titolo' }, { key: 'description', label: 'Descrizione' }] },
  ],
  trasparenza: [
    { key: 'title', label: 'Titolo', type: 'text' },
    { key: 'subtitle', label: 'Sottotitolo', type: 'text' },
    { key: 'highlights', label: 'Dati', type: 'array-object', objectFields: [{ key: 'label', label: 'Etichetta' }, { key: 'value', label: 'Valore' }, { key: 'description', label: 'Descrizione' }] },
    { key: 'note', label: 'Nota', type: 'textarea' },
  ],
  partner: [
    { key: 'title', label: 'Titolo', type: 'text' },
    { key: 'subtitle', label: 'Sottotitolo', type: 'text' },
    { key: 'partners', label: 'Partner', type: 'array-text' },
  ],
  contactBand: [
    { key: 'title', label: 'Titolo', type: 'text' },
    { key: 'subtitle', label: 'Sottotitolo', type: 'text' },
  ],
  contact: [
    { key: 'email', label: 'Email', type: 'text' },
    { key: 'phone', label: 'Telefono', type: 'text' },
    { key: 'address', label: 'Indirizzo', type: 'text' },
  ],
  about: [
    { key: 'title', label: 'Titolo', type: 'text' },
    { key: 'mission', label: 'Missione', type: 'textarea' },
    { key: 'vision', label: 'Visione', type: 'textarea' },
    { key: 'history', label: 'Storia', type: 'textarea' },
  ],
  founders: [
    { key: 'title', label: 'Titolo', type: 'text' },
    { key: 'names', label: 'Fondatori', type: 'array-text' },
  ],
  board: [
    { key: 'title', label: 'Titolo', type: 'text' },
    { key: 'members', label: 'Membri', type: 'array-object', objectFields: [{ key: 'name', label: 'Nome' }, { key: 'role', label: 'Ruolo' }] },
  ],
  supportPage: [
    { key: 'title', label: 'Titolo', type: 'text' },
    { key: 'description', label: 'Descrizione', type: 'textarea' },
    { key: 'donateText', label: 'Testo donazioni', type: 'textarea' },
    { key: 'donationCards', label: 'Tipi di donazione', type: 'array-object', objectFields: [{ key: 'title', label: 'Titolo' }, { key: 'description', label: 'Descrizione' }] },
    { key: 'donateIban', label: 'IBAN', type: 'text' },
    { key: 'bankIntestatario', label: 'Intestatario conto', type: 'text' },
    { key: 'bankCausale', label: 'Causale', type: 'text' },
    { key: 'taxNote', label: 'Nota deducibilità fiscale', type: 'textarea' },
    { key: 'cinquePerMilleCF', label: 'Codice Fiscale 5x1000', type: 'text' },
    { key: 'cinquePerMilleText', label: 'Testo 5x1000', type: 'textarea' },
  ],
  volunteerPage: [
    { key: 'title', label: 'Titolo', type: 'text' },
    { key: 'description', label: 'Descrizione', type: 'textarea' },
    { key: 'benefits', label: 'Cosa offriamo', type: 'array-text' },
    { key: 'ctaText', label: 'Testo invito', type: 'textarea' },
  ],
  navbar: [
    { key: 'brandName', label: 'Nome brand', type: 'text' },
  ],
  footer: [
    { key: 'description', label: 'Descrizione', type: 'textarea' },
  ],
};

export default function ContentEditor() {
  const { content, setContent } = useContent();
  const [activeSection, setActiveSection] = useState<SectionKey>('hero');
  const [saved, setSaved] = useState(false);
  const importRef = useRef<HTMLInputElement>(null);

  const handleFieldChange = (key: string, value: unknown) => {
    const updated = {
      ...content,
      [activeSection]: {
        ...content[activeSection],
        [key]: value,
      },
    };
    setContent(updated);
    setSaved(false);
  };

  const handleSave = () => {
    setContent(content);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleExport = () => {
    const json = exportContentJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'site-content.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = importContentJSON(reader.result as string);
        setContent(imported);
      } catch {
        alert('Errore nell\'importazione del file JSON.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleReset = () => {
    if (window.confirm('Sei sicuro di voler ripristinare i contenuti predefiniti? Tutte le modifiche andranno perse.')) {
      resetContent();
      setContent(defaultContent);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-24">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-neutral-900">Gestione Contenuti</h1>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" onClick={handleSave}>
              {saved ? 'Salvato!' : 'Salva'}
            </Button>
            <Button size="sm" variant="outline" onClick={handleExport}>
              Esporta JSON
            </Button>
            <Button size="sm" variant="outline" onClick={() => importRef.current?.click()}>
              Importa JSON
            </Button>
            <input ref={importRef} type="file" accept=".json" onChange={handleImport} className="hidden" />
            <Button size="sm" variant="ghost" onClick={handleReset}>
              Ripristina
            </Button>
            <Button size="sm" variant="ghost" href="/" target="_blank">
              Anteprima
            </Button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <nav className="space-y-1">
            {sections.map((s) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setActiveSection(s.key)}
                className={cn(
                  'block w-full rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors',
                  activeSection === s.key
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-neutral-600 hover:bg-neutral-100',
                )}
              >
                {s.label}
              </button>
            ))}
          </nav>

          {/* Editor */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-lg font-bold text-neutral-900">
              {sections.find((s) => s.key === activeSection)?.label}
            </h2>
            <SectionEditor
              data={content[activeSection] as unknown as Record<string, string | string[] | Record<string, unknown>[] | Record<string, unknown>>}
              fields={fieldDefs[activeSection]}
              onChange={handleFieldChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
