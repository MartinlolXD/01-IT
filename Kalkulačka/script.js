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



/// Pole (array)

const classMates = ["FrantaBaroch", "Tomaš", "FrantaŠestách"]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const

const cM2 = [];
cM2[0]="FrantaBaroch"
cM2[1]="FrantaŠestách"
cM2[2]="TomašOubrecht"
cM2[3]="PetrSýkora"
cM2[4]="AdamŠvarc"
cM2[5]="KristiánBotek"
cM2[6]="Tony"
cM2[7]="HonzaGrás"
cM2[8]="RudolfPaul"
cM2[9]="MichalBezděk"
cM2[10]="LukášŠifalda"

console.log (cM2) // NE!


function forLoop() {
    for(let i =0; i < cM2.length i++){
    console.log("cM2[i]")
  }
}