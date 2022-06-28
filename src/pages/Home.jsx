import { useState } from "react";
import listActivities from "../hooks/listActivities";
import NavBar from "../components/NavBar";
import createRecord from "../functions/createRecord";

function Home() {
  listActivities();

  const [inputs, setInputs] = useState({
    ticker: "",
    price: "",
    trade: "Long",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setInputs({
      ...inputs,
      [e.target.name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(inputs);
    createRecord(inputs);
    setInputs({
      ...inputs,
      ticker: "",
      price: "",
      trade: "Long",
      date: "",
      time: "",
    });
  };

  return (
    <>
      <NavBar />
      <div className="activity-container">
        <h1>Enter Trade Activity</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <label htmlFor="ticker">Ticker: </label>
            <input
              id="ticker"
              name="ticker"
              type="text"
              placeholder="Ticker"
              value={inputs.ticker}
              onChange={handleChange}
            ></input>
            <br />
            <label htmlFor="price">Price: </label>
            <input
              id="price"
              name="price"
              type="number"
              placeholder="Price"
              value={inputs.price}
              onChange={handleChange}
            ></input>
            <br />
            <label htmlFor="trade">Trade: </label>
            <select
              name="trade"
              id="trade"
              value={inputs.trade}
              onChange={handleChange}
            >
              <option value="Long">Long</option>
              <option value="Short">Short</option>
            </select>
            <br />
            <label htmlFor="date">Date: </label>
            <input
              id="date"
              name="date"
              type="date"
              placeholder="Date"
              value={inputs.date}
              onChange={handleChange}
            ></input>
            <br />
            <label htmlFor="time">Time: </label>
            <input
              id="time"
              name="time"
              type="time"
              value={inputs.time}
              onChange={handleChange}
            ></input>
            <br />
            <button onClick={handleSubmit}>Submit</button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
export default Home;
