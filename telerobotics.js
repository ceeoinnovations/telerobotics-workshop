// Checking for a new message every 650 milliseconds

var interval;

function startListener() {
  console.log("Start listener called!")
  var intervalID = setInterval(listener, 650);
  setIntervalID(intervalID)
}

function setIntervalID(intervalID) {
  interval = intervalID;
}
function stopListener() {
  console.log("Stop listener called!")
  clearInterval(interval)
}

// How we update the airtable 
function send_airtable(command) {
  // Creating the connection to Airtable
  var APIKey = document.getElementById("api_key_2").value;
  var BaseID = document.getElementById("base_id_2").value
  var TableName = document.getElementById("table_name_2").value;
  var recID = document.getElementById("rec_id_2").value;
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

function listener() {
  var APIKey = document.getElementById("api_key_2").value;
  var BaseID = document.getElementById("base_id_2").value
  var TableName = document.getElementById("table_name_2").value;
  var recID = document.getElementById("rec_id_2").value;
  var Airtable = require('airtable');
  var base = new Airtable({ apiKey: APIKey }).base(BaseID);

  // Reading the value 
  base(TableName).find(recID, function(err, record) {
    if (err) {
      console.error(err);
      return;
    }

    // If it's a new command...
    if (record.get("Value") != "no command") {
      // ... run the new command
      console.log("Running the command:", record.get("Value"))

      // Clear the old command, update to "no command"
      base(TableName).update(recID, { "Value": "no command" }, function(err, record) {
        if (err) {
          console.error(err);
          return;
        }
      });

      // Run the code to move the motors!
      runCommands(record.get("Value"));
    }

    else {
      console.log("No change found");
    }
  });
}

function runCommands(command) {
  if (command == "forward") {
    mySPIKE.executeProgram(0);
  }
  else if (command == "right") {
    mySPIKE.executeProgram(1)
  }
  else if (command == "left") {
    mySPIKE.executeProgram(3)
  }
  else if (command == "backward") {
    mySPIKE.executeProgram(2)
  }
  else if (command == "action") {
    mySPIKE.executeProgram(4)
  }

}