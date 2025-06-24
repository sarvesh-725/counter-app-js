let c = 0;
let errorTimeout;

const counterVal = document.querySelector('#counterval');
const err = document.getElementById('error-msg');
const inc = document.getElementById('b1');
const dec = document.getElementById('b2');
const reset = document.getElementById('b3');


function updateCount() {
    counterVal.innerText = c;
    // dec.disabled = (c<=0);
}
updateCount();

function clearError() {
    err.innerText = "";
    clearTimeout(errorTimeout);
}
inc.addEventListener('click', () => {
    c++;
    clearError();
    updateCount();
});
dec.addEventListener('click', () => {
    if (c - 1 < 0) {
        err.innerText = "Counter cannot be negative."

        errorTimeout = setTimeout(() => {
            clearError();
        }, 2000);
    }
    else {
        c--;
        clearError();
        updateCount();
    }
})
reset.addEventListener('click', () => {
    c = 0;
    clearError();
    updateCount();
})

document.addEventListener('click', (e) => {
    if (e.target != dec) {
        clearError();
    }
})

document.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowUp') inc.click();
    if(e.key === 'ArrowDown') dec.click();
    if (e.key === 'r') reset.click();
})