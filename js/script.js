
function welcomeMessage() {
  let userResponse = prompt("Masukkan nama Anda:", "Guest");

  const username = userResponse && userResponse.trim() !== ""
    ? userResponse
    : "Guest";

  // Ganti nama di homepage
  const usernameEl = document.getElementById("username");
  if (usernameEl) {
    usernameEl.innerText = username;
  }
}

document.addEventListener("DOMContentLoaded", function () {

  // Jalankan saat halaman dibuka
  welcomeMessage();

  const form = document.getElementById("messageForm");

  if (!form) {
    console.log("FORM TIDAK KETEMU");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.querySelector('input[type="date"]').value;
    const message = document.querySelector("textarea").value;

    const genderInput = document.querySelector('input[name="gender"]:checked');
    const gender = genderInput ? genderInput.value : "-";

    const now = new Date();
    const timeString = now.toLocaleString();

    document.getElementById("currentTime").innerText = timeString;
    document.getElementById("resName").innerText = name;
    document.getElementById("resDate").innerText = date;
    document.getElementById("resGender").innerText = gender;
    document.getElementById("resMessage").innerText = message;
  });

});
