const forms = document.querySelector('form');
// console.log(form)
forms.addEventListener('submit', function (e) {
  e.preventDefault();
  // console.log(e.target);
  const h=parseInt(document.querySelector('#height').value);
  const w=parseInt(document.querySelector('#weight').value);
  
  let errorMessage='';
  if(isNaN(w)|| w<0){
    errorMessage+='Please enter valid weight!';
  }
  if(isNaN(h)|| h<0){
    errorMessage+='Please enter valid height';
  }
  if(errorMessage){
    document.querySelector('#results').innerHTML=errorMessage;
    document.querySelector('#results').style.color='blue';
    document.querySelector('#results').style.fontSize='20px'
  }else{
    let bmi = (w / ((h * h) / 10000)).toFixed(2);

    document.querySelector('#results').innerHTML=`<span>BMI: ${bmi}</span>`;
    document.querySelector('#results').style.color='gold';
    if(bmi<18.6){
        document.querySelector('#results').innerHTML+=`<br>You are in underweight category`;
    }
    else if(bmi>=18.6 && bmi<=24.9){
        document.querySelector('#results').innerHTML+=`<br>You are under normalweight`;
    }
    else if(bmi>24.9){
        document.querySelector('#results').innerHTML+=`<br>YOU ARE OVERWEIGHT!!`;
        document.querySelector('#results').style.color='red';  // Correct color change
    }
  }
});
