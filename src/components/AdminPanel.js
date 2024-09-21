import React, { useState, useEffect } from 'react';
import { addShift, registerUser } from '../services/api';

const AdminPanel = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employee');
  const [shiftDate, setShiftDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));

  // Register a new employee
  const handleRegister = async () => {
    try {
      const userData = { name, email, password, role };
      await registerUser(userData);
      alert('User registered successfully');
    } catch (err) {
      alert('Registration failed');
    }
  };

  // Add Shift for employee
  const handleAddShift = async () => {
    try {
      const shiftData = { user: userId, date: shiftDate, startTime, endTime };
      await addShift(shiftData, token);
      alert('Shift added successfully');
    } catch (err) {
      alert('Adding shift failed');
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      <div>
        <h3>Register Employee</h3>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleRegister}>Register Employee</button>
      </div>

      <div>
        <h3>Add Shift</h3>
        <input type="text" placeholder="Employee ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <input type="date" value={shiftDate} onChange={(e) => setShiftDate(e.target.value)} />
        <input type="text" placeholder="Start Time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        <input type="text" placeholder="End Time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        <button onClick={handleAddShift}>Add Shift</button>
      </div>
    </div>
  );
};

export default AdminPanel;
