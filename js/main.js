
// variables declaration
const distance = document.getElementById("distance");
const fullName = document.getElementById("fullname");
const age = document.getElementById("age");
const btnGenerate = document.getElementById("btn_generate");

// compute price with discount on button click
btnGenerate.addEventListener("click", function () {
    const ageN = Number(age.value);
    const distanceN = Number(distance.value);
    let price = distanceN * 0.21;

    console.log(ageN);
    console.log(distanceN);

    if (ageN === 0.8) {
        price = price * ageN;
    } else if (ageN === 0.6) {
        price = price * 0.6;
    }

    console.log(" prezzo con sconto" ,price);

});

