import React from 'react';
import { TrendingUp, Target, Calendar, Users, ArrowUp, ArrowDown, Brain } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { Chart } from './Chart';
import { AIInsights } from './AIInsights';
import { RecentActivity } from './RecentActivity';
import { useData } from '../contexts/DataContext';

export function Dashboard() {
  const { kpis, features, sprints } = useData();

  const metrics = [
    {
      title: 'Active Features',
      value: features.filter(f => f.status === 'in-progress').length,
      change: '+12%',
      trend: 'up',
      icon: Target,
      color: 'blue'
    },
    {
      title: 'Sprint Velocity',
      value: '42 pts',
      change: '+8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'User Satisfaction',
      value: '4.8/5',
      change: '+0.2',
      trend: 'up',
      icon: Users,
      color: 'purple'
    },
    {
      title: 'Time to Market',
      value: '14 days',
      change: '-3 days',
      trend: 'down',
      icon: Calendar,
      color: 'orange'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Product Dashboard</h1>
          <p className="text-gray-600">AI-powered insights for your product strategy</p>
        </div>
        <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg">
          <Brain className="w-4 h-4" />
          <span className="text-sm font-medium">AI Analysis Running</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart 
          title="Feature Delivery Timeline"
          data={[
            { month: 'Jan', delivered: 12, planned: 15 },
            { month: 'Feb', delivered: 19, planned: 18 },
            { month: 'Mar', delivered: 15, planned: 20 },
            { month: 'Apr', delivered: 22, planned: 25 },
            { month: 'May', delivered: 28, planned: 30 },
            { month: 'Jun', delivered: 25, planned: 28 }
          ]}
        />
        <AIInsights />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Priorities</h3>
          <div className="space-y-3">
            {features.slice(0, 5).map((feature, index) => (
              <div key={feature.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    feature.priority === 'high' ? 'bg-red-500' : 
                    feature.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`} />
                  <span className="font-medium text-gray-900">{feature.title}</span>
                </div>
                <span className="text-sm text-gray-500">Score: {feature.aiScore}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}