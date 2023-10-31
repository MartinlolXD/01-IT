function forCycle() {

    let userInput = parseInt(document.getElementById("cycleInput").value)

        let output =""

        for(let i = 0; i < userInput; i++) {
     output = output+ "M"
     }

     document.getElementById("outputH").innerHTML = output

}

function sumNumbers() {
 
    let inputNumber = parseInt(document.getElementById("inputNumber").value)
     outputNumber = 0
   
        for (let i = 0; i <= inputNumber; i++){
   
          outputNumber = outputNumber + i
   
        }
 
        document.getElementById("outputNumber").innerHTML = outputNumber
 
}