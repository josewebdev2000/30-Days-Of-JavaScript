function main1()
{
    console.log("\n\nLevel 1 Challenges\n\n");

    shouldUserDrive();
    compareOurAges();

    const a = 4;
    const b = 3;

    (a > b) ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`);

    tellIsEven();

}

function shouldUserDrive()
{
    const userAge = parseInt(prompt("Enter your age: "));

    (userAge >= 18) ? console.log("You are old enough to drive.") : console.log(`You are left with ${18 - userAge} to drive.`);
}

function tellIsEven()
{
    const num = parseInt(prompt("Enter a number: "));

    (num % 2 == 0) ? console.log(`${num} is an even number`) : console.log(`${num} is an odd number`);
}

function compareOurAges()
{
    const myAge = 22;
    const yourAge = parseInt(prompt("Enter your age: "));

    (myAge > yourAge) ? console.log(`I am older than you are by ${myAge - yourAge} years`) : console.log(`You are older than I am by ${yourAge - myAge}`);
}

document.addEventListener("DOMContentLoaded", () => main1());