document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://6524eba3ea560a22a4ea45bb.mockapi.io/users';

    function cobaLogin(username, password) {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const pengguna = data.find(pengguna => pengguna.username === username && pengguna.password === password);
          if (pengguna) {
            alert('Login berhasil!');
            window.location.href = 'index.html';
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