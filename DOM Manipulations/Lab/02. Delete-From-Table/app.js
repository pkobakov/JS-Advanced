function deleteByEmail() {
   let emailToDelete = document.getElementsByName('email')[0].value;
   let emails = document.getElementById('customers')
                        .getElementsByTagName('td');

    let found = false;

   for (const currentEmail of emails) {
     
       if(currentEmail.textContent == emailToDelete){
          
          currentEmail.parentElement.remove(currentEmail);
          found = true;
       }
   }
     document.getElementById('result').textContent = found === true ? 'Deleted.' : 'Not found.';
}