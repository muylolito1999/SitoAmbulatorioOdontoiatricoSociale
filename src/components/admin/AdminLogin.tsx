import { useState } from 'react';
import Button from '../ui/Button';

interface AdminLoginProps {
  onLogin: () => void;
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const expected = import.meta.env.VITE_ADMIN_PASSCODE || 'admin2024';
    if (passcode === expected) {
      onLogin();
    } else {
      setError('Codice di accesso errato');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 pt-24">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-neutral-900">Pannello Admin</h1>
        <p className="mt-2 text-sm text-neutral-500">
          Inserisci il codice di accesso per modificare i contenuti del sito.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="admin-passcode" className="block text-sm font-medium text-neutral-700">
              Codice di accesso
            </label>
            <input
              id="admin-passcode"
              type="password"
              value={passcode}
              onChange={(e) => {
                setPasscode(e.target.value);
                setError('');
              }}
              className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2 text-neutral-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
              autoFocus
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button type="submit" className="w-full">
            Accedi
          </Button>
        </form>
      </div>
    </div>
  );
}
