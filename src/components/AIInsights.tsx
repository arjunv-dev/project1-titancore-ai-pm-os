import React from 'react';
import { Brain, TrendingUp, AlertTriangle, CheckCircle, Target } from 'lucide-react';

export function AIInsights() {
  const insights = [
    {
      type: 'success',
      icon: CheckCircle,
      title: 'Feature Velocity Improved',
      description: 'Your team delivered 15% more features this quarter compared to last.',
      confidence: 94
    },
    {
      type: 'warning',
      icon: AlertTriangle,
      title: 'Resource Allocation Alert',
      description: 'Backend development is becoming a bottleneck. Consider reallocating resources.',
      confidence: 87
    },
    {
      type: 'info',
      icon: Target,
      title: 'Market Opportunity',
      description: 'Competitors are lagging in mobile features. This presents a 6-month window.',
      confidence: 91
    },
    {
      type: 'trend',
      icon: TrendingUp,
      title: 'User Engagement Pattern',
      description: 'Users engage 40% more with features released on Tuesdays.',
      confidence: 76
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'info': return 'text-blue-600';
      case 'trend': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case 'success': return 'bg-green-50';
      case 'warning': return 'bg-yellow-50';
      case 'info': return 'bg-blue-50';
      case 'trend': return 'bg-purple-50';
      default: return 'bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Brain className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">AI Insights</h3>
      </div>
      
      <div className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div 
              key={index}
              className={`p-4 rounded-lg border ${getBackgroundColor(insight.type)} border-gray-200`}
            >
              <div className="flex items-start space-x-3">
                <Icon className={`w-5 h-5 mt-0.5 ${getIconColor(insight.type)}`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">{insight.title}</h4>
                    <span className="text-xs text-gray-500">{insight.confidence}% confident</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>AI Recommendation:</strong> Focus on mobile feature development and optimize your Tuesday release schedule for maximum impact.
        </p>
      </div>
    </div>
  );
}