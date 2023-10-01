function search() {
   let searchField = document.getElementById('searchText').value;
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let counter = 0;

   towns.forEach(town => {
      
      if (town.textContent.includes(searchField)) {
         
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';

         return counter++;
      } 

      town.style.fontWeight = 'normal';
      town.style.textDecoration = 'none'
   });

   document.getElementById('result').textContent = `${counter} matches found`; 
}
