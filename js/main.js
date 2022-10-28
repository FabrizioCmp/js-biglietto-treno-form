
// variables-constants declaration
const distance = document.getElementById("distance");
const fullName = document.getElementById("fullname");
const age = document.getElementById("age");
const btnGenerateEl = document.getElementById("btn_generate");
const btnDeletEl = document.getElementById("btn_delete");
const nameEl = document.getElementById("name");
const typeEl = document.getElementById("type");
const cabEl = document.getElementById("cab");
const codeEl = document.getElementById("code");
const priceEl = document.getElementById("price");
const detailsEl = document.getElementById("details");
const minorenniImgEl = document.getElementById("minorenni_img");
const maggiorenniImgEl = document.getElementById("maggiorenni_img");
const overImgEl = document.getElementById("over_img");



// compute price with discount on button(Genera) click
btnGenerateEl.addEventListener("click", function () {

    // default price: MAGGIORENNI
    const ageN = Number(age.value);
    const distanceN = Number(distance.value);
    let price = distanceN * 0.21;
    let ticketType = "Biglietto Standard"

    // default img: MAGGIORENNI
    overImgEl.classList.add("d-none");
    maggiorenniImgEl.classList.remove("d-none");
    minorenniImgEl.classList.add("d-none");

    console.log(ageN);
    console.log(distanceN);

    // conditions by age
    if (ageN === 0.8) {
        price = price * ageN;
        ticketType = "Ridotto minorenni";
        minorenniImgEl.classList.remove("d-none");
        maggiorenniImgEl.classList.add("d-none");
        overImgEl.classList.add("d-none");
    } else if (ageN === 0.6) {
        price = price * 0.6;
        ticketType = "Ridotto over-65";
        overImgEl.classList.remove("d-none");
        maggiorenniImgEl.classList.add("d-none");
        minorenniImgEl.classList.add("d-none");
    }
    
    //display details of the ticket
    nameEl.innerHTML = fullName.value;
    typeEl.innerHTML =  ticketType;
    cabEl.innerHTML = Math.floor(Math.random() * 10) + 1;
    codeEl.innerHTML = Math.floor(1000 + Math.random() * 9000);
    priceEl.innerHTML = price;

    detailsEl.classList.add("d-block");
    detailsEl.classList.remove("d-none");

});

// Clear details section on button(Annulla) click
btnDeletEl.addEventListener("click", function() {
    detailsEl.classList.add("d-none");
    detailsEl.classList.remove("d-block");

});