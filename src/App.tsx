import React, { useState } from 'react';
import { Router } from './components/Router';
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import { NotificationProvider } from './contexts/NotificationContext';

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <NotificationProvider>
          <div className="min-h-screen bg-gray-50">
            <Router />
          </div>
        </NotificationProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;