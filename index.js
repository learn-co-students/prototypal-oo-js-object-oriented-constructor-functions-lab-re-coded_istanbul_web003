// Scuber needs you to develop a fast way to create Scooters, Drivers, and PickupLocations as new business keeps rolling in.

// Instructions
// Create a constructor function for each of the following:

// Scooter with year, color, and model properties
// Driver with name, age, and experience properties
// PickupLocation with address and city properties

function Scooter(year, color, model) {
    this.year=year; 
    this.color=color;
    this.model=model;
}


 function Driver(name, age, experience) {
     this.name=name;
     this.age=age;
     this.experience=experience; 
 }


 function PickupLocation(address, city) {
   this.address = address;
   this.city = city;
 }

 let reddish = new Scooter(1990, "red", "vespa");
 let sule = new Driver("Sule", 30, 3);
 let dateLocation = new PickupLocation("Ministry of Coffee", "Sydney");



