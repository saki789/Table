// Function to fetch JSON data and populate the table
function loadJSONAndPopulateTable() {
    fetch('https://saki789.github.io/Table/data.json') // Replace with your JSON file URL
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            populateTable(data.data); // Assuming data is an array in the JSON
        })
        .catch(error => console.error('Error loading JSON:', error));
}

// Function to populate the table with JSON data
function populateTable(data) {
    const tbody = document.querySelector('#dataTable tbody');

    data.forEach(item => {
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
    loadJSONAndPopulateTable();
});
