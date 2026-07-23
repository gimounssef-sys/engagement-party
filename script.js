
const e=document.querySelector('.envelope');
const flap=document.querySelector('.flap');
const seal=document.querySelector('.seal');
e.addEventListener('click',()=>{
 seal.animate([{transform:'translate(-50%,-50%) scale(1)'},{transform:'translate(-50%,-70%) scale(.85)',opacity:0}],{duration:500,fill:'forwards'});
 setTimeout(()=>{flap.style.transform='rotateX(180deg)'},250);
});
