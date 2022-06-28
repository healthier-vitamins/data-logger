import months from "../data/months";
import { useEffect, useState } from "react";
import Calendar from "../components/Calendar";
import NavBar from "../components/NavBar";

// selected month - 1
const MONTH = 0;

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_KEY = import.meta.env.VITE_BASE_ID;

function MonthlyView() {
  const [entries, setEntries] = useState({
    records: [],
    length: 0,
  });

  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${BASE_KEY}/Trade%20Activity?api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setEntries({
          ...entries,
          records: data.records,
          length: data.records.length,
        });
        setStatus("done");
      });
    // console.log("it works i know it worls", data)
  }, []);

  if (status === "loading")
    return <h2 className="loading">loading</h2>


  const PassEntries = () => {
    const resultArr = [];
    for (let i = 0; i < months[MONTH].length; i++) {
      const monthDay = months[MONTH][i].slice(5);

      resultArr.push(
        <Calendar
          entries={entries.records}
          entriesLength={entries.length}
          date={months[MONTH][i]}
          monthDay={monthDay}
          key={i}
        />
      );
    }
    return resultArr;
  };

  // THIS IS THE MAIN
  //   console.log("entries: ", entries?.records?.[0]?.fields);
  //

  return (
    <>
      <NavBar />
      <div className="calendar-container">
        <PassEntries />
      </div>
    </>
  );
}

export default MonthlyView;
