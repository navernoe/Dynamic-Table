import dataTable from "../data/tableData.json";
import DynamicTable from "./js/DynamicTable";
import "./css/style.css";

const dynamicTable = new DynamicTable(dataTable);
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

const onClickSearchBtn = () => {
    const searchValue = searchInput.value;
    dynamicTable.search(searchValue);
};

searchBtn.onclick = onClickSearchBtn;
