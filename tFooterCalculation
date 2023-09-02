$(document).ready(function () {
    // Load data from the external JavaScript file
    $.getScript('https://raw.githubusercontent.com/saki789/Table/main/addDataToTable.js', function () {
        // Now, the 'data' array from the external script is accessible here

        var tbody = $('table tbody');
        var footer = $('table tfoot');

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

        // Function to calculate and update totals in the footer
        function updateTotals() {
            var totalSiteCount = 0;
            var totalGuardCount = 0;
            var totalHours = 0;
            var totalGrandTotal = 0;

            data.forEach(function (row) {
                totalSiteCount++;
                totalGuardCount++;
                totalHours += parseFloat(row.total); // Assuming "total" contains the total hours
                totalGrandTotal += parseFloat(row.grandTotal);
            });

            // Update the footer cells with the calculated totals
            $('#totalSites').text(totalSiteCount);
            $('#totalGuards').text(totalGuardCount);
            $('#totalHoursIn').text(totalHours.toFixed(2)); // Update with the correct column for "Total Hours In"
            $('#totalGrandTotal').text(totalGrandTotal.toFixed(2));
        }

        // Call the function to calculate and update totals
        updateTotals();
    });
});
