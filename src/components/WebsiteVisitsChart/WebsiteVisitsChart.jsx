import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", TeamA: 42, TeamB: 50 },
  { name: "Feb", TeamA: 32, TeamB: 70 },
  { name: "Mar", TeamA: 20, TeamB: 48 },
  { name: "Apr", TeamA: 35, TeamB: 65 },
  { name: "May", TeamA: 65, TeamB: 40 },
  { name: "Jun", TeamA: 66, TeamB: 38 },
  { name: "Jul", TeamA: 39, TeamB: 22 },
  { name: "Aug", TeamA: 25, TeamB: 69 },
  { name: "Sep", TeamA: 51, TeamB: 22 }
];

const WebsiteVisitsChart = () => {
  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: "16px",
      padding: "20px",
      boxShadow: "0 0 12px rgba(0,0,0,0.05)",
      maxWidth: 900,
      margin: "40px auto"
    }}>
      <h2 style={{ marginBottom: 0 }}>Website visits</h2>
      <p style={{ color: "gray", marginTop: "4px", marginBottom: "20px" }}>
        (+43%) than last year
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" iconType="circle" />
          <Bar dataKey="TeamA" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="TeamB" fill="#facc15" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WebsiteVisitsChart;
