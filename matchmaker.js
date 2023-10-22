console.log ("Matchmaking Website is Starting...");

function CalculateCompatibility() {
    console.log("CalculateCompatibility()");

const FINAL_COMMENT_GREAT = "YAY! Besties!"
const FINAL_COMMENT_GOOD = "We can be friends for sure"
const FINAL_COMMENT_BAD = "Better off as strangers"

    const DESIRED_RESPONSE = [
        5, /* Strongly Agree */
        5, /* Strongly Agree */
        1, /* Strongly Disagree */
        4, /* Agree */
        5, /* Strongly Agree */
    ]
    
    const MAX_SCORE = 25;
    
        let question1Response = document.getElementById('q1').selectedOptions[0].value;
        let question2Response = document.getElementById('q2').selectedOptions[0].value;
        let question3Response = document.getElementById('q3').selectedOptions[0].value;
        let question4Response = document.getElementById('q4').selectedOptions[0].value;
        let question5Response = document.getElementById('q5').selectedOptions[0].value;
    
        console.log("Question 1 Answers:")
        console.log(document.getElementById('q1').selectedOptions[0].text)
        console.log(document.getElementById('q1').selectedOptions[0].value)
        console.log(question1Response)
    
        console.log("Question 2 Answers:")
        console.log(document.getElementById('q2').selectedOptions[0].text)
        console.log(document.getElementById('q2').selectedOptions[0].value)
        console.log(question2Response)
    
        console.log("Question 3 Answers:")
        console.log(document.getElementById('q3').selectedOptions[0].text)
        console.log(document.getElementById('q3').selectedOptions[0].value)
        console.log(question3Response)
    
        console.log("Question 4 Answers:")
        console.log(document.getElementById('q4').selectedOptions[0].text)
        console.log(document.getElementById('q4').selectedOptions[0].value)
        console.log(question4Response)
    
        console.log("Question 5 Answers:")
        console.log(document.getElementById('q5').selectedOptions[0].text)
        console.log(document.getElementById('q5').selectedOptions[0].value)
        console.log(question5Response)

        let question1Compatibility = 5 - Math.abs(question1Response - DESIRED_RESPONSE[0]);
        let question2Compatibility = 5 - Math.abs(question2Response - DESIRED_RESPONSE[1]);
        let question3Compatibility = 5 - Math.abs(question3Response - DESIRED_RESPONSE[2]);
        let question4Compatibility = 5 - Math.abs(question4Response - DESIRED_RESPONSE[3]);
        let question5Compatibility = 5 - Math.abs(question5Response - DESIRED_RESPONSE[4]);

        console.log("c1="+question1Compatibility)
        console.log("c2="+question2Compatibility)
        console.log("c3="+question3Compatibility)
        console.log("c4="+question4Compatibility)
        console.log("c5="+question5Compatibility)
        
        let totalCompatibility = question1Compatibility + question2Compatibility + question3Compatibility +question4Compatibility + question5Compatibility;

        totalCompatibility *= 100 / MAX_SCORE
        totalCompatibility = Math.round(totalCompatibility);
        console.log("tc="+ totalCompatibility)



    document.getElementById("Compatibility").innerHTML = "Your Compatability is: " + totalCompatibility;    
console.log("TotalCompatibility=" +totalCompatibility);

    if (totalCompatibility < 50) {
        console. log(FINAL_COMMENT_BAD);
        document.getElementById("Message").innerHTML = FINAL_COMMENT_BAD;
    } else if (totalCompatibility < 70) {
        console.log(FINAL_COMMENT_GOOD);
        document.getElementById("Message").innerHTML = FINAL_COMMENT_GOOD;
    }else {
        console.log(FINAL_COMMENT_GREAT);
        document.getElementById("Message").innerHTML = FINAL_COMMENT_GREAT;
    }

}