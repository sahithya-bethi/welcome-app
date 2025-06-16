function showProfile() {
  document.getElementById("home-screen").classList.remove("active");
  document.getElementById("profile-screen").classList.add("active");
}

function showHome() {
  document.getElementById("profile-screen").classList.remove("active");
  document.getElementById("home-screen").classList.add("active");
}
