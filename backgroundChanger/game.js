const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
const div=document.querySelector('div');
const inner=div.innerHTML;

buttons.forEach(function(button){

  button.addEventListener('click',function(e){
    if(e.target.id==='grey'){
      div.style.color='black';
      body.style.backgroundColor='grey';
    }
    if(e.target.id==='white'){
      div.style.color='white'
      body.style.backgroundColor='black';
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor='blue';
    }
    if(e.target.id=='yellow'){
      div.style.color='black';
      body.style.backgroundColor=e.target.id;
    }
  });
})
  // console.log(events);