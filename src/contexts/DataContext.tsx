import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Feature {
  id: string;
  title: string;
  description: string;
  status: 'planned' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  assignee: string;
  storyPoints: number;
  aiScore: number;
  quarter: string;
  sprintId?: string;
}

interface Sprint {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: 'planning' | 'active' | 'completed';
  capacity: number;
}

interface KPI {
  id: string;
  name: string;
  value: number;
  target: number;
  unit: string;
  category: string;
}

interface DataContextType {
  features: Feature[];
  sprints: Sprint[];
  kpis: KPI[];
  addFeature: (feature: Feature) => void;
  updateFeature: (id: string, updates: Partial<Feature>) => void;
  deleteFeature: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [features, setFeatures] = useState<Feature[]>([
    {
      id: '1',
      title: 'Social Media Login',
      description: 'Enable users to sign in with Google, Facebook, and Twitter',
      status: 'in-progress',
      priority: 'high',
      assignee: 'Sarah Chen',
      storyPoints: 8,
      aiScore: 92,
      quarter: 'Q1',
      sprintId: 'sprint-1'
    },
    {
      id: '2',
      title: 'Push Notifications',
      description: 'Send real-time notifications to mobile and web users',
      status: 'planned',
      priority: 'medium',
      assignee: 'Mike Johnson',
      storyPoints: 5,
      aiScore: 87,
      quarter: 'Q1'
    },
    {
      id: '3',
      title: 'Advanced Analytics Dashboard',
      description: 'Comprehensive analytics with custom reporting',
      status: 'planned',
      priority: 'high',
      assignee: 'Emily Rodriguez',
      storyPoints: 13,
      aiScore: 95,
      quarter: 'Q2'
    },
    {
      id: '4',
      title: 'Mobile App v2.0',
      description: 'Complete redesign of mobile application',
      status: 'planned',
      priority: 'high',
      assignee: 'David Kim',
      storyPoints: 21,
      aiScore: 89,
      quarter: 'Q2'
    },
    {
      id: '5',
      title: 'API Rate Limiting',
      description: 'Implement rate limiting for API endpoints',
      status: 'completed',
      priority: 'medium',
      assignee: 'Alex Thompson',
      storyPoints: 3,
      aiScore: 78,
      quarter: 'Q1'
    },
    {
      id: '6',
      title: 'Dark Mode Support',
      description: 'Add dark mode theme across all interfaces',
      status: 'in-progress',
      priority: 'low',
      assignee: 'Jessica Wang',
      storyPoints: 8,
      aiScore: 71,
      quarter: 'Q3',
      sprintId: 'sprint-1'
    }
  ]);

  const [sprints, setSprints] = useState<Sprint[]>([
    {
      id: 'sprint-1',
      name: 'Sprint 24',
      startDate: '2024-01-15',
      endDate: '2024-01-29',
      status: 'active',
      capacity: 40
    },
    {
      id: 'sprint-2',
      name: 'Sprint 25',
      startDate: '2024-01-30',
      endDate: '2024-02-12',
      status: 'planning',
      capacity: 42
    },
    {
      id: 'sprint-3',
      name: 'Sprint 26',
      startDate: '2024-02-13',
      endDate: '2024-02-26',
      status: 'planning',
      capacity: 38
    }
  ]);

  const [kpis, setKpis] = useState<KPI[]>([
    {
      id: '1',
      name: 'Monthly Active Users',
      value: 24567,
      target: 25000,
      unit: 'users',
      category: 'Growth'
    },
    {
      id: '2',
      name: 'Feature Adoption Rate',
      value: 67,
      target: 70,
      unit: '%',
      category: 'Product'
    },
    {
      id: '3',
      name: 'Customer Satisfaction',
      value: 4.8,
      target: 4.9,
      unit: '/5',
      category: 'Quality'
    }
  ]);

  const addFeature = (feature: Feature) => {
    setFeatures(prev => [...prev, feature]);
  };

  const updateFeature = (id: string, updates: Partial<Feature>) => {
    setFeatures(prev => prev.map(f => f.id === id ? { ...f, ...updates } : f));
  };

  const deleteFeature = (id: string) => {
    setFeatures(prev => prev.filter(f => f.id !== id));
  };

  return (
    <DataContext.Provider value={{
      features,
      sprints,
      kpis,
      addFeature,
      updateFeature,
      deleteFeature
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}