function populateTable(data) {
    const tbody = document.querySelector('#dataTable tbody');

    data.forEach(item => {
        const row = document.createElement('tr');

        // Define the correct column order
        const columns = ['Site', 'Guards', 'Time', 'N', 'T', 'D', 'Total', 'Extra', 'Grand Total'];

        columns.forEach(columnName => {
            const cell = document.createElement('td');
            
            // Handle the "Time" column and the nested "In" and "Out" columns
            if (columnName === 'Time') {
                const timeCell = document.createElement('td');
                timeCell.textContent = item['Time']['In'];
                row.appendChild(timeCell);

                const outTimeCell = document.createElement('td');
                outTimeCell.textContent = item['Time']['Out'];
                row.appendChild(outTimeCell);
            } else {
                cell.textContent = item[columnName];
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
