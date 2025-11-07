let numeriGenerati = 0
let numeroGenerato = 0
let arrayNumeri = []
let numeroUno = document.querySelector(".numeri h5:nth-child(1)")
let numeroDue = document.querySelector(".numeri h5:nth-child(2)")
let numeroTre = document.querySelector(".numeri h5:nth-child(3)")
let numeroQuattro = document.querySelector(".numeri h5:nth-child(4)")
let numeroCinque = document.querySelector(".numeri h5:nth-child(5)")
let bottoneStart = document.querySelector(".bg-primary")
let bottoneSubmit = document.querySelector(".bg-secondary")



// console.log(bottoneStart)
// console.log(numeroUno, numeroDue, numeroTre, numeroQuattro, numeroCinque) Debug

bottoneStart.addEventListener("click", generatoreNumeri)
// bottoneSubmit.addEventListener("click", confrontoNumeri)
bottoneSubmit.disabled = true

function generatoreNumeri() {
    bottoneStart.disabled = true

    while (numeriGenerati < 5) {
        numeroGenerato = Math.floor(Math.random() * 100 + 1)
        arrayNumeri.push(numeroGenerato)
        numeriGenerati++
    }
    console.log(arrayNumeri)
    numeroUno.innerHTML = arrayNumeri[0]
    numeroDue.innerHTML = arrayNumeri[1]
    numeroTre.innerHTML = arrayNumeri[2]
    numeroQuattro.innerHTML = arrayNumeri[3]
    numeroCinque.innerHTML = arrayNumeri[4]

    let inputNumerici = document.querySelectorAll('.numeri input[type="number"]');
    inputNumerici.forEach(input => input.disabled = true);
    numeriGenerati = 0
    arrayNumeri = []
    setTimeout(() => {
        numeroUno.innerHTML = "";
        numeroDue.innerHTML = "";
        numeroTre.innerHTML = "";
        numeroQuattro.innerHTML = "";
        numeroCinque.innerHTML = "";
        inputNumerici.forEach(input => input.disabled = false);
        // bottoneStart.disabled = false
        bottoneSubmit.disabled = false
    }, 1000);

}

// function confrontoNumeri()