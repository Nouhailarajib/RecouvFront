
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface RelancesAgingChartProps {
  data: {
    name: string;
    value: number;
  }[];
}

const RelancesAgingChart = ({ data }: RelancesAgingChartProps) => {
  return (
    <Card className="col-span-2 h-[350px]">
      <CardHeader>
        <CardTitle>Vieillissement des créances en retard</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value: number) => [`${value} €`, 'Montant']} />
            <Legend />
            <Bar dataKey="value" fill="#3182CE" name="Montant" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RelancesAgingChart;
