function resultGenerator() {

}



$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();

    let pyValue1 = parseInt($("input:radio[class=py-1]:checked").val());
    let pyValue2 = parseInt($("input:radio[class=py-2]:checked").val());
    let pyValue3 = parseInt($("input:radio[class=py-3]:checked").val());
    let pyValue4 = parseInt($("input:radio[class=py-4]:checked").val());
    let pyValue5 = parseInt($("input:radio[class=py-5]:checked").val());
    let totalPyValue = pyValue1 + pyValue2 + pyValue3 + pyValue4 + pyValue5;

    let javaValue1 = parseInt($("input:radio[class=java-1]:checked").val());
    let javaValue2 = parseInt($("input:radio[class=java-2]:checked").val());
    let javaValue4 = parseInt($("input:radio[class=java-4]:checked").val());
    let javaValue5 = parseInt($("input:radio[class=java-5]:checked").val());
    let totalJavaValue = javaValue1 + javaValue2 + javaValue4 + javaValue5;

    let jsValue1 = parseInt($("input:radio[class=js-1]:checked").val());
    let jsValue3 = parseInt($("input:radio[class=js-3]:checked").val());
    let totalJsValue = jsValue1 + jsValue3;


    resultGenerator();
  });
});



