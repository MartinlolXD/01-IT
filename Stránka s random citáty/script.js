function myFunction() {
    var things = ['Všechny řešení jsou ve finále jednoduchý, potom co na ně příjdeš.', 'Život je jako minecraft hardcore. Když zemřeš tak jsi mrtvej.', 'Život je občas život.', 'Když chceš stoupat, tak musíš jít po schodech nahoru, ne dolů.', 'Nikdy nemůžeš přijít pozdě, když nepřijdeš vůbec.', 'Polovina z ničeho je málo.', 'Když chceš jet nahoru, musíš občas zařadit zpátečku.', 'Když jste poslední, nejste první.', 'Rychlost je cesta.', 'Né nadarmo se říká, že by jste neměli přilévat oheň do ohně.'];
var thing = things[Math.floor(Math.random()*things.length)];

document.getElementById("output").innerHTML = thing
}


