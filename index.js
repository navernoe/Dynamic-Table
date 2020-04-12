import dataTable from "./data/tableData.json";

document.addEventListener("DOMContentLoaded", function() { 
    const dynamicTable = document.getElementById("dynamic-table");
    const columns = dataTable.columns;
    const rows = dataTable.rows;
    
    const columnsHead = document.createElement("tr");
    columns.forEach(column => {
        const columnHead = document.createElement("th");
        columnsHead.append(column);
        columnsHead.append(columnHead);
    });

    dynamicTable.append(columnsHead);

    rows.forEach(row => {
        const rowEl = document.createElement("tr");
        row.forEach(cell => {
            const cellEl = document.createElement("td");
            cellEl.append(cell);
            rowEl.append(cellEl);
        });
        dynamicTable.append(rowEl);
    })
});