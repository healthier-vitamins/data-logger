import Airtable from 'airtable';

function authenBase() {

  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_KEY = import.meta.env.VITE_BASE_ID;

  const base = new Airtable({ apiKey: API_KEY }).base(BASE_KEY);

  return base;
}

export default authenBase;
