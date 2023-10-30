function checkResult() {
    const inputNumber = (document.getElementById("numberCheck").value)
    if(inputNumber > 2005) {
        console.log("Dětský uživatel")
    }else if (inputNumber < 2005 ) {
        console.log("Dospělý uživatel")
    }
    else if (inputNumber == 2005) {
        console.log("Dospělý uživatel")
    }
} 