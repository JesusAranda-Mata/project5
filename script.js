let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');

let count = 000;

addCount.addEventListener('click', incrementCounter);

lowerCount.addEventListener('click', lowerCounter);

function incrementCounter() {
count++;
counter.innerHTML = count;
    if (counter.innerHTML == "000"){
    counter.style.color = '#d0d0d0';
    } 
    else if (counter.innerHTML > "000"){
    counter.style.color = '#be1d1d';
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'});
}


function lowerCounter() {
    count--;
    counter.innerHTML = count;
    if (counter.innerHTML == "0"){
        counter.style.color = "#d0d0d0";
    }
    else if (counter.innerHTML < "0"){
        counter.style.color = '#e81616';
    }
     counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'});
}