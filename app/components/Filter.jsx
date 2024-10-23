// app/components/Filter.jsx
'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Filter() {
  const [launchSuccess, setLaunchSuccess] = useState('');
  const [landSuccess, setLandSuccess] = useState('');
  const [launchYear, setLaunchYear] = useState('');
  
  const router = useRouter();

  const handleFilterChange = () => {
    const params = new URLSearchParams();

    if (launchSuccess !== '') {
      params.append('launch_success', launchSuccess);
    }
    if (landSuccess !== '') {
      params.append('land_success', landSuccess);
    }
    if (launchYear !== '') {
      params.append('launch_year', launchYear);
    }

    router.push('/?' + params.toString());
  };

  return (
    <div className="filter-container p-4 bg-gray-100 rounded-lg mb-4">
      <h2 className="text-lg font-semibold mb-4">Filter Launches</h2>
      
      <div className="mb-4">
        <label className="block mb-2">Launch Success</label>
        <select
          value={launchSuccess}
          onChange={(e) => setLaunchSuccess(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg w-full"
        >
          <option value="">Any</option>
          <option value="true">Successful</option>
          <option value="false">Failed</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Land Success</label>
        <select
          value={landSuccess}
          onChange={(e) => setLandSuccess(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg w-full"
        >
          <option value="">Any</option>
          <option value="true">Successful</option>
          <option value="false">Failed</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Launch Year</label>
        <input
          type="number"
          value={launchYear}
          onChange={(e) => setLaunchYear(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg w-full"
          placeholder="e.g., 2020"
        />
      </div>

      <button
        onClick={handleFilterChange}
        className="bg-blue-500 text-white p-2 rounded-lg w-full"
      >
        Apply Filters
      </button>
    </div>
  );
}
