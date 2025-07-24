import React from 'react';
import { Clock, User, GitBranch, MessageSquare, Target } from 'lucide-react';

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: 'feature',
      icon: Target,
      title: 'Feature "Social Login" moved to In Progress',
      user: 'Sarah Chen',
      time: '2 hours ago',
      color: 'blue'
    },
    {
      id: 2,
      type: 'comment',
      icon: MessageSquare,
      title: 'New comment on "Payment Integration" feature',
      user: 'Mike Johnson',
      time: '4 hours ago',
      color: 'green'
    },
    {
      id: 3,
      type: 'sprint',
      icon: GitBranch,
      title: 'Sprint 23 completed with 95% velocity',
      user: 'System',
      time: '1 day ago',
      color: 'purple'
    },
    {
      id: 4,
      type: 'user',
      icon: User,
      title: 'Alex Rodriguez joined the product team',
      user: 'HR System',
      time: '2 days ago',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getColorClasses(activity.color)}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-gray-500">{activity.user}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-800 transition-colors">
        View all activity
      </button>
    </div>
  );
}