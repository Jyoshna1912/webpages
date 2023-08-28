let txt = document.getElementById('txt');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill-one');
let hill4 = document.getElementById('h4');
let hill5 = document.getElementById('h5');

window.addEventListener('scroll', ()=>{

    let value= window.scrollY;
    txt.style.marginTop= value*2.5 + 'px';
    leaf.style.left =value* 1.5   + 'px';
    leaf.style.top  = value* -1.5 + 'px';
    hill5.style.left= value* 1.5  + 'Px';
    hill4.style.left= value* -1.5 + 'Px';
})