import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChartExample = () => {
  const data = {
    labels: ['Anu', 'Manu', 'Vinu', 'Rajesh','Priya'],
    datasets: [
      {
        label: 'Time',
        data: [100, 150, 200, 250, 300, 350],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales Performance',
      },
    },
  };

  return (
    <div>
      <h2 className='text-center'>Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartExample;