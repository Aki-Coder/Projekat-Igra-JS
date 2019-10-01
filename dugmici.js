
function slova() {
    let dugmici = ["N","D","A","U","R","B","O","I","T","O","A","Z"];
    let i=0;
    for(i; i<=11;i++){
        let button = document.createElement("button");
        button.innerHTML = dugmici[i];
        let body =  document.getElementsByTagName("body")[0];
        body.appendChild(button);
        button.addEventListener("click",function () {
          console.log(this.innerHTML);
        });
    }
}

function onemoguci() {
    document.getElementById("prvi").disabled = true;
}

function onemoguci2() {
    document.getElementById("drugi").disabled = true;
}

function obe() {
    slova();
    onemoguci();
}
function obe2() {
    slova();
    onemoguci2();
}


