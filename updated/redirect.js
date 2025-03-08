
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitBtn").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById("name").value.trim();
        const rollno = document.getElementById("rollno").value.trim().toUpperCase();
        const academicyear = document.getElementById("year").value;
        const branch = document.getElementById("branch").value.toLowerCase();
        const year = document.getElementById("year").value.trim().substring(0, 4);

        console.log(rollno)
        console.log(year)
        console.log(branch)

        if (!rollno || !year) {
            alert("Please enter all details.");
            return;
        }

        let targetFolder = "";
        switch (branch) {
            case "cse":
                targetFolder = "cse";
                break;
            case "ece":
                targetFolder = "ece";
                break;
            case "eee":
                targetFolder = "eee";
                break;
            case "mech":
                targetFolder = "mech";
                break;
            case "mca":
                targetFolder = "mca";
                break;
            default:
                console.log(branch);
                alert(`Invalid Branch Selected ${branch}`);
                return;
        }

        window.location.href = `results/${targetFolder}/results.html?rollno=${rollno}&academicyear=${academicyear}&name=${name}&branch =${branch}$year=${year}`;
        
    });
});

function clearLocal() {
    localStorage.clear();
    let name = document.getElementById("name").value.trim();
    let rollno = document.getElementById("rollno").value.trim().toUpperCase();
    let yearValue = document.getElementById("year").value;
    console.log(yearValue.substring(0, 4)); 
    
    localStorage.setItem("academicyear", JSON.stringify(yearValue));
    localStorage.setItem("rollno", JSON.stringify(rollno));
    localStorage.setItem("name", JSON.stringify(name.toUpperCase()));
    localStorage.setItem("year", JSON.stringify(yearValue.substring(0, 4)));
}