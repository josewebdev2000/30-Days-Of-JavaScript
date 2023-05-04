function main2()
{
    console.log("\n\nLevel 2 Challenges\n\n");

    inputTakingOperations();

    const func = "2x - 2";

    const m = getSlope(func);
    const yIntercept = getYIntercept(func);
    const XIntercept = getXIntercept(m, yIntercept);

    console.log(m);
    console.log(yIntercept);
    console.log(XIntercept);

    const p1 = {
        x : 2,
        y : 2
    };

    const p2 = {
        x : 6,
        y : 10
    };

    const newM = getSlopeBetweenpints(p1, p2);
    console.log(newM);

    console.log(m > newM);

    console.log(solveSquaredEquation(1, 6, 9));

    const name = "Jose";

    name.length > 7 ? console.log("Your name is long") : console.log("Your name is short");

    const lastName = "Brache";

    name.length > lastName.length ? console.log("Your first name is longer than your last name") : console.log("Your last name is longer than your first name");

    let myAge = 250;
    let yourAge = 25;

    console.log("I am 225 years older than you.");

    const currDate = new Date();
    const currYear = currDate.getFullYear();
    const currMonth = getTimeNumFormat(currDate.getMonth() + 1);
    const currDay = getTimeNumFormat(currDate.getDay());
    const currHours = getTimeNumFormat(currDate.getHours());
    const currMins = getTimeNumFormat(currDate.getMinutes());

    console.log(`${currYear}-${currMonth}-${currDay} ${currHours}:${currMins}`);
    console.log(`${currDay}-${currMonth}-${currYear} ${currHours}:${currMins}`);
    console.log(`${currDay}/${currMonth}/${currYear} ${currHours}:${currMins}`);



}

function getTimeNumFormat(num)
{
    return (num < 10) ? `0${num}` : `${num}`;
}

function solveSquaredEquation(a, b, c)
{
    const res1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a;
    const res2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a;

    return Math.round(res1 * 100 / 100), Math.round(res2 * 100 / 100);
}

function inputTakingOperations()
{
    const base = parseFloat(prompt("Enter base: "));
    const height = parseFloat(prompt("Enter height: "));
    const trigArea = getTriangleArea(base, height);

    console.log(`The area of the triangle is ${trigArea}`);

    const s1 = parseFloat(prompt("Enter triangle side a: "));
    const s2 = parseFloat(prompt("Enter triangle side b: "));
    const s3 = parseFloat(prompt("Enter triangle side c: "));

    console.log(`The perimeter of the triangle is ${getTrianglePerimeter(s1, s2, s3)}`);

    const w = parseFloat(prompt("Enter rectangle width: "));
    const h = parseFloat(prompt("Enter rectangle height: "));

    console.log(`The area of the reactangle is ${getRectangleArea(w, h)}`);
    console.log(`The perimeter of the rectangle is ${getRectanglePerimeter(w, h)}`);

    const radius = parseFloat(prompt("Enter radius: "));

    console.log(`The area of the circle is ${getCircleArea(radius)}`);
    console.log(`The perimeter of the circle is ${getCirclePerimeter(radius)}`);

    const weeklyHours = parseFloat(prompt("Enter weekly hours: "));
    const hourlyRate = parseFloat(prompt("Enter hourly rate: "));

    console.log(`Your weekly earning is ${weeklyHours * hourlyRate}`);

    const currentYear = new Date().getFullYear();
    const birthDay = parseInt(prompt("Enter birth year: "));
    const age = currentYear - birthDay;

    age >= 18 ? console.log(`You are ${age}. You are old enough to drive.`) : console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);

    const yearsLived = parseInt(prompt("Enter the number of years you've lived so far"));
    console.log(`You lived ${yearsLived * 12 * 4 * 24 * 60 * 60} seconds.`);
}

function getSlope(func)
{
    // Look for the position of x in the function
    const xPos = func.indexOf("x");

    if (xPos != 0)
    {
        return parseFloat(func[xPos - 1]);
    }

    else
    {
        return 1;
    }
}

function getSlopeBetweenpints(point1, point2)
{
    const result = (point2.y - point1.y) / (point2.x - point1.x);
    return Math.round(result * 100) / 100;

}

function getYIntercept(func)
{
    const signs = ["+", "-"];

    for (let sign of signs)
    {
        if (func.includes(sign))
        {
            const [part1, part2] = func.split(sign);
            return parseFloat(part2.trim());
        }
    }
}

function getXIntercept(m, yIntercept)
{
    const result = -yIntercept / m;
    return Math.round(result * 100) / 100;
}

function getCircleArea(radius)
{
    return 3.14 * Math.pow(radius, 2);
}

function getCirclePerimeter(radius)
{
    return 2 * 3.14 * radius;
}

function getTriangleArea(base, height)
{
    const result = (base * height) / 2
    return Math.round((result) * 100) / 100;
}

function getTrianglePerimeter(s1, s2, s3)
{
    return s1 + s2 + s3;
}

function getRectangleArea(w, h)
{
    return w * h;
}

function getRectanglePerimeter(w, h)
{
    return 2 * (w + h);
}

document.addEventListener("DOMContentLoaded", () => main2());