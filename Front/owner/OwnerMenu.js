function nav(choice) {
    let res;
    switch (choice) {
        case 1:
            res = "../HomePage/home.html"

            break;
        case 2:
            res = "../EditProfile/EditProfile.html"

            break;
        case 3:
            res = "navigation/Emergancy/Emergancy.html"
            break;
        case 4:
            res = "navigation/Appointment/Appointment.html"
            break;
        case 5:
            res = "navigation/DeleteAppointment/DelAppointment.html"
            break;
            case 6:
            res = "navigation/ViewMedicalReport/ViewMedicalReport.html"
            break;
        case 7:
            res = "navigation/Vaccines/Vaccines.html"
            break;
        case 8:
            res = "navigation/PhotoAlbum/PhotoAlbum.html"
            break;
        case 9:
            sessionStorage.setItem("user", null)
            sessionStorage.setItem("role", null)
            window.location.href = '../index.html';
            break;

    }
    let frame = document.getElementById("frame")
    frame.setAttribute("src", res)

}