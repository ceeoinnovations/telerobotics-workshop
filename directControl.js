function forward() {
  mySPIKE = document.getElementById("service_SPIKE").getService();
  console.log("forward")
  console.log("In slot: ", 0)
  mySPIKE.executeProgram(0)
}

function left() {
  mySPIKE = document.getElementById("service_SPIKE").getService();
  console.log("left")
  console.log("In slot: ", 3)
  mySPIKE.executeProgram(3)
}

function right() {
  mySPIKE = document.getElementById("service_SPIKE").getService();
  console.log("right")
  console.log("In slot: ", 1)
  mySPIKE.executeProgram(1)
}

function backward() {
  mySPIKE = document.getElementById("service_SPIKE").getService();
  console.log("backward")
  console.log("In slot: ", 2)
  mySPIKE.executeProgram(2)
}

function action() {
  mySPIKE = document.getElementById("service_SPIKE").getService();
  console.log("action")
  console.log("In slot: ", 4)
  mySPIKE.executeProgram(4)
}