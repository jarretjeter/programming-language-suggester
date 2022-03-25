function resultGenerator() {

}



$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();

    // let pyValue = parseInt($(".")); 
    let javaValue = 0;
    let jsValue = 0;
    console.log($("input:radio[class=py-val]:checked").val());
    console.log($("input:radio[class=py-1]:checked").val());
    console.log($("input:radio[class=py-2]:checked").val());

    resultGenerator();
  });
});



