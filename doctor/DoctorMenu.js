function nav(choice) {
    let res;
    switch (choice) {
        case 1:
            res = "navigation/home.html"
            break;
        case 2:
            res = "../EditProfile/EditProfile.html"
            break;
        case 3:
            res = "navigation/report.html"
            break;
        case 4:
            res = "navigation/medicalfile.html"
            break;
        case 5:
            res = "navigation/Prescriptions.html"
            break;
        case 6:
            res = "navigation/References.html"
            break;
        case 7:
            res = "navigation/labResults.html"
            break;
        case 8:
            res = "navigation/Approval_of_vaccination.html"
            break;
        case 9:
            res = "navigation/Vaccines.html"
            break;
        case 10:
            sessionStorage.setItem("user", null)
            sessionStorage.setItem("role", null)
            window.location.href = '../login.html';
            break;

    }
    let frame = document.getElementById("frame")
    frame.setAttribute("src", res)

}