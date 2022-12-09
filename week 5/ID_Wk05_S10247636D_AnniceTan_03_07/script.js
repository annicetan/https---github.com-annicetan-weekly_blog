/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const shop = {
    type:"Restaurant/Cafe",
    totalStaff:20,
    cuisine:"Chinese",
    operatingHours: {
        opening: 1100,
        closing: 2000,
    },
    opennow: true,
    checkopening: function(openStatus){
        this.opennow = openStatus;
    },
};

console.log("The shop object consists of:", shop);