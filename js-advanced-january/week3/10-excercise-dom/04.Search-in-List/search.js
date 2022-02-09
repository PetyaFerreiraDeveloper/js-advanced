function search() {
   let searchValue = document.getElementById('searchText').value.toLowerCase();
   if (searchValue !== '') {

      let resultEl = document.getElementById('result');
      
      let listItems = document.querySelectorAll('#towns li');
      let count = 0;
      for (let item of listItems) {
         let itemText = item.textContent.toLowerCase();
         
         if (itemText.includes(searchValue)) {
            count++;
            item.style.fontWeight = 'bold';
            item.style.textDecoration = 'underline';
         } 
      }
      document.getElementById('searchText').value = '';
      resultEl.textContent = `${count} matches found`;
      document.getElementById('searchText').addEventListener('click', clearStyles);
      function clearStyles() {
         for (let item of listItems) {
            item.style.textDecoration = 'none';
            resultEl.textContent = ``;
   
         }
      }
   }
   
}
