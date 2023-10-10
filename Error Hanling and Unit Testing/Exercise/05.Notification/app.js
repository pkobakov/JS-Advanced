function notify(message){

  let divRef = document.getElementById('notification');
  divRef.textContent = message;
  divRef.style.display = 'block';


  divRef.addEventListener('click', toggleVisibility);
debugger
  function toggleVisibility(){
      divRef.style.display = 'none';
  }
}
