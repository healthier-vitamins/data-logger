import Answer from "./Answer";

const Calendar = ({ date, monthDay, entries, entriesLength }) => {
  if (entries.length < 1) {
    return false;
  }
  console.log("api call entries from airtable: ", entries);

  const answer = [];

  for (let i = 0; i < entriesLength; i++) {
    if (entries[i]?.fields.date === date) {
      answer.push(entries[i]?.fields?.ticker);
    }
  }

  console.log("answer", answer);

  const MakeAnswer = () => {
    const answerArr = [];
    for (let j = 0; j < answer.length; j++) {
      answerArr.push(<Answer ticker={answer[j]} />);
    }
    return answerArr;
  };

  return (
    <section className="calendar-boxes">
      <div className={date}>{monthDay}</div>
      <MakeAnswer />
      {/* <div className="trade">{trade}</div>
          <div className="price">{price}</div> */}
    </section>
  );
};

export default Calendar;
