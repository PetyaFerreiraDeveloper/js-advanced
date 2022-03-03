function generateReport() {
    let employeeCheckboxElements = Array.from(document.querySelectorAll('th input'));
    let employeesRowsData = Array.from(document.querySelectorAll('tbody tr'));
    let textArea = document.getElementById('output');
    let info = [];

    for (let row of employeesRowsData) {
        let rowData = Array.from(row.children);
        let employee = {};
        for (let el of employeeCheckboxElements) {
            let key = el.name;
            if (el.checked) {
                let index = employeeCheckboxElements.indexOf(el);  
                employee[key] = rowData[index].innerText;
            }
        };
        if (Object.keys(employee).length) {
            info.push(employee);
        }
    }

    if (info.length) {
        textArea.textContent = JSON.stringify(info);
    }
}