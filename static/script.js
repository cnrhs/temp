function updateTable(data) {
    var table = document.getElementById("table-c");
    var tableBody = table.querySelector("tbody");
    tableBody.innerHTML = ""; // Clear existing rows

    data.forEach(row => {
        var tr = document.createElement("tr");
        
        row.forEach((cell, cellIndex) => {
            var td = document.createElement("td");
            td.textContent = cell;
            if (cellIndex === 0) {
                td.style.width = "70px"; // Width for the first column
            }
            if (cellIndex === 2) {
                td.style.width = "100px"; // Width for the third column
            }
            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });
}

function highlightRows(employees) {
    var table = document.getElementById("table-d");
    var rows = table.rows;
    Array.prototype.forEach.call(rows, function(row, index) {
        if (index % 2) {
            row.style.backgroundColor = "rgb(249, 249, 249)";
        } else {
            row.style.backgroundColor = "white";
        }
    });
    Array.prototype.forEach.call(rows, function(row) {
        var value = row.cells[0].textContent;
        if (employees.includes(value)) {
            row.style.backgroundColor = "rgb(195, 255, 194)";
        }
    });
}

function highlightSpecificRow(table, index) {
    var table = document.getElementById(table);
    var rows = table.rows;
    Array.prototype.forEach.call(rows, function(row, index) {
        if (index % 2) {
            row.style.backgroundColor = "rgb(249, 249, 249)";
        } else {
            row.style.backgroundColor = "white";
        }
    });
    Array.prototype.forEach.call(rows, function(row, rowIndex) {
        var value = row.cells[0].textContent;
        if (rowIndex == index) {
            row.style.backgroundColor = "rgb(195, 255, 194)";
        }
    });
}

const solutions = {
    "001": {
        "employees": [
            ["George", "Harry", "Oliver"],
            ["Amelia", "Harry", "Oliver"],
            ["Harry", "Layla", "Oliver"]
        ],
        "update": [
            [1, "Optimal", "£66,500"],
            [2, "Sub-Optimal", "£67,500"],
            [3, "Sub-Optimal", "£85,500"],
        ]
    },
    "002": {
        "employees": [
            ["George", "Layla", "Oliver"],
            ["George", "Jack", "Oliver"],
            ["Amelia", "George", "Layla"]
        ],
        "update": [
            [1, "Optimal", "£81,500"],
            [2, "Sub-Optimal", "£82,500"],
            [3, "Sub-Optimal", "£84,000"],
        ]
    },
    "003": {
        "employees": [
            ["Amelia", "Harry", "Oliver"],
            ["Amelia", "George", "Harry"],
            ["Amelia", "Layla", "Oliver"]
        ],
        "update": [
            [1, "Optimal", "£67,500"],
            [2, "Sub-Optimal", "£69,000"],
            [3, "Sub-Optimal", "£82,500"],
        ]
    }
}

document.querySelectorAll("#table-b tr").forEach(row => {
    row.addEventListener("click", (event) => {
        var role = row.cells[0].textContent;
        var employees = solutions[role]["employees"];
        var data = solutions[role]["update"];
        updateTable(data);
        highlightRows([]);
        var table_one = document.getElementById("table-b");
        var index_one = Array.prototype.indexOf.call(table_one.rows, event.target.closest("tr"));
        highlightSpecificRow("table-b", index_one);
        document.querySelectorAll("#table-c tr").forEach(row => {
            row.addEventListener("click", (event) => {
                var index = row.cells[0].textContent - 1;
                highlightRows(employees[index]);
                var table_two = document.getElementById("table-c");
                var index_two = Array.prototype.indexOf.call(table_two.rows, event.target.closest("tr"));
                highlightSpecificRow("table-c", index_two);
            });
        });
        
    });
});
