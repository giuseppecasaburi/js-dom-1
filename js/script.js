const accesaImg = document.getElementById("luce-spenta");
const spentaImg = document.getElementById("luce-accesa");
const btnAccensione = document.getElementById("btn-accensione");

btnAccensione.addEventListener("click", function() {
    if (spentaImg.classList.contains("display")){
    accesaImg.classList.add("display");
    spentaImg.classList.remove("display");
    btnAccensione.innerHTML = "Spegni la luce";
    } else {
        spentaImg.classList.add("display")
        accesaImg.classList.remove("display");
        btnAccensione.innerHTML = "Accendi la luce";
    }   
})

