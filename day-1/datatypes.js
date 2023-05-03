// Encapsulate main code in main() function
function main()
{
    let someStr = "Some Str";
    let someBool = false;
    let und = undefined;
    let someNull = null;
    let someNum = 5.6;

    console.log(typeof(someStr));
    console.log(typeof(someBool));
    console.log(typeof(und));
    console.log(typeof(someNull));
    console.log(typeof(someNum));

    // Declare variables in multiple lines
    let firstName = "Jose";
    let lastName = "Brache Garcia";
    let maritalStatus = "single";
    let country = "United States of America";
    let age = 22;

    let myAge = 22;
    let yourAge = 33;

    console.log(`I am ${myAge} years old.`);
    console.log(`You are ${yourAge} years old.`);

}

// Ensure DOM is loaded first before running this script
document.addEventListener("DOMContentLoaded", () => main());