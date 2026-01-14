document.addEventListener("DOMContentLoaded", function () {

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
