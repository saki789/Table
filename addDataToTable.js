$(document).ready(function () {
    // Sample data with 20 rows
    var data = [
        { siteName: 'Site A', guardName: 'John Doe', hoursIn: '08:00', hoursOut: '16:00', n: 2, t: 1, d: 0, total: 8, extra: 0, grandTotal: 8 },
        { siteName: 'Site B', guardName: 'Jane Smith', hoursIn: '07:30', hoursOut: '15:30', n: 2, t: 0, d: 0, total: 8, extra: 0, grandTotal: 8 },
        { siteName: 'Site C', guardName: 'Bob Johnson', hoursIn: '08:15', hoursOut: '16:15', n: 2, t: 1, d: 0, total: 8, extra: 0, grandTotal: 8 },
        { siteName: 'Site A', guardName: 'Alice Brown', hoursIn: '07:45', hoursOut: '15:45', n: 2, t: 0, d: 0, total: 8, extra: 0, grandTotal: 8 },
        { siteName: 'Site D', guardName: 'Eva Wilson', hoursIn: '08:30', hoursOut: '16:30', n: 2, t: 1, d: 0, total: 8, extra: 0, grandTotal: 8 },
        { siteName: 'Site B', guardName: 'Mike Davis', hoursIn: '08:00', hoursOut: '16:00', n: 2, t: 0, d: 0, total: 8, extra: 0, grandTotal: 8 },
        { siteName: 'Site C', guardName: 'Chris Lee', hoursIn: '07:30', hoursOut: '15:30', n: 2, t: 1, d: 0, total: 8, extra: 0, grandTotal: 8 },
        { siteName: 'Site A', guardName: 'Linda Hall', hoursIn: '08:15', hoursOut: '16:15', n: 2, t: 0, d: 0, total: 8, extra: 0, grandTotal: 8 },
        { siteName: 'Site D', guardName: 'Tom Johnson', hoursIn: '08:30', hoursOut: '16:30', n: 2, t: 1, d: 0, total: 8, extra: 0, grandTotal: 8 },
        { siteName: 'Site B', guardName: 'Grace Wilson', hoursIn: '07:45', hoursOut: '15:45', n: 2, t: 0, d: 0, total: 8, extra: 0, grandTotal: 8 },
        // Add 10 more rows with data
    ];

    var tbody = $('table tbody');

    // Function to add data rows to the table
    function addDataToTable() {
        for (var i = 0; i < data.length; i++) {
            var row = '<tr>' +
                '<td data-column="siteName">' + data[i].siteName + '</td>' +
                '<td data-column="guardName">' + data[i].guardName + '</td>' +
                '<td data-column="hoursIn">' + data[i].hoursIn + '</td>' +
                '<td data-column="hoursOut">' + data[i].hoursOut + '</td>' +
                '<td data-column="n">' + data[i].n + '</td>' +
                '<td data-column="t">' + data[i].t + '</td>' +
                '<td data-column="d">' + data[i].d + '</td>' +
                '<td data-column="total">' + data[i].total + '</td>' +
                '<td data-column="extra">' + data[i].extra + '</td>' +
                '<td data-column="grandTotal">' + data[i].grandTotal + '</td>' +
                '</tr>';
            tbody.append(row);
        }
    }

    // Call the function to add data to the table
    addDataToTable();
});
