"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  scales,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);


const LineChart = ({counts}:{counts:any}) => {

    const businessDates = [];
    const businessCounts = [];
   

    for(const key in counts) {
        if(counts.hasOwnProperty(key)) {
            var value = counts[key];
            businessDates.push(key);
            businessCounts.push(value);
        }
    }

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
    };
      
    const labels = businessDates;
    
    const data = {
        labels,
        datasets: [
          {
            label: 'Businesses',
            data: businessCounts,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
    };


    
    
    return (
      <div className="w-full sm:w-auto">
        <div className='text-center text-xl mb-3'>Business Statistics</div>
        <Line width={600} height={450} className='border-[1px] border-gray-200 py-4'
          options={options} data={data}
        />
      </div>
    );
  };
  export default LineChart;