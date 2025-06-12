import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import './chart.scss';

const data = [
  { name: 'Jan', teamA: 42, teamB: 50 },
  { name: 'Feb', teamA: 32, teamB: 70 },
  { name: 'Mar', teamA: 21, teamB: 47 },
  { name: 'Apr', teamA: 36, teamB: 66 },
  { name: 'May', teamA: 66, teamB: 39 },
  { name: 'Jun', teamA: 67, teamB: 36 },
  { name: 'Jul', teamA: 36, teamB: 24 },
  { name: 'Aug', teamA: 24, teamB: 69 },
  { name: 'Sep', teamA: 53, teamB: 23 },
];

function ChartComponent() {
  return (
    <div className="chart-card">
      <h3>Website visits</h3>
      <p className="subtitle">(+43%) than last year</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="teamA" fill="#3b82f6" name="Team A" />
          <Bar dataKey="teamB" fill="#facc15" name="Team B" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartComponent;
