import React from 'react';

interface ChartProps {
  title: string;
  data: Array<{
    month: string;
    delivered: number;
    planned: number;
  }>;
}

export function Chart({ title, data }: ChartProps) {
  const maxValue = Math.max(...data.map(d => Math.max(d.delivered, d.planned)));

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-12 text-sm text-gray-600">{item.month}</div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(item.delivered / maxValue) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-8">{item.delivered}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gray-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(item.planned / maxValue) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-8">{item.planned}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full" />
          <span className="text-gray-600">Delivered</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full" />
          <span className="text-gray-600">Planned</span>
        </div>
      </div>
    </div>
  );
}