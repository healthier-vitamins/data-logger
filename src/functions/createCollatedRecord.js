import authenBase from "../authenticate/authenBase";

function createCollatedRecord(inputs) {
  const base = authenBase();

  base("Collated Trade Activity").create(
    [
      {
        fields: {
          ticker: inputs.ticker,
          profitLoss: parseInt(inputs.profitLoss),
          date: inputs.date,
          time: inputs.time,
        },
      },
    ],
    // function (err, records) {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   records.forEach(function (record) {
    //     console.log(record.getId());
    //   });
    // }
  );
  console.log("created")
}

export default createCollatedRecord;
