function gethistory(){
   return document.getElementById("his-val").innerText;
}

function printHistory(num){
    return document.getElementById("his-val").innerText = num;
}
// printHistory("9*9+8")
function getOutput(){
    return document.getElementById("output-val").innerText;
}
function printOutput(num){
   if(num==""){
     document.getElementById("output-val").innerText=num;
   }else{
    //  document.getElementById("output-val").innerText= getFormattedNumber(num);
     document.getElementById("output-val").innerText=num;
   }
}

//  function getFormattedNumber(num){
//      var n=Number(num);
//     var value=n.toLocaleString("en")
//     return value
//     }


printOutput("8555545544");
// console.log(printOutput("dfsjifj"));

var operation=document.getElementsByClassName("operator");
for(var i=0;i<operation.length;i++) {
   operation[i].addEventListener("click",function(){
        alert("hhhhh")
   })
}


var numbers=document.getElementsByClassName("number");
for(var i=0;i<numbers.length;i++) {
   numbers[i].addEventListener("click",function(){
        alert("hhhhh")
   })
}