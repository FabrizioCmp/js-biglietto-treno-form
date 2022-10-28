
// variables-constants declaration
const distance = document.getElementById("distance");
const fullName = document.getElementById("fullname");
const age = document.getElementById("age");
const btnGenerateEl = document.getElementById("btn_generate");
const nameEl = document.getElementById("name");
const typeEl = document.getElementById("type");
const cabEl = document.getElementById("cab");
const codeEl = document.getElementById("code");
const priceEl = document.getElementById("price");



// compute price with discount on button click
btnGenerateEl.addEventListener("click", function () {
    const ageN = Number(age.value);
    const distanceN = Number(distance.value);
    let price = distanceN * 0.21;
    let ticketType = "Biglietto Standard"

    console.log(ageN);
    console.log(distanceN);

    if (ageN === 0.8) {
        price = price * ageN;
        ticketType = "Ridotto minorenni";
    } else if (ageN === 0.6) {
        price = price * 0.6;
        ticketType = "Ridotto over-65";
    }

    console.log(" prezzo con sconto" ,price);

    nameEl.innerHTML = fullName.value;
    typeEl.innerHTML =  ticketType;
    cabEl.innerHTML = Math.floor(Math.random() * 10) + 1;
    codeEl.innerHTML = Math.floor(1000 + Math.random() * 9000);
    priceEl.innerHTML = price;
});
