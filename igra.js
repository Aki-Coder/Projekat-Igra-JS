let bod = 0;


function sl1() {
    let slovo = document.createElement("I");
    slovo.innerText = "I ";
    bod+=2;
    document.body.appendChild(slovo);
}

function sl2() {
    let slovo2 = document.createElement("Đ");
    slovo2.innerText = "Đ ";
    bod+=2;
    document.body.appendChild(slovo2);
}
function sl3() {
    let slovo3 = document.createElement("Č");
    slovo3.innerText = "Č ";
    bod+=2;
    document.body.appendChild(slovo3);
}
function sl4() {
    let slovo4 = document.createElement("I");
    slovo4.innerText = "I ";
    bod+=2;
    document.body.appendChild(slovo4);
}
function sl5() {
    let slovo5 = document.createElement("V");
    slovo5.innerText = "V ";
    bod+=2;
    document.body.appendChild(slovo5);
}
function sl6() {
    let slovo = document.createElement("I");
    slovo.innerText = "I ";
    bod+=2;
    document.body.appendChild(slovo);
}
function sl7() {
    let slovo = document.createElement("K");
    slovo.innerText = "K ";
    bod+=2;
    document.body.appendChild(slovo);
}
function sl8() {
    let slovo = document.createElement("Z");
    slovo.innerText = "Z ";
    bod+=2;
    document.body.appendChild(slovo);
}
function sl9() {
    let slovo = document.createElement("K");
    slovo.innerText = "K ";
    bod+=2;
    document.body.appendChild(slovo);
}
function sl10() {
    let slovo = document.createElement("A");
    slovo.innerText = "A ";
    bod+=2;
    document.body.appendChild(slovo);
}
function sl11() {
    let slovo = document.createElement("B");
    slovo.innerText = "B ";
    bod+=2;
    document.body.appendChild(slovo);
}

function sl12() {
    let slovo = document.createElement("O");
    slovo.innerText = "O ";
    bod+=2;
    document.body.appendChild(slovo);
}

function prebroji() {
    alert("Trenutni broj bodva "+bod);
}

function blok1() {
    document.getElementById("1").disabled = true;
}

function blok2() {
    document.getElementById("2").disabled = true;
}
function blok3() {
    document.getElementById("3").disabled = true;
}
function blok4() {
    document.getElementById("4").disabled = true;
}

function blok5() {
    document.getElementById("5").disabled = true;
}

function blok6() {
    document.getElementById("6").disabled = true;
}

function blok7() {
    document.getElementById("7").disabled = true;
}

function blok8() {
    document.getElementById("8").disabled = true;
}

function blok9() {
    document.getElementById("9").disabled = true;
}
function blok10() {
    document.getElementById("10").disabled = true;
}

function blok11() {
    document.getElementById("11").disabled = true;
}

function blok12() {
    document.getElementById("12").disabled = true;
}


function obe() {
    sl1();
    blok1();
}

function obe2() {
    sl2();
    blok2();
}

function obe3() {
    sl3();
    blok3();
}
function obe4() {
    sl4();
    blok4();
}

function obe5() {
    sl5();
    blok5();
}
function obe6() {
    sl6();
    blok6();
}

function obe7() {
    sl7();
    blok7();
}

function obe8() {
    sl8();
    blok8();
}
function obe9() {
    sl9();
    blok9();
}

function obe10() {
    sl10();
    blok10();
}

function obe11() {
    sl11();
    blok11();
}
function obe12() {
    sl12();
    blok12();
}