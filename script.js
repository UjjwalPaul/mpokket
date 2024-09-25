const btn = document.querySelector('button');
const popUp = document.querySelector('.pop-up');
const close =document.querySelector('.close');
const img = document.querySelector('img');

btn.addEventListener('click', () => {
    // alert("Hello World");
    popUp.style.display = 'flex';
    popUp.style.cursor = 'pointer';
});

close.addEventListener('click', () => {
    popUp.style.display = 'none';
    popUp.style.cursor = 'pointer';
});

popUp.addEventListener('click', (e) => {
    if (e.target !== img){
        popUp.style.display = 'none';
    }
});

