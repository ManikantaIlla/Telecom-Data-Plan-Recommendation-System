
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
                    { sNo: 1, subject: "Communicative English", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "Mathematics – I (Calculus)", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Applied Chemistry", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 4, subject: "Programming for Problem Solving Using C", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 5, subject: "Engineering Drawing", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 6, subject: "English Communication Skills Laboratory", grade: "A", gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "Applied Chemistry Lab", grade: "A", gp: 1.5, status: "Pass" },
                    { sNo: 8, subject: "Programming for Problem Solving Using C Lab", grade: "A", gp: 1.5, status: "Pass" }
                ]
            },
            {
                title: "II Sem",
                subjects: [
                    { sNo: 1, subject: "Mathematics –II (Linear Algebra and Numerical Methods)", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "Applied Physics", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Object Oriented Programming through Java", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 4, subject: "Network Analysis", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 5, subject: "Basic Electrical Engineering", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 6, subject: "Electronic workshop Lab", grade: "A", gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "Basic Electrical Engineering Lab", grade: "A", gp: 1.5, status: "Pass" },
                    { sNo: 8, subject: "Applied Physics Lab", grade: "A", gp: 1.5, status: "Pass" }
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
                    { sNo: 1, subject: "Electronic Devices and Circuits", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "Switching Theory and Logic Design", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Signals and Systems", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 4, subject: "Mathematics-III (Transforms and Vector Calculus)", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 5, subject: "Random Variables and Stochastic Processes", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 6, subject: "OOPS through Java Lab", grade: "A", gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "Electronic Devices and Circuits Lab", grade: "A", gp: 1.5, status: "Pass" },
                    { sNo: 8, subject: "Switching Theory and Logic Design Lab", grade: "A", gp: 1.5, status: "Pass" },
                    { sNo: 9, subject: "Python Programming", grade: "A", gp: 2, status: "Pass" }
                ]
            },
            {
                title: "II Sem",
                subjects: [
                    { sNo: 1, subject: "Electronic Circuit Analysis", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "Digital IC Design", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Analog Communications", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 4, subject: "Linear Control Systems", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 5, subject: "Management and Organizational Behavior", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 6, subject: "Electronic Circuit Analysis Lab", grade: "A", gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "Analog Communications Lab", grade: "A", gp: 1.5, status: "Pass" },
                    { sNo: 8, subject: "Digital IC Design Lab", grade: "A", gp: 1.5, status: "Pass" }
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
                    { sNo: 1, subject: "Analog ICs and Applications", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "Electromagnetic Waves and Transmission Lines", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Digital Communications", grade: "A", gp: 3, status: "Pass" }
                ]
            },
            {
                title: "II Sem",
                subjects: [
                    { sNo: 1, subject: "Microprocessor and Microcontrollers", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "VLSI Design", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Digital Signal Processing", grade: "A", gp: 3, status: "Pass" }
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
                    { sNo: 1, subject: "Professional Elective - 3", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "Professional Elective - 4", grade: "A", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Professional Elective - 5", grade: "A", gp: 3, status: "Pass" }
                ]
            },
            {
                title: "II Sem",
                subjects: [
                    { sNo: 1, subject: "Major Project / Seminar / Internship", grade: "A+", gp: 10, status: "Pass" }
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