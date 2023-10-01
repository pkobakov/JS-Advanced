function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchField = document.getElementById('searchField');
   let tableRow = Array.from(document.querySelectorAll('tbody tr'));

   function onClick() {

      let searchText = searchField.value;
      
      for (const row of tableRow) {
         let tableData = row.querySelectorAll('td');
         for (const td of tableData) {
            if (td.textContent !== null && td.textContent.includes(searchText)){
               row.classList.add('select'); break;
               debugger;

            } else{
               row.classList.remove('select');
            }

            
         }

      }
       searchField.value = '';
   }
}