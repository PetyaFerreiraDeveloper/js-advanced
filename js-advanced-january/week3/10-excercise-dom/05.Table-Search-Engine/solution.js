function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchText = document.getElementById('searchField').value.toLowerCase();
      
      let rows = document.querySelectorAll('tbody tr');
      for (let row of rows) {
         let rowText = row.textContent.toLowerCase();
         row.classList.add('select');
      }
   }
}