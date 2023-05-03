function main2()
{
    console.log("\n\nLevel 2 Challenges\n\n");
    console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
    console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

    if (!(typeof('10') == typeof(10)))
    {
        console.log(typeof(parseInt('10')) == typeof(10));
    }

    if (!(parseFloat('9.8') == 10))
    {
        console.log(Math.ceil(parseFloat('9.8')) == 10);
    }

    console.log("python".includes("on") && "jargon".includes("on"));
    console.log("I hope this course is not full of jargon".includes("jargon"));

    console.log(getRandomNumberInRange(0, 100));
    console.log(getRandomNumberInRange(50, 100));
    console.log(getRandomNumberInRange(0, 255));
    
    let js = "JavaScript";

    console.log(js[getRandomNumberInRange(0, js.length - 1)]);
    
    console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

    let phrase = "You cannot end a sentence with because because because is a conjunction";
    let becauseRegex = /\bbecause\b/g;
    let matches = matchAllOccurences(becauseRegex, phrase);

    console.log(matches.join(" "));

}

function getRandomNumberInRange(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function matchAllOccurences(regex, phrase)
{
    return phrase.match(regex);
}

document.addEventListener("DOMContentLoaded", () => main2());