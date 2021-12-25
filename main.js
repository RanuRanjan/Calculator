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


// printOutput();
// console.log(printOutput("dfsjifj"));

var operation=document.getElementsByClassName("operator");
for(var i=0;i<operation.length;i++) {
   operation[i].addEventListener("click",function(){
        // alert("hhhhh")
        if(this.id=='clear'){
            printHistory("")
            printOutput("")
        }
      else if(this.id=="backspace"){
            var output=getOutput();
            if(output){
                output=output.substring(0,output.length-1)
                printOutput(output)
            }
        }

        else{
            var output=getOutput();
            var history=gethistory();
            // if(output!=""){
            //        if(isNaN(history[history.length-1])){
            //            history=history.substring(0,history.length-1)
            //        }
            // }
            if(output!=""){
               
                history=history+output;
            }
            if(this.id=="="){
                var result=eval(history)
                printOutput(result)
                printHistory("");
            }
            else{
                history=history+this.id
                printHistory(history)
                printOutput("")
            }
        }
   })
}


var numbers=document.getElementsByClassName("number");
for(var i=0;i<numbers.length;i++) {
   numbers[i].addEventListener("click",function(){
        // alert("hhhhh")
        var output= getOutput()
        if(output!=NaN){
            output=output+this.id
            printOutput(output)
        }
   })
}

