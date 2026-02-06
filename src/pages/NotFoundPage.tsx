import { Link } from 'react-router';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 pt-24">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-primary-500">404</h1>
        <p className="mt-4 text-xl text-neutral-600">Pagina non trovata</p>
        <p className="mt-2 text-neutral-500">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <div className="mt-8">
          <Link to="/">
            <Button>Torna alla Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
