function collateRecords(filteredRecords) {
  const inputs = [];
  const obj = {
    ticker: "",
    profitLoss: 0,
    date: "",
    time: "",
  };

  // console.log(filteredRecords)
  for (let i = 0; i < filteredRecords.length - 1; i++) {
    if (
      filteredRecords[i].fields.ticker ===
        filteredRecords[i + 1].fields.ticker &&
      filteredRecords[i].fields.trade !== filteredRecords[i + 1].fields.trade
    ) {
      if (filteredRecords[i].fields.trade[0] === "Short") {
        console.log("short first");
        console.log(filteredRecords[i].fields.ticker);
        obj.ticker = filteredRecords[i].fields.ticker;
        obj.profitLoss =
          filteredRecords[i].fields.price - filteredRecords[i + 1].fields.price;
        obj.date = filteredRecords[i].fields.date;
        obj.time = filteredRecords[i].fields.time;
        console.log(obj)
        inputs.push(obj);

        console.log(inputs)
        console.log("pushed");
      } else if (filteredRecords[i].fields.trade[0] === "Long") {
        console.log("long first");
        console.log(filteredRecords[i].fields.ticker);
        obj.ticker = filteredRecords[i].fields.ticker;
        obj.profitLoss =
          filteredRecords[i + 1].fields.price - filteredRecords[i].fields.price;
        obj.date = filteredRecords[i].fields.date;
        obj.time = filteredRecords[i].fields.time;
        console.log(obj)
        inputs.push(obj);

        console.log(inputs)
        console.log("pushed");
      }
    }
   
  }
  return inputs;
}

export default collateRecords;
