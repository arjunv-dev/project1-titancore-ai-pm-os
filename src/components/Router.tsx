import React, { useState } from 'react';
import { Dashboard } from './Dashboard';
import { Roadmap } from './Roadmap';
import { SprintPlanning } from './SprintPlanning';
import { CompetitorAnalysis } from './CompetitorAnalysis';
import { KPITracking } from './KPITracking';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { AuthForm } from './AuthForm';
import { useAuth } from '../contexts/AuthContext';

export function Router() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const { user, logout } = useAuth();

  if (!user) {
    return <AuthForm />;
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'roadmap':
        return <Roadmap />;
      case 'sprint-planning':
        return <SprintPlanning />;
      case 'competitor-analysis':
        return <CompetitorAnalysis />;
      case 'kpi-tracking':
        return <KPITracking />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} onLogout={logout} />
        <main className="flex-1 overflow-y-auto">
          {renderCurrentPage()}
        </main>
      </div>
    </div>
  );
}