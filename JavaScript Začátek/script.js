function myFunction() {
    var variable1;
    let variable2;
    const variable3 =3;
    variable4 = "ahoj"
    variable5 = 5
    variable6 = true

    const userFirstName = document.getElementById("firstName").value
    const userLastName = document.getElementById("lastName").value
    const userFullName = userFirstName + " " + userLastName
    document.getElementById("fullName").value = userFullName
    console.log (userFirstName)
}