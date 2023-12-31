"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({userAdmin, userSuperAdmin}:{userAdmin:number, userSuperAdmin:number}) => {

    const data = {
      labels: ['Admin', 'Super Admin'],
      datasets: [
        {
          label: '# of users',
          data: [userAdmin, userSuperAdmin],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    
    return (
      <div className='w-full sm:w-auto'>
        <div className='text-center text-xl mb-3'>User Statistics</div>
        <Pie width={600} height={250} className='border-[1px] border-gray-200 py-4'
          data={data}
        />
      </div>
    );
  };
  export default PieChart;