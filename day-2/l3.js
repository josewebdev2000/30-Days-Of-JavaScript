function main3()
{
    console.log("\n\nLevel 3 Challenges\n\n");

    let loveSentence = "Love is the best thing in this world. Some found their love and some are still looking for their love";

    let loveRegex = /\blove\b/g;
    let matches = loveSentence.match(loveRegex);
    console.log(matches.length);

    let becauseRegex = /\bbecause\b/g;
    let countOccurrences = matchAllOccurences(becauseRegex, 'You cannot end a sentence with because because because is a conjunction').length;
    console.log(countOccurrences);

    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

    const specialRegex = /[^\w\s]/g;

    let newSentence = sentence.replace(specialRegex, '');
    
    const words = newSentence.split(" ");
    let repsNWords = {};

    for (let i = 0; i < words.length; i++)
    {
        const word = words[i];
        repsNWords[word] = repsNWords[word] ? repsNWords[word] + 1 : 1;
    }

    let maxCount = 0;
    let mostFrequent;

    for (const word in repsNWords) {
        if (repsNWords[word] > maxCount) {
          maxCount = repsNWords[word];
          mostFrequent = word;
        }
      }

    console.log(mostFrequent);

    const salaryInfo = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
    const numRegex = /\d+/g;

    const nums = salaryInfo.match(numRegex);

    for (let i = 0; i < nums.length; i++)
    {
        nums[i] = parseInt(nums[i]);
    }

    const totalAnnualSalary = nums[0] * 12 + nums[1] + nums[2] * 12;
    console.log(totalAnnualSalary);

}

document.addEventListener("DOMContentLoaded", () => main3());