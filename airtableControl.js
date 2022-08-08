// THIS IS THE FUNCTIONALITY FOR UPDATING AIRTABLE 

// How we update the airtable 
function update_airtable(command) {
  // Creating the connection to Airtable
  var APIKey = document.getElementById("api_key").value;
  var BaseID = document.getElementById("base_id").value
  var TableName = document.getElementById("table_name").value;
  var recID = document.getElementById("rec_id").value;
  var Airtable = require('airtable');
  var base = new Airtable({ apiKey: APIKey }).base(BaseID);

  // Writing the new command
  base(TableName).update(recID, {
    "Value": command
  }, function(err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log("New Command: " + record.get("Value"));
  });
}
