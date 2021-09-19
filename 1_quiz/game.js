const checkAnswers = () => {
  let answerString = "";
  let answers = $(":checked");
  answers.each((i) => {
    answerString = answerString + answers[i].value;
  });
  checkIfCorrect(answerString);
};
const checkIfCorrect = (theString) => {
  if (parseInt(theString, 16) === 187) {
    $("body").addClass("correct");
    $("h1").text("大正解！");
    $("canvas").show();
  }
};

if (jQuery) {
  $("#question1").show();
}
if (impress) {
  $("#question2").show();
}
