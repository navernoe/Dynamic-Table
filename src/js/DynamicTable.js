import { sortBy } from "lodash";

export default class DynamicTable {
    constructor(data) {
        this.table = document.getElementById("dynamic-table");
        this.columns = data.columns;
        this.rows = data.rows;
        this.cells = [];
        this.captionText = data.name;
        this.sortDirection = {};
        this.columnsHead = this.generateColumnsHead();
        this.createTable(this.rows);
    }

    search(searchValue) {
        this.cells.forEach(cell => {
            if ( cell.textContent == searchValue ) {
                cell.classList.add("found-by-search");
            } else {
                cell.classList.remove("found-by-search");
            }
        })
    }


    setSortByColumn({ target }) {
        const indexSort = target.cellIndex;
        const sort = this.sortDirection[indexSort];
        let sortedRows = sortBy(this.rows, row => row[indexSort]);

        if ( sort == "desc" ) {
            sortedRows = sortedRows.reverse();
        }

        this.changeSortDirection(indexSort);
        this.createTable(sortedRows);
    };

    changeSortDirection(columnIndex) {
        const sort = this.sortDirection[columnIndex];

        if ( !sort || sort === "asc" ) {
            this.sortDirection[columnIndex] = "desc";
        } else {
            this.sortDirection[columnIndex] = "asc";
        }
    }


    setTableCaption() {
        this.caption = this.table.createCaption();
        this.caption.textContent = this.captionText;
    };


    generateColumnsHead() {
        const columnsHead = document.createElement("tr");
        this.columns.forEach(column => {
            const columnHead = document.createElement("th");
            columnHead.append(column);
            columnHead.onclick = (e) => this.setSortByColumn(e);
            columnsHead.append(columnHead);
        });

        return columnsHead;
    };


    generateRows(rows) {
        this.cells = [];
        rows.forEach(row => {
            const rowEl = this.table.insertRow();
            row.forEach(cell => {
                const cellEl = rowEl.insertCell();
                cellEl.append(cell);
                this.cells.push(cellEl);
            });
        });
    };

    createTable(rows) {
        this.table.innerHTML = "";
        this.setTableCaption();
        this.table.append(this.columnsHead);
        this.generateRows(rows);
    };

}