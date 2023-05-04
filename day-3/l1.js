function main1()
{
    console.log("\n\nLevel 1 Challenges\n\n");

    const [firstName, lastName, country, city, age, isMarried, year] = [
        "Dr Heinz", 
        "Doofenshmirtz",
        "United States of America",
        "Danville",
        47,
        false,
        2023];
    
    for (let personalInfo in [firstName, lastName, country, city, age, isMarried, year])
    {
        console.log(typeof(personalInfo));
    }

    console.log(typeof('10') == typeof(10));
    console.log(parseInt('9.8') == 10);

    const truthys = [1, "string", [8.5]];
    const falsies = [0, "", []]

    showBooleanOfObjs(truthys);
    showBooleanOfObjs(falsies);

    console.log(4 > 3);
    console.log(4 >= 3);
    console.log(4 < 3);
    console.log(4 <= 3);
    console.log(4 == 4);
    console.log(4 === 4);
    console.log(4 != 4);
    console.log(4 !== 4);
    console.log(4 != "4");
    console.log(4 == "4");
    console.log(4 === "4");
    console.log("python".length !== "jargon".length);

    console.log(4 > 3 && 10 < 12);
    console.log(4 > 3 && 10 > 12);
    console.log(4 > 3 || 10 < 12);
    console.log(!(4 > 3));
    console.log(!(4 < 3));
    console.log(!(false));
    console.log(!(4 > 3 && 10 < 12));
    console.log(!(4 > 3 && 10 > 12));
    console.log(!(4 === "4"));
    console.log(!("dragon".includes("on")));

    // create a current Date Obj
    const timeNow = new Date();

    console.log(timeNow.getFullYear());
    console.log(timeNow.getMonth() + 1);
    console.log(timeNow.getDate());
    console.log(timeNow.getDay());
    console.log(timeNow.getHours());
    console.log(timeNow.getMinutes());
    console.log(timeNow.getTime());

}

function showBooleanOfObjs(array)
{
    array.map(element => {
        console.log(Boolean(element));
    });
}

document.addEventListener("DOMContentLoaded", () => main1());