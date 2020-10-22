$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const input1 =  $("input:radio[name=question1]:checked").val();
    const input2 =  $("input:radio[name=question2]:checked").val();
    const input3 =  $("input:radio[name=question3]:checked").val();

      
  });
});