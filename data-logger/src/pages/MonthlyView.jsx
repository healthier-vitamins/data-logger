import { Link } from "react-router-dom";
// import Calendar from "../components/Calendar";
import Home from "./Home";
import months from "../data/months";
import { useEffect, useState } from "react";
import NewCalendar from "../components/NewCalendar";
// import useApiToGetEntries from "../hooks/useApiToGetEntries";

// selected month - 1
const MONTH = 0;

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_KEY = import.meta.env.VITE_BASE_ID;

function MonthlyView({ createdNewRecord }) {
  const [entries, setEntries] = useState({
    records: [],
    length: 0
  });

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${BASE_KEY}/Trade%20Activity?api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setEntries({
        ...entries,
        records: data.records,
        length: data.records.length
      }));
      // console.log("it works i know it worls", data)
  }, []);
  const PassEntries = () => {
    const resultArr = [];
    for (let i = 0; i < months[MONTH].length; i++) {
      const monthDay = months[MONTH][i].slice(5);

      resultArr.push(
        <NewCalendar
          entries={entries.records}
          entrieslength={entries.length}
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
      <Link to="/" element={<Home />}>
        Home
      </Link>

      {/* {months[0].map((date, index) => {
        const monthDay = date.slice(5);

        return (
          <Calendar
            monthDay={monthDay}
            date={date}
            key={index}
            // ticker={}
            // price={}
            // trade={}
          />
        );
      })} */}
      <PassEntries />
    </>
  );
}

export default MonthlyView;
