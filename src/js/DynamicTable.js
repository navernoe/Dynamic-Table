import { sortBy } from "lodash";

export default class DynamicTable {
    constructor(data) {
        this.table = document.getElementById("dynamic-table");
        this.columns = data.columns;
        this.rows = data.rows;
        this.captionText = data.name;
        this.sortDirection = {};
        this.generateColumnsHead();
        this.generateRows(this.rows);
        this.createTable(this.rowsElems);
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
        const rows = Array.from(this.rowsElems);
        let sortedRows = sortBy(rows, row => row.cells[indexSort].textContent);

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

        this.columnsHead = columnsHead;
    };


    generateRows(rows) {
        this.cells = [];
        this.rowsElems = [];
        rows.forEach(row => {
            const rowEl = document.createElement("tr");
            row.forEach(cell => {
                const cellEl = document.createElement("td");
                cellEl.append(cell);
                this.cells.push(cellEl);
                rowEl.append(cellEl);
            });
            this.rowsElems.push(rowEl);
        });
    }


    createTable(rowsElements) {
        this.table.innerHTML = "";
        this.setTableCaption();
        this.table.append(this.columnsHead);
        this.table.append(...rowsElements);
    };

}