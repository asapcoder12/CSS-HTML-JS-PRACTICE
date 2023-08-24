let hrs = document.querySelector('#hrs');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');

UpdateClock();

let timer = setInterval(UpdateClock, 1000);

function UpdateClock(){
    let currentTime = new Date();
    hrs.innerHTML = currentTime.getHours() < 10 ? "0" + currentTime.getHours() : currentTime.getHours();
    min.innerHTML = currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds() < 10 ? "0" + currentTime.getSeconds() : currentTime.getSeconds();
}