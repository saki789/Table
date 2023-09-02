// Function to populate the table with JSON data
function populateTable(data) {
  const tbody = document.querySelector('table tbody');
  
  data.data.forEach(item => {
    const row = document.createElement('tr');
    
    // Create table cells for each data property
    const columns = ['siteName', 'guardName', 'hoursIn', 'hoursOut', 'n', 't', 'd', 'total', 'extra', 'grandTotal'];
    columns.forEach(columnName => {
      const cell = document.createElement('td');
      cell.textContent = item[columnName];
      row.appendChild(cell);
    });
    
    tbody.appendChild(row);
  });
}

// Load JSON data and populate the table when the page is ready
document.addEventListener('DOMContentLoaded', () => {
  loadJSON(populateTable);
});
