import axios from 'axios';

const API_URL = 'http://localhost:5000/api/';

export const registerUser = (data) => axios.post(`${API_URL}/auth/register`, data);

export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data);

export const getUserShifts = (userId, token) => axios.get(`${API_URL}/shifts/${userId}`, {
  headers: { 'x-auth-token': token }
});

export const addShift = (data, token) => axios.post(`${API_URL}/shifts/add`, data, {
  headers: { 'x-auth-token': token }
});
