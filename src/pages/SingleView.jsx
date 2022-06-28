import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CollatedProfitLoss from "../components/CollatedProfitLoss";
import NavBar from "../components/NavBar";
import SingleViewInfo from "../components/SingleViewInfo";
import collateRecords from "../functions/collateRecords";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_KEY = import.meta.env.VITE_BASE_ID;

function SingleView() {
  const params = useParams();

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

  if (status === "loading") return <h2 className="loading">loading</h2>;

  const filteredRecords = [];
  for (let i = 0; i < entries.length; i++) {
    if (params.date === entries.records[i]?.fields?.date) {
      filteredRecords.push(entries.records[i]);
    }
  }

  // soryt please
  for (let i = 0; i < filteredRecords.length - 1; i++) {
    for (let j = 0; j < filteredRecords.length - i - 1; j++) {
      if (
        filteredRecords[j]?.fields.time > filteredRecords[j + 1]?.fields.time
      ) {
        let temp = filteredRecords[j];
        filteredRecords[j] = filteredRecords[j + 1];
        filteredRecords[j + 1] = temp;
      }
    }
  }

  // SORTEED
  console.log(filteredRecords);
  const sortedFilteredRecords = filteredRecords;

  const FilterRecordsByDay = () => {
    const filteredRecordsArr = [];
    for (let i = 0; i < filteredRecords.length; i++) {
      filteredRecordsArr.push(
        <SingleViewInfo
          ticker={filteredRecords[i]?.fields?.ticker}
          price={filteredRecords[i]?.fields?.price}
          trade={filteredRecords[i]?.fields?.trade}
          time={filteredRecords[i]?.fields?.time}
          index={i + 1}
          key={i}
        />
      );
    }
    return filteredRecordsArr;
  };

  const inputs = collateRecords(sortedFilteredRecords)
  console.log("inputs: ", inputs)

  return (
    <>
      <NavBar />
      <FilterRecordsByDay />
      
    </>
  );
}
export default SingleView;
