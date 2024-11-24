const start=document.querySelector('#start')
const stop=document.querySelector('#stop')

const getRandom=function(){
    const r=Math.floor(Math.random()*256);
    const g=(Math.floor(Math.random()*256));
    const b=(Math.floor(Math.random()*256));
    return `rgb(${r},${g},${b})`;
}
const setBackground=function(){
    let colors=getRandom();
    document.body.style.backgroundColor=colors;
}
let forStop;  
start.addEventListener('click',function(){
    forStop=setInterval(setBackground,1000);
})
stop.addEventListener('click',function(){
    clearInterval(forStop);
})