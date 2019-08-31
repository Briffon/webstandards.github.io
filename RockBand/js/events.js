/*
 * events.js
 * 
*/

// Event Function
function minChars(event) {
    let target = event.target;
    let parent = target.parentElement;
    let error = '<label class="error">' + target.name + ' must be at least 8 chars.</label>';
    if (target.value.length < 8) {
      if(!parent.querySelector(".error")){
        parent.insertAdjacentHTML('beforeend',error);
      }
    } else {
      parent.removeChild(parent.querySelector(".error"));
    }
    
  }

  function messageChars(event) {
    let target = event.target;
    let parent = target.parentElement;
    let error = '<label class="error">' + target.name + ' must be at least 1 chars.</label>';
    if (target.value.length < 1) {
      if(!parent.querySelector(".error")){
        parent.insertAdjacentHTML('beforeend',error);
      }
    } else {
      parent.removeChild(parent.querySelector(".error"));
    }
    
  }

//validate form
function validateForm(event){
    event.preventDefault();

    let form = document.querySelector("form");
    let fields=form.querySelectorAll('.required');
console.log(fields)
    //check for valid values
    let valid = true;
    for(let i=0;i<fields.length;i++){
        if(!fields[i].value){valid=false;}
    }

    //open sumbit
    if(valid==true){
        let submit=form.querySelector('[type=submit]');
        submit.classList.remove('disabled')
    }else{
        submit.classList.add('disabled')
    }
}

function send(event){
    window.alert("Your message has been sent!");
}


  // Find Element(s) in DOM
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#msg");
let requiredFields=form.querySelectorAll('.required');
let submit = form.querySelector('[type=submit]');
let viewMore= document.querySelector('.button');

// Add Event Listener
name.addEventListener('blur',minChars);
email.addEventListener('blur',minChars);
message.addEventListener('blur',messageChars);

for(let i=0; i<requiredFields.length;i++){
    requiredFields[i].addEventListener('change',validateForm);
    requiredFields[i].addEventListener('input',validateForm);
}

submit.addEventListener('click',send);