

function wordPuzzle(sentence) {
  return sentence.replace(/[aeiou]/gi, '-');
}


//User interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    var countTo = parseInt($("input#countTo").val());
    var countBy = parseInt($("input#countBy").val());
    //var result = countUp(countTo, countBy);
    $(".result").text(countUp(countTo, countBy));

    event.preventDefault();
  });
  //event.preventDefault();
});
