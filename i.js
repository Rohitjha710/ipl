const csvFilePath1deliveries = "./dataset/deliveries.csv";
const csv = require("csvtojson");
csv({checkType:true})
  .fromFile(csvFilePath1deliveries)
  .then(Deliveries => {
    console.log(Deliveries);
  });
