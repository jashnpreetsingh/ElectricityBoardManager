import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchApplications } from '../features/applicationSlice';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Applications Tracker',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1,
      },
    },
  },
};

const ApplicationTracker = () => {
    const [status, setStatus] = useState('All'); // default status
    const [year, setYear] = useState(new Date().getFullYear()); // default year is current year
    const dispatch = useDispatch();
    // fetch applications from Redux store
    useEffect(() => {
      dispatch(fetchApplications());
    }, [dispatch]);
  
    const applications = useSelector(state => state.applications.entities); // access applications from Redux store
  
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const data = {
      labels,
      datasets: [
        {
            // filter applications by status and year, then reduce to get the number of applications for each month
          label: 'Number of Applications',
          data: applications.filter((data) => (status === 'All' || data.Status === status) && new Date(data.Date_of_Application).getFullYear() === year)
            .reduce((acc, curr) => {
              const month = new Date(curr.Date_of_Application).getMonth();
              acc[month]++;
              return acc;
            }, new Array(12).fill(0)),
          backgroundColor: 'rgba(25, 38, 145, 0.5)',
        },
      ],
    };
  
    const toggleStatus = (newStatus) => {
      setStatus(newStatus);
    };
    // return the chart with the dropdowns and buttons
    return (
      <div className='container'>
        <select className="btn btn-dark mt-2 mr-2" value={year} onChange={(e) => setYear(Number(e.target.value))}>
          {[2022,2023,2024].map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <button className="btn btn-dark mt-2 mr-2" onClick={() => toggleStatus('All')}>All</button>
        <button className="btn btn-dark mt-2 mr-2" onClick={() => toggleStatus('Approved')}>Approved</button>
        <button className="btn btn-dark mt-2 mr-2" onClick={() => toggleStatus('Pending')}>Pending</button>
        <button className="btn btn-dark mt-2" onClick={() => toggleStatus('Rejected')}>Rejected</button>
        <Bar options={options} data={data} />
      </div>
    );
  };
  export default ApplicationTracker;