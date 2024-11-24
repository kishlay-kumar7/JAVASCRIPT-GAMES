const clock=document.querySelector('#clock')

let timeShow=false;

if(!timeShow){
    clock.innerHTML=`Click on start to 'start' `;
}

const showIt=function(){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
}
let date=null;
const start=document.querySelector('#start');
start.addEventListener('click',function(){
    timeShow=true;
  date=setInterval(showIt,1000);
})

const stop=document.getElementById('stop');
stop.addEventListener('click',function(){
        clearInterval(date)
        timeShow=false;
        clock.innerHTML='Click on start to start again';
},false)
