import React, { useState } from 'react';
import { TrendingUp, Target, Users, Calendar, ArrowUp, ArrowDown, Plus, Brain } from 'lucide-react';

export function KPITracking() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');

  const kpis = [
    {
      id: 1,
      name: 'Monthly Active Users',
      value: '24,567',
      change: '+12.3%',
      trend: 'up',
      target: '25,000',
      progress: 98,
      category: 'Growth'
    },
    {
      id: 2,
      name: 'Feature Adoption Rate',
      value: '67%',
      change: '+5.2%',
      trend: 'up',
      target: '70%',
      progress: 95,
      category: 'Product'
    },
    {
      id: 3,
      name: 'Customer Satisfaction',
      value: '4.8/5',
      change: '+0.1',
      trend: 'up',
      target: '4.9',
      progress: 98,
      category: 'Quality'
    },
    {
      id: 4,
      name: 'Sprint Velocity',
      value: '42 pts',
      change: '-3.2%',
      trend: 'down',
      target: '45 pts',
      progress: 93,
      category: 'Delivery'
    },
    {
      id: 5,
      name: 'Bug Fix Rate',
      value: '2.1 days',
      change: '-0.5 days',
      trend: 'up',
      target: '2.0 days',
      progress: 95,
      category: 'Quality'
    },
    {
      id: 6,
      name: 'Revenue Growth',
      value: '$142K',
      change: '+8.7%',
      trend: 'up',
      target: '$150K',
      progress: 95,
      category: 'Business'
    }
  ];

  const categories = ['All', 'Growth', 'Product', 'Quality', 'Delivery', 'Business'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredKPIs = selectedCategory === 'All' 
    ? kpis 
    : kpis.filter(kpi => kpi.category === selectedCategory);

  const insights = [
    {
      type: 'success',
      title: 'MAU Target Nearly Reached',
      description: 'Monthly Active Users are at 98% of target. Expected to reach goal by month-end.',
      kpi: 'Monthly Active Users'
    },
    {
      type: 'warning',
      title: 'Sprint Velocity Declining',
      description: 'Sprint velocity has decreased by 3.2%. Consider investigating team capacity.',
      kpi: 'Sprint Velocity'
    },
    {
      type: 'info',
      title: 'Customer Satisfaction Stable',
      description: 'Customer satisfaction remains consistently high across all product areas.',
      kpi: 'Customer Satisfaction'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">KPI Tracking</h1>
          <p className="text-gray-600">Monitor key performance indicators with AI-powered insights</p>
        </div>
        <div className="flex items-center space-x-3">
          <select 
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            <Brain className="w-4 h-4" />
            <span>AI Insights</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add KPI</span>
          </button>
        </div>
      </div>

      <div className="flex space-x-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredKPIs.map((kpi) => (
          <div key={kpi.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-600">{kpi.category}</span>
              </div>
              <div className={`flex items-center space-x-1 text-sm ${
                kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {kpi.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                <span>{kpi.change}</span>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-600 mb-1">{kpi.name}</h3>
              <div className="flex items-baseline space-x-2">
                <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                <span className="text-sm text-gray-500">/ {kpi.target}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Progress to Target</span>
                <span className="text-sm font-medium text-gray-900">{kpi.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    kpi.progress >= 95 ? 'bg-green-500' : 
                    kpi.progress >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${kpi.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trends</h3>
          <div className="space-y-4">
            {[
              { metric: 'User Growth', value: '+15%', period: 'vs last month' },
              { metric: 'Feature Usage', value: '+8%', period: 'vs last month' },
              { metric: 'Customer Satisfaction', value: '+2%', period: 'vs last quarter' },
              { metric: 'Development Velocity', value: '-3%', period: 'vs last sprint' }
            ].map((trend, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">{trend.metric}</div>
                  <div className="text-sm text-gray-500">{trend.period}</div>
                </div>
                <div className={`text-lg font-semibold ${
                  trend.value.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {trend.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Insights</h3>
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div key={index} className="p-4 rounded-lg border border-gray-200">
                <div className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    insight.type === 'success' ? 'bg-green-100 text-green-600' :
                    insight.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {insight.type === 'success' ? <TrendingUp className="w-4 h-4" /> :
                     insight.type === 'warning' ? <Target className="w-4 h-4" /> :
                     <Users className="w-4 h-4" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{insight.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                    <div className="text-xs text-gray-500 mt-2">Related KPI: {insight.kpi}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Goal Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">5</div>
            <div className="text-sm text-gray-600">On Track</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">1</div>
            <div className="text-sm text-gray-600">At Risk</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">0</div>
            <div className="text-sm text-gray-600">Off Track</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Avg. Progress</div>
          </div>
        </div>
      </div>
    </div>
  );
}