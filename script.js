/* Navigation */

function goToAuth() {
  window.location.href = "auth.html";
}

function goToSignup() {
  window.location.href = "signup.html";
}

function goToLogin() {
  window.location.href = "auth.html";
}

function goToDashboard() {
  window.location.href = "dashboard.html";
}

function goToReport() {
  window.location.href = "report.html";
}

function logout() {
  window.location.href = "LANDPAGE.html";
}

/* Authentication */

function login(e) {
  e.preventDefault();
  alert("Login successful");
  window.location.href = "dashboard.html";
}

function signup(e) {
  e.preventDefault();
  alert("Account created");
  window.location.href = "dashboard.html";
}

/* Report Issue */

function submitIssue() {
  var desc = document.getElementById("issueDesc");

  if (!desc || desc.value.trim() === "") {
    alert("Please describe the issue");
    return;
  }

  alert("Report submitted");
  window.location.href = "dashboard.html";
}

function autoClassify() {
  alert("Issue classified");
}

function getLocation() {
  alert("Location added");
}
