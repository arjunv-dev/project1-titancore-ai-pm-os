import React, { useState } from 'react';
import { Plus, Calendar, Target, Users, Brain, Clock, ArrowRight } from 'lucide-react';
import { useData } from '../contexts/DataContext';

export function SprintPlanning() {
  const { features, sprints } = useData();
  const [selectedSprint, setSelectedSprint] = useState(sprints[0]);

  const sprintFeatures = features.filter(f => f.sprintId === selectedSprint?.id);
  const backlogFeatures = features.filter(f => !f.sprintId);

  const totalPoints = sprintFeatures.reduce((sum, f) => sum + f.storyPoints, 0);
  const sprintCapacity = selectedSprint?.capacity || 40;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sprint Planning</h1>
          <p className="text-gray-600">Plan and manage development sprints with AI-powered insights</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            <Brain className="w-4 h-4" />
            <span>AI Suggest</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>New Sprint</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Sprint Selection</h3>
          <div className="space-y-2">
            {sprints.map((sprint) => (
              <button
                key={sprint.id}
                onClick={() => setSelectedSprint(sprint)}
                className={`w-full text-left p-3 rounded-lg border transition-colors ${
                  selectedSprint?.id === sprint.id
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="font-medium">{sprint.name}</div>
                <div className="text-sm text-gray-500">{sprint.startDate} - {sprint.endDate}</div>
                <div className="text-xs mt-1">
                  <span className={`px-2 py-1 rounded-full ${
                    sprint.status === 'active' ? 'bg-green-100 text-green-800' :
                    sprint.status === 'planning' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {sprint.status}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">{selectedSprint?.name || 'Select a Sprint'}</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{totalPoints}/{sprintCapacity} pts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{selectedSprint?.startDate}</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Sprint Capacity</span>
                <span className="text-sm font-medium text-gray-900">{Math.round((totalPoints / sprintCapacity) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    totalPoints > sprintCapacity ? 'bg-red-500' : 
                    totalPoints > sprintCapacity * 0.8 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${Math.min((totalPoints / sprintCapacity) * 100, 100)}%` }}
                />
              </div>
            </div>

            <div className="space-y-3">
              {sprintFeatures.map((feature) => (
                <div key={feature.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      feature.priority === 'high' ? 'bg-red-500' : 
                      feature.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`} />
                    <span className="font-medium text-gray-900">{feature.title}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">{feature.storyPoints} pts</span>
                    <span className="text-sm text-gray-500">{feature.assignee}</span>
                    <button className="text-red-600 hover:text-red-800 text-sm">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Backlog</h3>
            <div className="space-y-3">
              {backlogFeatures.slice(0, 8).map((feature) => (
                <div key={feature.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      feature.priority === 'high' ? 'bg-red-500' : 
                      feature.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`} />
                    <div>
                      <span className="font-medium text-gray-900">{feature.title}</span>
                      <div className="text-sm text-gray-500">{feature.description}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Brain className="w-3 h-3 text-purple-600" />
                      <span className="text-sm text-purple-600">{feature.aiScore}</span>
                    </div>
                    <span className="text-sm text-gray-500">{feature.storyPoints} pts</span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm">Add</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">AI Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center space-x-2 mb-2">
              <Brain className="w-4 h-4 text-purple-600" />
              <span className="font-medium text-purple-900">Optimal Sprint Composition</span>
            </div>
            <p className="text-sm text-purple-700">
              Based on team velocity and feature dependencies, consider adding "User Profile API" 
              and "Mobile Push Notifications" to maximize sprint value.
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-2 mb-2">
              <Target className="w-4 h-4 text-blue-600" />
              <span className="font-medium text-blue-900">Capacity Warning</span>
            </div>
            <p className="text-sm text-blue-700">
              Current sprint is at {Math.round((totalPoints / sprintCapacity) * 100)}% capacity. 
              Consider redistributing high-complexity features to maintain quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}