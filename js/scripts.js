function resultGenerator() {
  // let pyValue1 = parseInt($("input:radio[class=py-1]:checked").val());
  // if (pyValue1 !== parseInt($("input:radio[class=py-1]:checked").val())) {
  //   pyValue1 = 0;
  // }  
  // let pyValue2 = parseInt($("input:radio[class=py-2]:checked").val());
  // if (pyValue2 !== parseInt($("input:radio[class=py-2]:checked").val())) {
  //   pyValue2 = 0;
  // }  
  // let pyValue3 = parseInt($("input:radio[class=py-3]:checked").val());
  // if (pyValue3 !== parseInt($("input:radio[class=py-3]:checked").val())) {
  //   pyValue3 = 0;
  // }  
  // let pyValue4 = parseInt($("input:radio[class=py-4]:checked").val());
  // if (pyValue4 !== parseInt($("input:radio[class=py-4]:checked").val())) {
  //   pyValue4 = 0;
  // }  
  // let pyValue5 = parseInt($("input:radio[class=py-5]:checked").val());
  // if (pyValue5 !== parseInt($("input:radio[class=py-5]:checked").val())) {
  //   pyValue5 = 0;
  // }

  //Python radio button values
  let pyValueQ1;
  if (parseInt($("input:radio[class=py-1]:checked").val())) {
    pyValueQ1 = parseInt($("input:radio[class=py-1]:checked").val());
  } else {
    pyValueQ1 = 0;
  } 
  let pyValueQ2;
  if (parseInt($("input:radio[class=py-2]:checked").val())) {
    pyValueQ2 = parseInt($("input:radio[class=py-2]:checked").val());
  } else {
    pyValueQ2 = 0;
  }
  let pyValueQ3;
  if (parseInt($("input:radio[class=py-3]:checked").val())) {
    pyValueQ3 = parseInt($("input:radio[class=py-3]:checked").val());
  } else {
    pyValueQ3 = 0;
  }
  let pyValueQ4;
  if (parseInt($("input:radio[class=py-4]:checked").val())) {
    pyValueQ4 = parseInt($("input:radio[class=py-4]:checked").val());
  } else {
    pyValueQ4 = 0;
  }
  let pyValueQ5;
  if (parseInt($("input:radio[class=py-5]:checked").val()))  {
    pyValueQ5 = parseInt($("input:radio[class=py-5]:checked").val());
  } else {
    pyValueQ5 = 0;
  }
  let totalPyValue = pyValueQ1 + pyValueQ2 + pyValueQ3 + pyValueQ4 + pyValueQ5;
  console.log("python " + totalPyValue);

  //Java radio button values
  let javaValueQ1;
  if (parseInt($("input:radio[class=java-1]:checked").val())) {
    javaValueQ1 = parseInt($("input:radio[class=java-1]:checked").val());
  } else {
    javaValueQ1 = 0;
  }

  let javaValueQ2;
  if (parseInt($("input:radio[class=java-2]:checked").val())) {
    javaValueQ2 = parseInt($("input:radio[class=java-2]:checked").val());
  } else {
    javaValueQ2 = 0;
  }

  let javaValueQ4;
  if (parseInt($("input:radio[class=java-4]:checked").val())) {
    javaValueQ4 = parseInt($("input:radio[class=java-4]:checked").val());
  } else {
    javaValueQ4 = 0;
  }
  let javaValueQ5;
  if (parseInt($("input:radio[class=java-5]:checked").val())) {
    javaValueQ5 = parseInt($("input:radio[class=java-5]:checked").val());
  } else {
    javaValueQ5 = 0;
  }
  let totalJavaValue = javaValueQ1 + javaValueQ2 + javaValueQ4 + javaValueQ5;
  console.log("java " + totalJavaValue);

  //Javascript radio button values
  let jsValueQ1;
  if (parseInt($("input:radio[class=js-1]:checked").val())) {
    jsValueQ1 = parseInt($("input:radio[class=js-1]:checked").val());
  } else {
    jsValueQ1 = 0;
  }
  let jsValueQ3;
  if (parseInt($("input:radio[class=js-3]:checked").val())) {
    jsValueQ3 = parseInt($("input:radio[class=js-3]:checked").val());
  } else {
    jsValueQ3 = 0;
  }
  let totalJsValue = jsValueQ1 + jsValueQ3;
  console.log("js " + totalJsValue);

  if (totalPyValue > totalJsValue && totalPyValue > totalJavaValue) {
    $("#python").show();
    $("#java").hide();
    $("#javascript").hide();
  };
};

$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();

    let pyValueQ1;
    if (parseInt($("input:radio[class=py-1]:checked").val())) {
      pyValueQ1 = parseInt($("input:radio[class=py-1]:checked").val());
    } else {
      pyValueQ1 = 0;
    } 
    let pyValueQ2;
    if (parseInt($("input:radio[class=py-2]:checked").val())) {
      pyValueQ2 = parseInt($("input:radio[class=py-2]:checked").val());
    } else {
      pyValueQ2 = 0;
    }
    let pyValueQ3;
    if (parseInt($("input:radio[class=py-3]:checked").val())) {
      pyValueQ3 = parseInt($("input:radio[class=py-3]:checked").val());
    } else {
      pyValueQ3 = 0;
    }
    let pyValueQ4;
    if (parseInt($("input:radio[class=py-4]:checked").val())) {
      pyValueQ4 = parseInt($("input:radio[class=py-4]:checked").val());
    } else {
      pyValueQ4 = 0;
    }
    let pyValueQ5;
    if (parseInt($("input:radio[class=py-5]:checked").val()))  {
      pyValueQ5 = parseInt($("input:radio[class=py-5]:checked").val());
    } else {
      pyValueQ5 = 0;
    }

    let totalPyValue = pyValueQ1 + pyValueQ2 + pyValueQ3 + pyValueQ4 + pyValueQ5;

    let javaValueQ1;
    if (parseInt($("input:radio[class=java-1]:checked").val())) {
      javaValueQ1 = parseInt($("input:radio[class=java-1]:checked").val());
    } else {
      javaValueQ1 = 0;
    }

    let javaValueQ2;
    if (parseInt($("input:radio[class=java-2]:checked").val())) {
      javaValueQ2 = parseInt($("input:radio[class=java-2]:checked").val());
    } else {
      javaValueQ2 = 0;
    }

    let javaValueQ4;
    if (parseInt($("input:radio[class=java-4]:checked").val())) {
      javaValueQ4 = parseInt($("input:radio[class=java-4]:checked").val());
    } else {
      javaValueQ4 = 0;
    }
    let javaValueQ5;
    if (parseInt($("input:radio[class=java-5]:checked").val())) {
      javaValueQ5 = parseInt($("input:radio[class=java-5]:checked").val());
    } else {
      javaValueQ5 = 0;
    }
    let totalJavaValue = javaValueQ1 + javaValueQ2 + javaValueQ4 + javaValueQ5;

    let jsValueQ1;
    if (parseInt($("input:radio[class=js-1]:checked").val())) {
      jsValueQ1 = parseInt($("input:radio[class=js-1]:checked").val());
    } else {
      jsValueQ1 = 0;
    }
    let jsValueQ3;
    if (parseInt($("input:radio[class=js-3]:checked").val())) {
      jsValueQ3 = parseInt($("input:radio[class=js-3]:checked").val());
    } else {
      jsValueQ3 = 0;
    }
    let totalJsValue = jsValueQ1 + jsValueQ3;

    console.log("Python " + totalPyValue);
    console.log("Java " + totalJavaValue);
    console.log("Js " + totalJsValue);
    resultGenerator();
  });
});



