import React, { useState } from 'react';
import { Plus, Calendar, Target, Users, Brain } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { AddFeatureModal } from './AddFeatureModal';
import { useData } from '../contexts/DataContext';

export function Roadmap() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { features, addFeature } = useData();

  const quarters = [
    { id: 'Q1', name: 'Q1 2024', features: features.filter(f => f.quarter === 'Q1') },
    { id: 'Q2', name: 'Q2 2024', features: features.filter(f => f.quarter === 'Q2') },
    { id: 'Q3', name: 'Q3 2024', features: features.filter(f => f.quarter === 'Q3') },
    { id: 'Q4', name: 'Q4 2024', features: features.filter(f => f.quarter === 'Q4') }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Product Roadmap</h1>
          <p className="text-gray-600">Plan and track feature development across quarters</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            <Brain className="w-4 h-4" />
            <span>AI Prioritize</span>
          </button>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Feature</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {quarters.map((quarter) => (
          <div key={quarter.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{quarter.name}</h3>
                <span className="text-sm text-gray-500">{quarter.features.length} features</span>
              </div>
            </div>
            <div className="p-4 space-y-3">
              {quarter.features.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} />
              ))}
              <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors">
                + Add Feature
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Roadmap Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
            <div className="text-sm text-gray-600">Total Features</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">12</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">8.5</div>
            <div className="text-sm text-gray-600">Avg. Story Points</div>
          </div>
        </div>
      </div>

      {isAddModalOpen && (
        <AddFeatureModal
          onClose={() => setIsAddModalOpen(false)}
          onAdd={addFeature}
        />
      )}
    </div>
  );
}