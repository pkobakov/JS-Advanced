function create(words) {
   let divElement = document.getElementById('content');
   
   for(let word of words) 
   {
      let newParagraph = document.createElement('p');
      newParagraph.textContent = word;
      newParagraph.style.display = 'none';

      let newDiv = document.createElement('div');
      newDiv.appendChild(newParagraph);
      newDiv.addEventListener('click', hiddenParagraph)
      
      divElement.appendChild(newDiv);
   }

   function hiddenParagraph(){
      let currentP = this.children[0];
      currentP.style.display = 'block';
   }
}