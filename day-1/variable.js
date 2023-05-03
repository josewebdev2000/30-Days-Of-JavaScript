// Encapsulate main code in main() function
function main()
{
    let someStr = "Some Str";
    let someBool = false;
    let und = undefined;
    let someNull = null;

    // four variables with unassigned values
    let un1;
    let un2;
    let un3;
    let un4;

    // four variables with assigned values
    let a1 = 1;
    let a2 = 2;
    let a3 = 3;
    let a4 = 4;

    // Declare variables in a single lines
    let [firstName, lastName, maritalStatus, country, age] = ["Jose", "Brache Garcia", "single", "United States of America", 22];

}

// Ensure DOM is loaded first before running this script
document.addEventListener("DOMContentLoaded", () => main());