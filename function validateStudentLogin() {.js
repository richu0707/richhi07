// script.js

function validateStudentLogin() {
    // Get username and password values
    const username = document.getElementById("studentUsername").value;
    const password = document.getElementById("studentPassword").value;

    // Here we skip validation and always redirect
    window.location.href = "dashboard.html";  // Make sure the path is correct
    return false; // Prevent form submission
}




function validateAdminLogin() {
    const username = document.getElementById("adminUsername").value;
    const password = document.getElementById("adminPassword").value;

    // Allow login without any validation (for now)
    window.location.href = "dashboard2.html"; // Redirect to Admin Dashboard
    return false; // Prevent form submission
}


