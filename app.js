var soap = require('soap');
const wsdl = "http://www.holidaywebservice.com/Holidays/US/USHolidayService.asmx?wsdl";
const args = {};
const action = "GetHolidaysAvailable";

// soap.createClient(wsdl,(err, client)=>{
//     client[action](args, (err, result)=>{
//         console.log(err);
//         console.log(result[action + "Result"].diffgram.NewDataSet);
//     });
//     console.log("called");
// });

soap.createClientAsync(wsdl)
    .then((client)=>{
        return client[action](args)
    })
    .then((result)=>{
        // console.log(err);
        console.log(result);
    });