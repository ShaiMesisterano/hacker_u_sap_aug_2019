const studentsTable = document.getElementById("students");

const init = () => {
    let newRow = document.createElement("tr");
    let nameHeader = document.createElement("th");
    let gradeHeader = document.createElement("th");
    nameHeader.innerText = "Student Name";
    nameHeader.style.border = "solid 2px #000";
    newRow.appendChild(nameHeader);
    gradeHeader.innerText = "Grade";
    gradeHeader.style.border = "solid 2px #000";
    newRow.appendChild(gradeHeader);
    studentsTable.appendChild(newRow);
}

const addRow = (e) => {
    e.preventDefault();
    let newName = document.getElementById("student-name").value;
    let newGrade = document.getElementById("grade").value;
    let newRow = document.createElement("tr");
    let nameData = document.createElement("td");
    let gradeData = document.createElement("td");
    nameData.innerText = newName;
    nameData.style.border = "solid 2px #ccc";
    newRow.appendChild(nameData);
    gradeData.innerText = newGrade;
    gradeData.style.border = "solid 2px #ccc";
    newRow.appendChild(gradeData);
    studentsTable.appendChild(newRow);

    // fetch()
}

init();