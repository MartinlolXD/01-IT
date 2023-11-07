const usersData = []


function calculatorBMI() {
    const weightInput = parseFloat(document.getElementById("weight").value)
    const heightInput =parseFloat(document.getElementById("height").value)


    const BMI = weightInput / ((heightInput * heightInput)).toFixed(1)
    console.log(BMI)



    if (weightInput <= 0 || heightInput <= 0) {
        document.getElementById("output").innerHTML = "Zadal jsi špatné číslo"
    } else if(BMI < 18.5) {
        document.getElementById("output").innerHTML = "Podváha"
        usersData.push("Podváha")
    }else if(BMI >= 18.5 && BMI < 25) {
        document.getElementById("output").innerHTML = "Normální"
        usersData.push("Normální váha")
    }else if(BMI >= 25 && BMI < 30) {
        document.getElementById("output").innerHTML = "Nadváha"
        usersData.push("Nadváha")
    }else if(BMI >= 30) {
        document.getElementById("output").innerHTML = "Obezita"
        usersData.push("Obezita")
    }

    document.getElementById("arrayOutput").innerHTML = usersData


}