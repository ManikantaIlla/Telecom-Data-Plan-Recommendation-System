
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
                    { sNo: 2, subject: "Communicative English", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Engineering Physics", gp: 3, status: "Pass" },
                    { sNo: 4, subject: "Engineering Drawing", gp: 3, status: "Pass" },
                    { sNo: 5, subject: "Programming for Problem Solving Using C", gp: 3, status: "Pass" },
                    { sNo: 6, subject: "English Communication Skills Laboratory", gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "Engineering Physics Lab", gp: 1.5, status: "Pass" },
                    { sNo: 8, subject: "Environmental Science", gp: 0, status: "Pass" },
                    { sNo: 9, subject: "Programming for Problem Solving Using C Lab", gp: 1.5, status: "Pass" }
                ]
            },
            {
                title: "II Sem",
                subjects: [
                    { sNo: 1, subject: "Mathematics - II", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "Engineering Chemistry", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Engineering Mechanics", gp: 3, status: "Pass" },
                    { sNo: 4, subject: "Basic Electrical and Electronics Engineering", gp: 3, status: "Pass" },
                    { sNo: 5, subject: "Thermodynamics", gp: 3, status: "Pass" },
                    { sNo: 6, subject: "Engineering Chemistry Laboratory", gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "Workshop Practice Laboratory", gp: 1.5, status: "Pass" },
                    { sNo: 8, subject: "Basic Electrical & Electronics Engineering Laboratory", gp: 1.5, status: "Pass" },
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
                    { sNo: 1, subject: "Mechanics of Solids", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "Fluid Mechanics & Hydraulic Machines", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Production Technology", gp: 3, status: "Pass" },
                    { sNo: 4, subject: "Kinematics of Machinery", gp: 3, status: "Pass" },
                    { sNo: 5, subject: "Fluid Mechanics & Hydraulic Machines Lab", gp: 1.5, status: "Pass" },
                    { sNo: 6, subject: "Production Technology Lab", gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "Computer Aided Engineering Drawing Practice", gp: 1.5, status: "Pass" },
                    { sNo: 8, subject: "Drafting and Modeling Lab", gp: 1.5, status: "Pass" },
                    { sNo: 9, subject: "Essence of Indian Traditional Knowledge", gp: 0, status: "Pass" }
                ]
            },
            {
                title: "II Sem",
                subjects: [
                    { sNo: 1, subject: "Complex Variables and Statistical Method", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "MATERIAL SCIENCE & METALLURGY Metallurgy", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Dynamics of Machinery", gp: 3, status: "Pass" },
                    { sNo: 4, subject: "Thermal Engineering - I", gp: 3, status: "Pass" },
                    { sNo: 5, subject: "Industrial Engineering and Management", gp: 3, status: "Pass" },
                    { sNo: 6, subject: "MECHANICS OF SOLIDS AND METALLURGY LAB", gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "Machine Drawing Practice", gp: 1.5, status: "Pass" },
                    { sNo: 8, subject: "Theory of Machines Lab", gp: 1.5, status: "Pass" },
                    { sNo: 9, subject: "Python Programming Lab", gp: 1.5, status: "Pass" }
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
                    { sNo: 1, subject: "Thermal Engineering - II", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "Design of Machine Members - I", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Machining Machine Tools & Metrology", gp: 3, status: "Pass" },
                    { sNo: 4, subject: "Finite Element Methods", gp: 3, status: "Pass" },
                    { sNo: 5, subject: "Operation Research", gp: 3, status: "Pass" },
                    { sNo: 6, subject: "Machine Tools Lab", gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "Thermal Engineering Lab", gp: 1.5, status: "Pass" },
                    { sNo: 8, subject: "Advanced Communication Skills Lab", gp: 1.5, status: "Pass" },
                    { sNo: 9, subject: "Professional Ethics and Human Values", gp: 0, status: "Pass" },
                    { sNo: 10, subject: "Community Sevice Project", gp: 1.5, status: "Pass" }
                ]
            },
            {
                title: "II Sem",
                subjects: [
                    { sNo: 1, subject: "Heat Transfer", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "Design of Machine Members - II", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Introduction to Artificial Intelligence", gp: 3, status: "Pass" },
                    { sNo: 4, subject: "Automobile Engineering", gp: 3, status: "Pass" },
                    { sNo: 5, subject: "Advanced Materials", gp: 3, status: "Pass" },
                    { sNo: 6, subject: "Heat Transfer Lab", gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "CAE & CAM Lab", gp: 1.5, status: "Pass" },
                    { sNo: 8, subject: "Measurements & Metrology Learning Lab", gp: 1.5, status: "Pass" },
                    { sNo: 9, subject: "Research Methodology & IPR", gp: 0, status: "Pass" }
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
                    { sNo: 1, subject: "Transducers and Sensors", gp: 3, status: "Pass" },
                    { sNo: 2, subject: "Automobile Materials and Manufacturing Techniques", gp: 3, status: "Pass" },
                    { sNo: 3, subject: "Unconventional Machining Processes", gp: 3, status: "Pass" },
                    { sNo: 4, subject: "Universal Human Values 2: Understanding Harmony", gp: 3, status: "Pass" },
                    { sNo: 5, subject: "Evaluation of Summer Internship (Completed at III B.Tech II Sem)", gp: 3, status: "Pass" },
                    { sNo: 6, subject: "Mechatronics Lab", gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "Additive Manufacturing", gp: 1.5, status: "Pass" },
                    { sNo: 8, subject: "Production Planning and Control", gp: 1.5, status: "Pass" }
                ]
            },
            {
                title: "II Sem",
                subjects: [
                    { sNo: 1, subject: "Project Work", gp: 12, status: "Pass" }
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