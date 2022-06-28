import { useNavigate } from "react-router-dom";
import CalendarInfo from "./CalendarInfo";

function Calendar ({ date, monthDay, entries, entriesLength }) {

  // console.log("check api call: ", entries);
  const navigate = useNavigate();
  const filteredEntries = [];

  for (let i = 0; i < entriesLength; i++) {
    if (entries[i]?.fields.date === date) {
      filteredEntries.push(entries[i]?.fields);
    }
  }

  // console.log("filteredEntries", filteredEntries);

  const RenderFiltered = () => {
    const filteredEntriesArr = [];
    for (let j = 0; j < filteredEntries.length; j++) {
      filteredEntriesArr.push(
        <CalendarInfo
          index={j + 1}
          ticker={filteredEntries[j].ticker}
          trade={filteredEntries[j].trade}
          key={j}
        />
      );
    }
    return filteredEntriesArr;
  };

  return (
    <section className="calendar-boxes" onClick={() => navigate(`/monthly-view/${date}`)}>
      <div className={date}>
        {monthDay}
      </div>
      <RenderFiltered />
    </section>
  );
};

export default Calendar;
