function main3()
{
    console.log("\n\nLevel 3 Challenges\n\n");

    let month = prompt("Enter a month: ");

    const numDays = getDaysInMonth(month);

    console.log(`${month} has ${numDays}.`);
}

function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true; // Divisible by 400: Leap year
        } else {
          return false; // Divisible by 100 but not 400: Not a leap year
        }
      } else {
        return true; // Divisible by 4 but not 100: Leap year
      }
    } else {
      return false; // Not divisible by 4: Not a leap year
    }
  }

function getDaysInMonth(month)
{
    month = month.toLowerCase();

    const currentYear = new Date().getFullYear();
    const currentYearIsLeapYear = isLeapYear(currentYear);

    let numDays = 0;

    switch (month)
    {
        case "february":
            numDays = (currentYearIsLeapYear) ? 29 : 28;
            break;
        
        case "january":
        case "march":
        case "may":
        case "july":
        case "august":
        case "october":
        case "december":
            numDays = 31;
            break;
        
        case "april":
        case "june":
        case "july":
        case "september":
        case "november":
            numDays = 30;
            break;
        
        default:
            numDays = "Invalid month. Could not find number of days."; 
    }

    return numDays;
}

document.addEventListener("DOMContentLoaded", () => main3());