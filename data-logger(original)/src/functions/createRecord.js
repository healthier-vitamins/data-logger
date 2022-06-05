import authenBase from "../authenticate/authenBase";

function createRecord(inputs) {
  const base = authenBase();

  base("Trade Activity").create(
    [
      {
        fields: {
          ticker: inputs.ticker,
          price: parseInt(inputs.price),
          trade: [inputs.trade],
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
}

export default createRecord;
