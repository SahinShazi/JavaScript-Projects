let qrinput = document.getElementById('qr-input');
let qrbutton = document.getElementById('qr-button');
let qrimg = document.getElementById('qr-img');


//button 
qrbutton.addEventListener('click', ()=> {
  let inputValue = qrinput.value;
  
  if(!inputValue){
    alert("Please enter any link or text");
  } else{
    qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150*150&data=${inputValue}`;
  }
})