function populateTable(data) {
    const tbody = document.querySelector('#dataTable tbody');

    data.forEach(item => {
        const row = document.createElement('tr');

        const columns = ['Site', 'Guards', 'Time.In', 'Time.Out', 'N', 'T', 'D', 'Total', 'Extra', 'Grand Total'];

        columns.forEach(column => {
            const cell = document.createElement('td');
            const columnNames = column.split('.'); // Split nested column names
            let currentData = item;

            columnNames.forEach(colName => {
                currentData = currentData[colName];
            });

            cell.textContent = currentData;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });
}

// Fetch JSON data from the external file
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://saki789.github.io/Table/data.json')
        .then(response => response.json())
        .then(data => {
            // Call populateTable with the retrieved JSON data
            populateTable(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});
