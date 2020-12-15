const counter = document.querySelector('h1#counter')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const heart = document.querySelector('#heart')
const pause = document.querySelector('#pause')

console.log(counter)
// console.log(minus);
// console.log(plus);
 console.log(counter.textContent);

minus.addEventListener('click', function(evt) {
    evt.preventDefault();
    counter.textContent = parseInt(counter.textContent) - 1;
})

plus.addEventListener('click', function(evt) {
    evt.preventDefault();
    counter.textContent = parseInt(counter.textContent) + 1 ;
})

heart.addEventListener('click', function(evt) {
    evt.preventDefault();
    counter.textContent = parseInt(counter.textContent) + 1 ;
})

// time counter 
//  let run = true; 

let interval = setInterval(increment, 1000);
function increment(){
    //  while (run === true){
    counter.textContent = parseInt(counter.textContent) + 1 ;
    //  }
}

pause.addEventListener('click', function(evt) {
    evt.preventDefault();   
    
    if (pause.textContent === " pause "){
        clearInterval(interval);
        pause.textContent = " resume " ;
    } else if (pause.textContent === " resume "){
        interval = setInterval(increment, 1000);
        pause.textContent = " pause " ;
        
    }
    // reload();
})

