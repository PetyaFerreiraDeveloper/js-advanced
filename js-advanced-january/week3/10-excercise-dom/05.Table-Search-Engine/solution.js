function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchFieldElement = document.getElementById('searchField');
      searchText = searchFieldElement.value.toLowerCase();
      
      let rows = document.querySelectorAll('tbody tr');
      for (let row of rows) {
         let rowText = row.textContent.toLowerCase();
         if (row.classList.contains('select')) {
            row.classList.remove('select');
         }
         if (rowText.includes(searchText)) {  
            row.classList.add('select');
         }
      }

      searchFieldElement.value = '';
   }
}