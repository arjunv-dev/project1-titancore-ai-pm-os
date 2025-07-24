import React from 'react';
import { Calendar, User, Target, Brain } from 'lucide-react';

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
}

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'planned': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${getPriorityColor(feature.priority)}`} />
          <h4 className="font-medium text-gray-900 text-sm">{feature.title}</h4>
        </div>
        <div className="flex items-center space-x-1">
          <Brain className="w-3 h-3 text-purple-600" />
          <span className="text-xs text-purple-600">{feature.aiScore}</span>
        </div>
      </div>
      
      <p className="text-xs text-gray-600 mb-3 line-clamp-2">{feature.description}</p>
      
      <div className="flex items-center justify-between">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(feature.status)}`}>
          {feature.status.replace('-', ' ')}
        </span>
        <div className="flex items-center space-x-2">
          <Target className="w-3 h-3 text-gray-400" />
          <span className="text-xs text-gray-500">{feature.storyPoints}pt</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center space-x-1">
          <User className="w-3 h-3 text-gray-400" />
          <span className="text-xs text-gray-500">{feature.assignee}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Calendar className="w-3 h-3 text-gray-400" />
          <span className="text-xs text-gray-500">{feature.quarter}</span>
        </div>
      </div>
    </div>
  );
}