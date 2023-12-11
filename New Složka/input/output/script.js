


function conversation (){
    hello()
    howAreYou()
}



function hello () {
document.getElementById("conOutput").innerHTML = "Ahoj lidi"

document.getElementById("iConOutput").value = "Ahoj lidi"
}


function howAreYou (){
    console.log("Jak se máš?")
    document.getElementById("conOutput").innerHTML += "Jak se máte?"

    document.getElementById("iConOutput").value = "Jak se máte? "
}

