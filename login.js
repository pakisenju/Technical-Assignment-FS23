const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("https://652f88b10b8d8ddac0b2a08b.mockapi.io/Users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Gagal melakukan login.");
    })
    .then((data) => {
      localStorage.setItem("userId", data.id);
      localStorage.setItem("token", data.token);
      alert("Login berhasil.");
      window.location.href = "homepage.html";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

const token = localStorage.getItem("token");
