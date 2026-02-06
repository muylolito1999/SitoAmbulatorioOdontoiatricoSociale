import { useState, useEffect } from 'react';
import AdminLogin from '../components/admin/AdminLogin';
import ContentEditor from '../components/admin/ContentEditor';

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem('admin-authenticated');
    if (stored === 'true') setAuthenticated(true);
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem('admin-authenticated', 'true');
    setAuthenticated(true);
  };

  if (!authenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <ContentEditor />;
}
