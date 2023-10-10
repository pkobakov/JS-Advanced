function validate() {
   let input = document.getElementById('email');
   
   input.addEventListener('change', onChange);
   
   function onChange(event){
     
    let email = input.value;
    let pattern = /[A-Za-z]*@[a-z]+\.[a-z]+/g
  
    if(!pattern.test(email)){
       input.classList.add('error');
    } else {
        input.classList.remove('error');
    }
   }
}
