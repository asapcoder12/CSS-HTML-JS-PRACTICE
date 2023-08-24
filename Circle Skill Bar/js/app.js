let number = document.querySelector('#value');
let countValue = 0;

let timer = setInterval(RunAnimation, 40);

function RunAnimation(){
    if (countValue == 50) {
        clearInterval(timer);
    }
    else{
        countValue += 1;
        number.innerHTML = countValue + "%";
    }
}
