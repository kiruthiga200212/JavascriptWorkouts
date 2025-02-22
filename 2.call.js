
// this is a call method
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
  
}

invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?
console.log(employee1.firstName)

//real time own example for call method
const carParking = {
    driverName :"selvam",
    carNumber : "TN09985",
    carColor : "white",
}

function parkingCounter(check){
    console.log(check + `Driver name : ${this.driverName} his car number is ${this.carNumber} and ${this.carColor} color car is passed on the highway. `)
}
parkingCounter.call(carParking,"Checking Monitor...")