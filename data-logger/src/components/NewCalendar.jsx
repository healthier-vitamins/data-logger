import Answer from "./Answer";

const NewCalendar = ({ date, monthDay, entries, entrieslength }) => {
    if (entries.length < 1) {
        return false
    }
    console.log("FUCK YOU", entries)
    const answer = [];

    for (let i =0; i < entrieslength; i++) {
        if (entries[i]?.fields.date === date) {
            answer.push(entries[i]?.fields?.ticker)
         }
        }

    console.log("answer" ,answer)

    const MakeAnswer = () => {
        const answerArr = []
        for (let j =0; j < answer.length; j++) {
            answerArr.push(<Answer
            ticker={answer[j]}
            />)
        }
        return answerArr;
    }

    return (
        <section className={date}>
          <div>{monthDay}</div>
          <MakeAnswer />
          {/* <div className="trade">{trade}</div>
          <div className="price">{price}</div> */}
        </section>
    )



//   for (let i = 0; i < entrieslength; i++) {
//     if (entries[i]?.fields.date === date) {
//       return (
//         <section className={date}>
//           <div>{monthDay}</div>
//           <div className="ticker">{entries[i]?.fields?.ticker}</div>
//           {/* <div className="trade">{trade}</div>
//           <div className="price">{price}</div> */}
//         </section>
//       );
//     }
//     return (
//         <section className={date}>
//     <div>{monthDay}</div>
//     <div className="ticker"></div>
//     {/* <div className="trade">{trade}</div>
//     <div className="price">{price}</div> */}
//   </section>
//   )
  
// }

}






  // const MakeEntries = () => {
  //     const FinalArr = []
  //     for (let i=0; i < entries?.records.length; i++) {
  //         FinalArr.push(<NewEntry entries={entries} date={date} monthDay={monthDay}/>)
  //     }
  //     return FinalArr;
  // }

//   return <MakeEntries />;


export default NewCalendar;
