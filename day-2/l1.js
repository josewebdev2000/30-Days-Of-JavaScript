function main1()
{
    console.log("Level 1 Challenges\n\n");
    let challenge = "30 Days Of JavaScript";

    console.log(challenge);
    console.log(challenge.length);
    console.log(challenge.toUpperCase());
    console.log(challenge.toLowerCase());
    console.log(challenge.substring(0, 2));
    console.log(challenge.slice(3));
    console.log(`Does the sentence ${challenge} include the phrase Script: ${challenge.includes("Script")}`);
    console.log(challenge.split(" "));
    console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(","));
    console.log(challenge.replace("JavaScript", "Python"));
    console.log(challenge.charAt(15));
    console.log(challenge.charCodeAt(11));
    console.log(challenge.indexOf("a"));
    console.log(challenge.lastIndexOf("a"));

    let complexStr = "ou cannot end a sentence with because because because is a conjunction";

    console.log(complexStr.indexOf("because"));
    console.log(complexStr.lastIndexOf("because"));
    console.log(complexStr.search("because"));
    console.log(challenge.trim());
    console.log(challenge.startsWith("3"));
    console.log(challenge.endsWith("t"));
    console.log(challenge.match(/a/gi));
    console.log("30 Days of".concat("JavaScript"));
    console.log(challenge.repeat(2));

}

document.addEventListener("DOMContentLoaded", () => main1());