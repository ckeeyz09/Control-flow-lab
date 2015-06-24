var securityQuestions = ["a","b","c"];
securityQuestions[0] = {
    question: "What color is the sky?",
    expectedAnswer: "blue"
};
securityQuestions[1] = {
    question: "The cow says?",
    expectedAnswer: "moo"
};
securityQuestions[2] ={
    question: "What is the capital of CA?",
    expectedAnswer: "Sacramento"
};
for (i=0; i < securityQuestions.length; i++) {
    var answer = prompt(securityQuestions[i].question)
    if (answer == securityQuestions[i].expectedAnswer) {
        alert("That is correct!");
    }
    else {
        alert("That is incorrect. Goodbye.");
        break;
    }
}