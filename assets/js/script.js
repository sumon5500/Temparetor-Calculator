// alert function practics
// alert(" Class no=5===In this i have learned");


// function getValue(){


//   var input1 = document.getElementById('foo1').value;
//   var input1= parseInt(input1)



//   var input2 = document.getElementById('foo2').value;
//   var input2 = parseInt(input2)

//   let inputAdd= input1 + input2;

//     var display = document.getElementById('boo');
    
    
//     display.innerHTML= inputAdd;
// }


function valueGet(){
  var cels = document.getElementById("cel").value;
  var cels = parseFloat(cels);
  

  let celsValue = (cels * 9/5) + 32;
  let celsValue1 = celsValue.toFixed(2);

  var farDisplay = document.getElementById("boo");
  farDisplay.innerHTML =cels +" Celsius" +" = " + celsValue1+ " Farenhite   ";

 // farenhite code start
  var far = document.getElementById("far").value;
  var far = parseFloat(far);
  

  var farValue = (far - 32) * 5/9;
  var farValue1 = farValue.toFixed(2);

  var celDisplay = document.getElementById("boo2");
  celDisplay.innerHTML= far +" Farenhite" +" = " + farValue1+ " Cellcius";


}


































// **********************
// function tempCal(){
//   let celInput = document.getElementById("cel").value;
//   let tempInput = document.getElementById("temp").value;

//   let display = document.getElementById("dis");

//   display.innerHTML = celInput;






// }























