import React, { useState, useEffect } from 'react';
import { getUserShifts } from '../services/api';

const EmployeePanel = () => {
  const [shifts, setShifts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userId, setUserId] = useState(localStorage.getItem('userId'));

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const response = await getUserShifts(userId, token);
        setShifts(response.data);
      } catch (err) {
        alert('Error fetching shifts');
      }
    };

    fetchShifts();
  }, [userId, token]);

  return (
    <div>
      <h2>Employee Shift Panel</h2>
      <ul>
        {shifts.map((shift) => (
          <li key={shift._id}>
            {shift.date} - {shift.startTime} to {shift.endTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeePanel;
