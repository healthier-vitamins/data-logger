
import { useState } from "react";
import Entry from "./Entry";

function Calendar({ date, monthDay, entries}) {

  const [values, setValues] = useState({
    ticker: ""
  })

console.log("entrires: ", entries)
console.log("dates prop: ", date)
 

  // for (let i = 0; i < entries?.records.length; i++) {
  //   if (entries?.records?.[i]?.fields.date === date) {
  //     setValues({
  //       ticker: entries?.records?.[i]?.fields?.ticker
  //     }) 
  //     console.log("assigned ticker:", values.ticker);
  //   } 
  //   else {
  //     setValues({
  //       ticker: ""
  //     }) 
  //   }
  // }



  // console.log("daet: ", entries?.records?.[1]?.fields.date);

  return (
    <section className={date}>
      <div>{monthDay}</div>
{/* 
      {entries?.records?.forEach(element => {
        if (element?.fields?.date === date) {
          setValues({
            ...values,
            ticker: element?.fields?.ticker
          })
        }
        else {
          setValues({
            ...values,
            ticker: ""
          })
        }
      })} */}


      <Entry
        // ticker={values.ticker}
        // trade={trade}
        // price={price}
      />
    </section>
  );

  // <iframe
  //   className="airtable-embed"
  //   src="https://airtable.com/embed/shrieSVQL8JjTMn9N?backgroundColor=blue"
  //   frameBorder="0"
  //   width="800rem"
  //   height="550rem"
  //   style={{ background: "transparent", border: "1px solid #ccc" }}
  // ></iframe>
}
export default Calendar;
