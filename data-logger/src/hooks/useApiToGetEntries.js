import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_KEY = import.meta.env.VITE_BASE_ID;

function useApiToGetEntries(createdNewRecord) {

  const [entries, setEntries] = useState([])

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${BASE_KEY}/Trade%20Activity?api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setEntries(data));
  }, [createdNewRecord]);

  return entries;
}

export default useApiToGetEntries;
