function main2()
{
    console.log("\n\nLevel 2 Challenges\n\n");

    const grade1 = gradeStudent(78);
    const grade2 = gradeStudent(89);

    console.log(`Grade of 78 gets a ${grade1}.`);
    console.log(`Grade of 89 gets a ${grade2}`);

    const season1 = getSeason("November");
    const season2 = getSeason("May");

    console.log(`The season of November is ${season1}`);
    console.log(`The season of May is ${season2}`);

    let day = prompt("What is the day today? ");

    const dayType = getTypeOfDay(day);

    console.log(`${day} is a ${dayType}.`);

}

function gradeStudent(score)
{
    if (score >= 80)
    {
        return "A";
    }

    else if (score >= 70 && score <= 89)
    {
        return "B";
    }

    else if (score >= 60 && score <= 69)
    {
        return "C";
    }

    else if (score >= 50 && score <= 59)
    {
        return "D";
    }

    else
    {
        return "F";
    }
}

function getSeason(month)
{
    let season = "";

    switch(month)
    {
        case "September":
        case "October":
        case "November":
            season = "Autumn";
            break;
        
        case "December":
        case "January":
        case "February":
            season = "Winter";
            break;
        
        case "March":
        case "April":
        case "May":
            season = "Spring";
            break;
        
        case "June":
        case "July":
        case "August":
            season = "Summer";
            break;
        
        default:
            season = "Invalid month. Could not determine season";
    }

    return season;
}

function getTypeOfDay(day)
{
    day = day.toLowerCase();

    let dayType = "";

    switch (day)
    {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            dayType = "working day";
            break;
        
        case "saturday":
        case "sunday":
            dayType = "weekend";
            break;
        
        default:
            dayType = "Invalid day. Could not determine type of day.";
    }

    return dayType;
}

document.addEventListener("DOMContentLoaded", () => main2());