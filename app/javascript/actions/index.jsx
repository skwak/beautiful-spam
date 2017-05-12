import axios from 'axios';

const API_URL = `/api/spam`;
export const GET_SPAM = 'GET_SPAM';

export default function getAllSpams() {
   const request = axios.get(API_URL);
   return {
         type: GET_SPAM,
         payload: request
      };
}
