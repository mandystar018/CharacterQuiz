function findCharacter(answer1, answer2, answer3) {
  let score = answer1 + answer2 + answer3;

  if (score < 6) {
    $(".michael").show();
    
  } else if (score > 6 && score < 9) {
    $(".dwight").show();

  } else if (score > 9 && score < 12) {
    $(".jim").show();

  } else {

  }
}

$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const input1 =  parseInt($("input:radio[name=question1]:checked").val());
    const input2 =  parseInt($("input:radio[name=question2]:checked").val());
    const input3 =  parseInt($("input:radio[name=question3]:checked").val());

    findCharacter(input1, input2, input3);
  });
});