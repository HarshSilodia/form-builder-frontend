import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'https://form-builder-backend-ve0n.onrender.com',
});

// Save form data
export const saveForm = (formData) => API.post('/api/forms', formData);

// Get form data by ID
export const getFormById = (formId) => API.get(`/api/forms/${formId}`);
