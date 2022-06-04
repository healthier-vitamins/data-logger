import { useEffect } from "react";
import authenBase from "../authenticate/authenBase";

const listRecords = () => {
  useEffect(() => {
    const base = authenBase();

    base("Trade Activity")
      .select({
        // Selecting the first 3 records in Trade Activity:
        maxRecords: 3,
        view: "Trade Activity",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.

          records.forEach((record) => {
            console.log("Record: ", record);
            console.log("Retrieved", record.get("price"));
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        // function done(err) {
        //   if (err) {
        //     console.error(err);
        //     return;
        //   }
        // }
      );
      
  }, []);
};

export default listRecords;
