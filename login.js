document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://652f88b10b8d8ddac0b2a08b.mockapi.io/Users';

    function cobaLogin(username, password) {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const pengguna = data.find(pengguna => pengguna.username === username && pengguna.password === password);
          if (pengguna) {
            alert('Login berhasil!');
            window.location.href = 'homepage.html';
          } else {
            alert('Username atau password salah. Silakan coba lagi.');
          }
        })
        .catch(error => console.error('Error:', error));
    }

    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (username && password) {
        cobaLogin(username, password);
      } else {
        alert('Silakan masukkan username dan password.');
      }
    });
  });