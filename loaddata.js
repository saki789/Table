function populateTable(data) {
    const tbody = document.querySelector('#dataTable tbody');

    data.forEach(item => {
        const row = document.createElement('tr');

        const columns = ['Site', 'Guards', ['In', 'Out'], 'N', 'T', 'D', 'Total', 'Extra', 'Grand Total'];

        columns.forEach(column => {
            if (Array.isArray(column)) {
                const subColumnGroup = document.createElement('td');
                column.forEach(subColumnName => {
                    const subColumnCell = document.createElement('div');
                    subColumnCell.textContent = item[subColumnName];
                    subColumnGroup.appendChild(subColumnCell);
                });
                row.appendChild(subColumnGroup);
            } else {
                const cell = document.createElement('td');
                cell.textContent = item[column];
                row.appendChild(cell);
            }
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
