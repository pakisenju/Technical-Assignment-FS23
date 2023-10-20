const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("https://652f88b10b8d8ddac0b2a08b.mockapi.io/Users", {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Gagal mengambil data pengguna.");
    })
    .then((users) => {
      const user = users.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        localStorage.setItem("userId", user.id);
        localStorage.setItem("token", user.token);
        alert("Login berhasil.");
        window.location.href = "homepage.html";
      } else {
        alert("Nama pengguna atau kata sandi salah.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
