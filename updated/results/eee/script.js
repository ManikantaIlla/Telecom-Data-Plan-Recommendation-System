
function displayStudentDetails() {
    let name = JSON.parse(localStorage.getItem("name"));
    let rollno = JSON.parse(localStorage.getItem("rollno"));
    let academicYear = JSON.parse(localStorage.getItem("academicyear"));
    let year = JSON.parse(localStorage.getItem("year"));
    console.log(name);
    console.log(rollno);
    console.log(academicYear);
    console.log(year);
    document.getElementById("name").textContent = name;
    document.getElementById("rollno").textContent = rollno;
    document.getElementById("year").textContent = year;
    document.getElementById("academicyear").textContent = academicYear;
   
}
const resultsData = [
    {
        year: "I Year",
        semesters: [
            {
                title: "I Sem",
                subjects: [
                    { sNo: 1, subject: "Mathematics - I", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "Programming for Problem Solving Using C", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Engineering Drawing & Design", gp: 3, status: "Pass" },
                    { sNo: 4, subject: "Mathematics - II", gp: 3, status: "Pass" },
                    { sNo: 5, subject: "Communicative English", gp: 3, status: "Pass" },
                    { sNo: 6, subject: "English Communication Skills Laboratory", gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "Electrical Engineering Workshop", gp: 1.5, status: "Pass" },
                    { sNo: 8, subject: "Programming for Problem Solving Using C Lab", gp: 1.5, status: "Pass" }
                ]
            },
            {
                title: "II Sem",
                subjects: [
                    { sNo: 1, subject: "Mathematics - III", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "Applied Physics", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Data Structures Through C", gp: 3, status: "Pass" },
                    { sNo: 4, subject: "Electrical Circuit Analysis -I", gp: 3, status: "Pass" },
                    { sNo: 5, subject: "Basic Civil and Mechanical Engineering", gp: 3, status: "Pass" },
                    { sNo: 6, subject: "Applied Physics Lab", gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "Data Structures Through C Laboratory", gp: 1.5, status: "Pass" },
                    { sNo: 8, subject: "Basic Civil and Mechanical Engineering Laboratory", gp: 1.5, status: "Pass" },
                    { sNo: 9, subject: "Constitution of India", gp: 0, status: "Pass" }
                ]
            }
        ]
    },
    {
        year: "II Year",
        semesters: [
            {
                title: "I Sem",
                subjects: [
                    { sNo: 1, subject: "Mathematics - IV", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "Electronics Devices & Circuits", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Electrical Circuit Analysis - II", gp: 3, status: "Pass" },
                    { sNo: 4, subject: "DC Machines & Transformers", gp: 3, status: "Pass" },
                    { sNo: 5, subject: "Electromagnetic Fields", gp: 3, status: "Pass" },
                    { sNo: 6, subject: "Electrical Circuits Lab", gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "DC Machines & Transformers Lab", gp: 1.5, status: "Pass" },
                    { sNo: 8, subject: "Electronics Devices & Circuits Lab", gp: 1.5, status: "Pass" },
                    { sNo: 9, subject: "Professional Ethics and Human Values", gp: 0, status: "Pass" }
                ]
            },
            {
                title: "II Sem",
                subjects: [
                    { sNo: 1, subject: "Managerial Economics & Financial Analysis", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "Python Programming", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Digital Electronics", gp: 3, status: "Pass" },
                    { sNo: 4, subject: "Power System - I", gp: 3, status: "Pass" },
                    { sNo: 5, subject: "Induction and Synchronous Machines", gp: 3, status: "Pass" },
                    { sNo: 6, subject: "Python Programming Lab", gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "Induction and Synchronous Machines Lab", gp: 1.5, status: "Pass" },
                    { sNo: 8, subject: "Digital Electronics Lab", gp: 1.5, status: "Pass" },
                    { sNo: 9, subject: "IoT Applications and Lab", gp: 2, status: "Pass" }
                ]
            }
        ]
    },
    {
        year: "III Year",
        semesters: [
            {
                title: "I Sem",
                subjects: [
                    { sNo: 1, subject: "Power Electronics", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "Control Systems", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Power Systems-II", gp: 3, status: "Pass" },
                    { sNo: 4, subject: "Utilization of Electrical Energy", gp: 3, status: "Pass" },
                    { sNo: 5, subject: "Principles of Communications", gp: 3, status: "Pass" },
                    { sNo: 6, subject: "Control Systems Lab", gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "Power Electronics Lab", gp: 1.5, status: "Pass" },
                    { sNo: 8, subject: "Soft Skill Course: Employability Skills", gp: 1.5, status: "Pass" },
                    { sNo: 9, subject: "Summer Internship (Mandatory after 2nd Year, evaluated in V Sem)", gp: 1.5, status: "Pass" },
                    { sNo: 10, subject: "Environmental Science", gp: 0, status: "Pass" }
                    { sNo: 11, subject: "COMMUNITY SERVICE OF PROJECT", gp: 2, status: "Pass" }
                ]
            },
            {
                title: "II Sem",
                subjects: [
                    { sNo: 1, subject: "Computer Networks", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "Microprocessors and Microcontrollers", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Electrical Measurements and Instrumentation", gp: 3, status: "Pass" },
                    { sNo: 4, subject: "Power System Analysis", gp: 3, status: "Pass" },
                    { sNo: 5, subject: "Switchgear and Protection", gp: 3, status: "Pass" },
                    { sNo: 6, subject: "Skill Advanced Course: Machine Learning with Python", gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "Research Methodology", gp: 0, status: "Pass" },
                    { sNo: 8, subject: "Microprocessors and Microcontrollers Lab", gp: 1.5, status: "Pass" },
                    { sNo: 9, subject: "Power Systems and Simulation Lab", gp: 1.5, status: "Pass" },
                    { sNo: 10, subject: "Electrical Measurements and Instrumentation Lab", gp: 1.5, status: "Pass" }
                ]
            }
        ]
    },
    {
        year: "IV Year",
        semesters: [
            {
                title: "I Sem",
                subjects: [
                    { sNo: 1, subject: "Data Communication", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "Power System Operation & Control Learning", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Universal Human Values 2: Understanding Harmony", gp: 3, status: "Pass" },
                    { sNo: 4, subject: "Flexible Alternating Currents Transmission Systems", gp: 3, status: "Pass" },
                    { sNo: 5, subject: "High Voltage Engineering", gp: 3, status: "Pass" },
                    { sNo: 6, subject: "Skill Advanced Course: Machine Learning with Python Lab", gp: 2, status: "Pass" },
                    { sNo: 7, subject: "Industrial/Research Internship", gp: 3, status: "Pass" }
                ]
            },
            {
                title: "II Sem",
                subjects: [
                    { sNo: 1, subject: "Project Work/Seminar and Internship in Industry", gp: 12, status: "Pass" }
                ]
                    }
                ]
            }
        ];


const gradePointsMap = { "A+": 10, "A": 9, "B": 8, "C": 7, "D": 6, "E": 5, "F": 0 };



function generateResultsTable() {
       


        let containerHTML = "";

                resultsData.forEach((yearData, yearIndex) => {
                    let yearContainer = `<div class=" sem-con d-flex flex-row justify-content-center"><h3>${yearData.year}</h3></div>
                    <div class="row">`; // Bootstrap row for layout

                    yearData.semesters.forEach((semester, semIndex) => {
                        let semContainer = `<div class="col-6"> <!-- Each semester takes half width -->
                            <div class="d-flex flex-row justify-content-center"><h4>${semester.title}</h4></div>
                            <table class='table  table-bordered mt-3'>
                            <tr><th>S.No</th><th>Subject</th><th>Grade</th><th>Credits</th><th>Grade Point</th><th>Status</th></tr>`;

                        semester.subjects.forEach((subj, subjIndex) => {
                            const inputId = `grade-${yearIndex}-${semIndex}-${subjIndex}`;
                            const gpId = `gp-${yearIndex}-${semIndex}-${subjIndex}`;
                            const statusId = `status-${yearIndex}-${semIndex}-${subjIndex}`;
                            const creditId = `credit-${yearIndex}-${semIndex}-${subjIndex}`;

                            semContainer += `<tr style='font-size: 0.8rem;'>
                                <td>${subjIndex + 1}</td>
                                <td>${subj.subject}</td>
                                <td>
                                    <select id="${inputId}" class="form-control grade-select" '>
                                  
                                    <option value="" disabled selected>Select an grade</option>
                                        <option value="10">A+</option>
                                        <option value="9">A</option>
                                        <option value="8">B</option>
                                        <option value="7">C</option>
                                        <option value="6">D</option>
                                        <option value="5">E</option>
                                        <option value="0">F</option>
                                        <option value="1">COMPLETED</option>
                                    </select>
                                </td>
                                <td id="${creditId}" '>${subj.gp}</td>
                                <td id="${gpId}" class="gradepoints" '></td>
                                <td id="${statusId}" class="status" '></td>
                            </tr>`;
                        });

                        semContainer += `</table>
                        <div class="d-flex flex-row">
                              <button class="btn btn-secondary" onclick="calculateSGPA(${yearIndex}, ${semIndex})">SGPA</button>
                        <div id="sgpa-container-${yearIndex}-${semIndex}" class=" ml-3 d-flex flex-column justify-content-center mt-2 font-weight-bold"></div>
                        </div>
                        </div>`; // Close col-md-6

                        yearContainer += semContainer;
                    });

                    yearContainer += `</div>`; // Close row
                    containerHTML += yearContainer;
                });

                document.getElementById("resultsContainer").innerHTML = containerHTML;

        
        $(document).on("change", ".grade-select", function () {
            updateGradePointsAndStatus();
            storeGrades();
        });
        
        retrieveGrades();
    }




function updateGradePointsAndStatus() {
resultsData.forEach((yearData, yearIndex) => {
yearData.semesters.forEach((semester, semIndex) => {
    semester.subjects.forEach((subj, subjIndex) => {
        const gradeSelect = $(`#grade-${yearIndex}-${semIndex}-${subjIndex}`);
        const grade = gradeSelect.val();
        
        let gpValue = grade ? parseInt(grade, 10) : "-";
        let statusValue = "";
        
        if (grade === "1") {
            gpValue = 0;
            statusValue = "Completed";
        } else if (grade === "0") {
            statusValue = "Fail";
        } else {
            statusValue = "Pass";
        }
        
        $(`#gp-${yearIndex}-${semIndex}-${subjIndex}`).text(gpValue);
        $(`#status-${yearIndex}-${semIndex}-${subjIndex}`).text(grade ? statusValue : "");
    });
});
});
}









function calculateSGPA(yearIndex, semIndex) {
    let totalCredits = 0;
    let weightedSum = 0;
    resultsData[yearIndex].semesters[semIndex].subjects.forEach((subj, subjIndex) => {
        const gpValue = parseFloat($(`#gp-${yearIndex}-${semIndex}-${subjIndex}`).text());
        const creditValue = parseFloat($(`#credit-${yearIndex}-${semIndex}-${subjIndex}`).text()) || 0;
        if (!isNaN(gpValue) && creditValue > 0) {
            weightedSum += gpValue * creditValue;
            totalCredits += creditValue;
        }
    });
    const sgpa = totalCredits > 0 ? (weightedSum / totalCredits).toFixed(2) : "N/A";
    $(`#sgpa-container-${yearIndex}-${semIndex}`).text(`SGPA: ${sgpa}`);
    storeSGPA(sgpa, totalCredits);
}


function storeSGPA(sgpa, totalCredits) {
        let sgpaData = JSON.parse(localStorage.getItem('sgpaData')) || [];
        sgpaData.push({ sgpa: parseFloat(sgpa), credits: totalCredits });
        localStorage.setItem('sgpaData', JSON.stringify(sgpaData));
        calculateAndDisplayCGPA();
    }

// function calculateAndDisplayCGPA() {
//     let totalPoints = 0, subjectCount = 0;
//     resultsData.forEach((yearData, yearIndex) => {
//         yearData.semesters.forEach((semester, semIndex) => {
//             semester.subjects.forEach((subj, subjIndex) => {
//                 const gpValue = parseFloat($(`#gp-${yearIndex}-${semIndex}-${subjIndex}`).text());
//                 if (!isNaN(gpValue)) {
//                     totalPoints += gpValue;
//                     subjectCount++;
//                 }
//             });
//         });
//     });
//     const cgpa = subjectCount ? (totalPoints / subjectCount).toFixed(2) : "N/A";
//     $("#cgpa-container").text(`CGPA: ${cgpa}`);
// }

function calculateAndDisplayCGPA() {
    let sgpaData = JSON.parse(localStorage.getItem('sgpaData')) || [];
    let totalWeightedSGPA = 0;
    let totalCredits = 0;
    sgpaData.forEach(entry => {
        totalWeightedSGPA += entry.sgpa * entry.credits;
        totalCredits += entry.credits;
    });
    const cgpa = totalCredits > 0 ? (totalWeightedSGPA / totalCredits).toFixed(2) : "N/A";
    $('#cgpa-container').text(`CGPA: ${cgpa}`);
}




function storeGrades() {
let grades = {};
resultsData.forEach((yearData, yearIndex) => {
yearData.semesters.forEach((semester, semIndex) => {
    semester.subjects.forEach((subj, subjIndex) => {
        const grade = $(`#grade-${yearIndex}-${semIndex}-${subjIndex}`).val();
        grades[`grade-${yearIndex}-${semIndex}-${subjIndex}`] = grade;
    });
});
});
localStorage.setItem("grades", JSON.stringify(grades));
}


function retrieveGrades() {
    let storedGrades = JSON.parse(localStorage.getItem("grades")) || {};
    for (let key in storedGrades) {
        $(`#${key}`).val(storedGrades[key]).trigger("change"); // Use "change" to trigger updates
    }
    updateGradePointsAndStatus(); // Ensure grade points & status update on reload
}


            $(document).ready(() => {
        generateResultsTable();
        retrieveGrades(); // Restore grades after generating the table
    });