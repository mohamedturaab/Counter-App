 // Selecting the value and checking //**
 
 const value = document.querySelector('.value');

 // selecting Each buttons  //
const btnIncrement = document.querySelector('increment');
const btnDecrement = document.querySelector('.decrement');
const btnReset = document.querySelector('.reset');

let count = 0;

// click event for increment //

btnIncrement.addEventListener('click',()=>{
    count++;
    value.textContent = count;
})

// click event for decrement

btnDecrement.addEventListener('click',()=>{
    count--;
    value.textContent = count;
})

// click event for reset 

btnReset.addEventListener('click',()=>{
    count = 0;
    value.textContent = count
})