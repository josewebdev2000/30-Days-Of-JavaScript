function main3()
{
    console.log("\n\nLevel 3 Challenges\n\n");

    const currDate = new Date();

    const currYear = currDate.getFullYear();
    const currMonth = getTimeNumFormat(currDate.getMonth() + 1);
    const currDay = getTimeNumFormat(currDate.getDay());
    const currHours = getTimeNumFormat(currDate.getHours());
    const currMins = getTimeNumFormat(currDate.getMinutes());

    console.log(`${currYear}-${currMonth}-${currDay} ${currHours}:${currMins}`);
}

document.addEventListener("DOMContentLoaded", () => main3());