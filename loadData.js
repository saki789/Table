// Function to load JSON data from a URL and populate the table
function loadJSONAndPopulateTable() {
  fetch('https://saki789.github.io/Table/data.json')
    .then(response => response.json())
    .then(data => {
      populateTable(data);
    })
    .catch(error => console.error('Error loading JSON:', error));
}

// Load JSON data and populate the table when the page is ready
document.addEventListener('DOMContentLoaded', () => {
  loadJSONAndPopulateTable();
});
