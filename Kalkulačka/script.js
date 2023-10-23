function checkResult() {
    const inputNumber = (document.getElementById("numberCheck").value)
    if(inputNumber < 10) {
        console.log("Menší než 10")
}
else if (inputNumber > 10) {
    console.log ("Větší než 10")
}
else if (inputNumber == 10) {
    console.log ("Je rovno 10")
}
else {
    console.log ("Nesprávný znak")
}