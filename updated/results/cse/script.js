
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
                { sNo: 1, subject: "APPLIED PHYSICS",  gp: 3, status: "Pass" },
                { sNo: 2, subject: "COMPUTER ENGINEERING WORKSHOP", gp: 3, status: "Pass" },
                { sNo: 3, subject: "MATHEMATICS - I",  gp: 3, status: "Pass" },
                { sNo: 4, subject: "COMMUNICATIVE ENGLISH - I", gp: 3, status: "Pass" },
                { sNo: 5, subject: "PROGRAMMING FOR PROBLEM SOLVING USING C", gp: 3, status: "Pass" },
                { sNo: 6, subject: "PROGRAMMING FOR PROBLEM SOLVING USING C LAB",  gp: 1.5, status: "Pass" },
                { sNo: 7, subject: "ENGLISH COMMUNICATION SKILLS LABORATORY",  gp: 1.5, status: "Pass" },
                { sNo: 8, subject: "APPLIED PHYSICS LAB", gp: 1.5, status: "Pass" }
               
                ]
            },
            {
                title: "II Sem",
                subjects: [
                { sNo: 1, subject: "Mathematics-II",  gp: 3, status: "Pass" },
                { sNo: 2, subject: "Applied Chemistry", gp: 3, status: "Pass" },
                { sNo: 3, subject: "Computer Organization",  gp: 3, status: "Pass" },
                { sNo: 4, subject: "Data Structures",  gp: 3, status: "Pass" },
                { sNo: 5, subject: "Python Programming",  gp: 3, status: "Pass" },
                { sNo: 6, subject: "Applied Chemistry Laboratory",  gp: 1.5, status: "Pass" },
                { sNo: 7, subject: "Data Structures Laboratory",  gp: 1.5, status: "Pass" },          
                { sNo: 9, subject: "Python Programming Laboratory",  gp: 1.5, status: "Pass" }
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
                { sNo: 1, subject: "MATHEMATICS-III",  gp: 3, status: "Pass" },
                { sNo: 2, subject: "OBJECT ORIENTED PROGRAMMING THROUGH C++",  gp: 3, status: "Pass" },
                { sNo: 3, subject: "OPERATING SYSTEMS",  gp: 3, status: "Pass" },
                { sNo: 4, subject: "SOFTWARE ENGINEERING",  gp: 3, status: "Pass" },
                { sNo: 5, subject: "MATHEMATICAL FOUNDATIONS OF COMPUTER SCIENCE",  gp: 3, status: "Pass" },
                { sNo: 6, subject: "OBJECT ORIENTED PROGRAMMING THROUGH C++",  gp: 3, status: "Pass" },
                { sNo: 7, subject: "OPERATING SYSTEMS LAB",  gp: 1.5, status: "Pass" },
                { sNo: 8, subject: "SOFTWARE ENGINEERING LAB",  gp: 1.5, status: "Pass" },
                { sNo: 9, subject: "WEB APPLICATION DEVELOPMENT USING FULL STACK",  gp: 2, status: "Pass" },
                { sNo: 10, subject: "COMMUNITY SERVICE OF PROJECT",  gp: 4, status: "Pass" }
                ]
            },
            {
                title: "II Sem",
                subjects: [
                { sNo: 1, subject: "PROBABILITY AND STATISTICS",  gp: 3, status: "Pass" },
                    { sNo: 2, subject: "DATABASE MANAGEMENT SYSTEMS",  gp: 3, status: "Pass" },
                    { sNo: 3, subject: "FORMAL LANGUAGES AND AUTOMATA THEORY",  gp: 3, status: "Pass" },
                    { sNo: 4, subject: "JAVA PROGRAMMING",  gp: 3, status: "Pass" },
                    { sNo: 5, subject: "MANAGERIAL ECONOMICS AND FINANCIAL ACCOUNT",  gp: 3, status: "Pass" },
                    { sNo: 6, subject: "DATABASE MANAGEMENT SYSTEMS LAB",  gp: 1, status: "Pass" },
                    { sNo: 7, subject: "R PROGRAMMING LAB",  gp: 2, status: "Pass" },
                    { sNo: 8, subject: "JAVA PROGRAMMING LAB",  gp: 1.5, status: "Pass" }
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
                { sNo: 1, subject: "PRINCIPLES OF COMMUNICATIONS",  gp:3 , status: "Pass" },
                    { sNo: 2, subject: "COMPUTER NETWORKS",  gp: 3, status: "Pass" },
                    { sNo: 3, subject: "DESIGN AND ANALYSIS OF ALGORITHMS",  gp: 3, status: "Pass" },
                    { sNo: 4, subject: "DATA WAREHOUSING AND DATA MINING",  gp: 3, status: "Pass" },
                    { sNo: 5, subject: "SOFTWARE PROJECT MANAGEMENT",  gp: 3, status: "Pass" },
                    { sNo: 6, subject: "DATA WAREHOUSING AND DATA MINING LAB",  gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "COMPUTER NETWORKS LAB",  gp: 1.5, status: "Pass" },
                    { sNo: 8, subject: "ANIMATION COURSE: ANIMATION DESIGN",  gp: 2, status: "Pass" },
                    { sNo: 9, subject: "EMPLOYABILITY SKILLS-I",  gp: 0, status: "Pass" },
                    { sNo: 10, subject: "SUMMER INTERNSHIP",  gp: 1.5, status: "Pass" }
                ]
            },
            {
                title: "II Sem",
                subjects: [
                { sNo: 1, subject: "MACHINE LEARNING",  gp: 3, status: "Pass" },
                    { sNo: 2, subject: "COMPILER DESIGN",  gp: 3, status: "Pass" },
                    { sNo: 3, subject: "CRYPTOGRAPHY AND NETWORK SECURITY", gp: 3, status: "Pass" },
                    { sNo: 4, subject: "OBJECT ORIENTED ANALYSIS AND DESIGN",  gp: 3, status: "Pass" },
                    { sNo: 5, subject: "DIGITAL LOGIC DESIGN",  gp: 3, status: "Pass" },
                    { sNo: 6, subject: "MACHINE LEARNING USING PYTHON LAB",  gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "CRYPTOGRAPHY AND NETWORK SECURITY LAB",  gp: 1.5, status: "Pass" },
                    { sNo: 8, subject: "COMPILER DESIGN LAB",  gp: 1.5, status: "Pass" },
                    { sNo: 9, subject: "SKILL ORIENTED COURSE-IV MEAN STACK TECH",  gp: 2, status: "Pass" },
                    { sNo: 10, subject: "EMPLOYABILITY SKILLS-II",  gp: 0, status: "Pass" }
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
                { sNo: 1, subject: "ADDITIVE MANUFACTURING",  gp: 9, status: "Pass" },
                    { sNo: 2, subject: "OPERATIONS MANAGEMENT",  gp: 8, status: "Pass" },
                    { sNo: 3, subject: "CLOUD COMPUTING",  gp: 3, status: "Pass" },
                    { sNo: 4, subject: "DEEP LEARNING TECHNIQUES",  gp: 3, status: "Pass" },
                    { sNo: 5, subject: "ETHICAL HACKING", gp: 3, status: "Pass" },
                    { sNo: 6, subject: "UNIVERSAL HUMAN VALUES 2: UNDERSTANDING HARMONY (AICTE PROPOSALL SYLLABUS)",  gp: 1.5, status: "Pass" },
                    { sNo: 7, subject: "MEAN STACK TECHNOLOGIES-MODULE II-ANGULAR JS AND MONGODB",  gp: 2, status: "Pass" },
                    { sNo: 8, subject: "INDUSTRIAL/ INTERNSHIP",  gp: 3, status: "Pass" }
                ]
            },
            {
                title: "II Sem",
                subjects: [
                { sNo: 1, subject: "MAJOR PROJECT WORK/SEMINAR INTERNSHIP",  gp: 12, status: "Pass" }
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