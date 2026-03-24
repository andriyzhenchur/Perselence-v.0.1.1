import { API_ENDPOINTS } from '../constants/index.js';

export const submitForm = async (formData) => {
  try {
    const response = await fetch(API_ENDPOINTS.FORM, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' }
    });
    return response.ok;
  } catch (error) {
    console.error('Form submission error:', error);
    return false;
  }
};