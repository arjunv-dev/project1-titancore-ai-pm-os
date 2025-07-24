import React, { useState } from 'react';
import { TrendingUp, Eye, AlertCircle, CheckCircle, Plus, Brain, Search } from 'lucide-react';

export function CompetitorAnalysis() {
  const [selectedCompetitor, setSelectedCompetitor] = useState('competitor1');

  const competitors = [
    {
      id: 'competitor1',
      name: 'CompetitorA',
      marketShare: 32,
      rating: 4.2,
      features: 156,
      lastUpdate: '2 days ago',
      trend: 'up',
      color: 'red'
    },
    {
      id: 'competitor2',
      name: 'CompetitorB',
      marketShare: 28,
      rating: 4.0,
      features: 134,
      lastUpdate: '1 week ago',
      trend: 'down',
      color: 'orange'
    },
    {
      id: 'competitor3',
      name: 'CompetitorC',
      marketShare: 18,
      rating: 3.8,
      features: 98,
      lastUpdate: '3 days ago',
      trend: 'up',
      color: 'blue'
    }
  ];

  const selectedComp = competitors.find(c => c.id === selectedCompetitor);

  const insights = [
    {
      type: 'opportunity',
      title: 'Mobile Feature Gap',
      description: 'CompetitorA lacks advanced mobile analytics. Window of opportunity: 4-6 months.',
      impact: 'High',
      confidence: 94
    },
    {
      type: 'threat',
      title: 'AI Integration Acceleration',
      description: 'CompetitorB is rapidly adding AI features. They launched 3 new AI tools this quarter.',
      impact: 'Medium',
      confidence: 87
    },
    {
      type: 'trend',
      title: 'User Experience Focus',
      description: 'All competitors are investing heavily in UX improvements. Average rating increased by 0.3.',
      impact: 'High',
      confidence: 91
    }
  ];

  const featureComparison = [
    { feature: 'AI-Powered Analytics', us: true, compA: false, compB: true, compC: false },
    { feature: 'Mobile App', us: true, compA: true, compB: true, compC: false },
    { feature: 'Real-time Collaboration', us: true, compA: true, compB: false, compC: true },
    { feature: 'API Integration', us: true, compA: true, compB: true, compC: true },
    { feature: 'Advanced Reporting', us: true, compA: false, compB: true, compC: false },
    { feature: 'Multi-language Support', us: false, compA: true, compB: true, compC: false }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Competitor Analysis</h1>
          <p className="text-gray-600">AI-powered competitive intelligence and market insights</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            <Brain className="w-4 h-4" />
            <span>AI Analysis</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add Competitor</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {competitors.map((competitor) => (
          <div
            key={competitor.id}
            onClick={() => setSelectedCompetitor(competitor.id)}
            className={`bg-white rounded-lg shadow-sm border-2 cursor-pointer transition-all ${
              selectedCompetitor === competitor.id
                ? 'border-blue-500 shadow-md'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{competitor.name}</h3>
                <div className={`w-3 h-3 rounded-full ${
                  competitor.trend === 'up' ? 'bg-green-500' : 'bg-red-500'
                }`} />
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Market Share</span>
                    <span className="text-sm font-medium">{competitor.marketShare}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-${competitor.color}-500`}
                      style={{ width: `${competitor.marketShare}%` }}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600">Rating</div>
                    <div className="text-lg font-semibold text-gray-900">{competitor.rating}/5</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Features</div>
                    <div className="text-lg font-semibold text-gray-900">{competitor.features}</div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500">
                  Last updated: {competitor.lastUpdate}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Feature Comparison</h3>
          <div className="space-y-3">
            {featureComparison.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">{item.feature}</span>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-gray-500">Us</span>
                    {item.us ? <CheckCircle className="w-4 h-4 text-green-500" /> : <div className="w-4 h-4 rounded-full bg-gray-300" />}
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-gray-500">A</span>
                    {item.compA ? <CheckCircle className="w-4 h-4 text-green-500" /> : <div className="w-4 h-4 rounded-full bg-gray-300" />}
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-gray-500">B</span>
                    {item.compB ? <CheckCircle className="w-4 h-4 text-green-500" /> : <div className="w-4 h-4 rounded-full bg-gray-300" />}
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-gray-500">C</span>
                    {item.compC ? <CheckCircle className="w-4 h-4 text-green-500" /> : <div className="w-4 h-4 rounded-full bg-gray-300" />}
                  </div>
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
                    insight.type === 'opportunity' ? 'bg-green-100 text-green-600' :
                    insight.type === 'threat' ? 'bg-red-100 text-red-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {insight.type === 'opportunity' ? <TrendingUp className="w-4 h-4" /> :
                     insight.type === 'threat' ? <AlertCircle className="w-4 h-4" /> :
                     <Eye className="w-4 h-4" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">{insight.title}</h4>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          insight.impact === 'High' ? 'bg-red-100 text-red-800' :
                          insight.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {insight.impact}
                        </span>
                        <span className="text-xs text-gray-500">{insight.confidence}%</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Trends</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">+15%</div>
            <div className="text-sm text-gray-600">Market Growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">42%</div>
            <div className="text-sm text-gray-600">AI Feature Adoption</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">3.2x</div>
            <div className="text-sm text-gray-600">Mobile Usage Growth</div>
          </div>
        </div>
      </div>
    </div>
  );
}