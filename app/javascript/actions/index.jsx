import axios from 'axios';

const SPAM_API_URL = `/api/spam`;
const CATEGORIES_API_URL = `/api/categories`;

export const GET_SPAM = 'GET_SPAM';
export const GET_CATEGORIES = 'GET_CATEGORIES';

export const getSpam = () => {
  const request = axios.get(SPAM_API_URL);
  return {
    type: GET_SPAM,
    payload: request
  };
}

export const getSpamByCategory = (category) => {
  const request = axios.get(`${SPAM_API_URL}?category={category}`);
  return {
    type: GET_SPAM_BY_CATEGORY,
    payload: request,
    display: true
  };
}

export const getCategories = () => {
  const request = axios.get(CATEGORIES_API_URL);
  return {
    type: GET_CATEGORIES,
    payload: request
  };
}

export default {
  getSpam,
  getCategories
};
