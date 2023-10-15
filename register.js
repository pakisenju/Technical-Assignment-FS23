document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var fullname = document.getElementById('fullname').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmpwd = document.getElementById('confirmpwd').value; // Tambahkan baris ini
    
    if (!fullname || !username || !email || !password || !confirmpwd) {
      alert('Silakan isi semua kolom.');
      return;
    }

    if (password !== confirmpwd) { // Tambahkan baris ini
      alert('Konfirmasi password tidak sesuai dengan password.');
      return;
    }
  
    var data = {
        fullname: fullname,
        username: username,
        email: email,
        password: password
    };
  
    fetch('https://6524eba3ea560a22a4ea45bb.mockapi.io/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Terjadi kesalahan saat membuat data.');
        }
        return response.json();
    })
    .then(function(data) {
        alert('Data berhasil dibuat!');
        window.location.href = 'login.html';
    })
    .catch(function(error) {
        alert('Error: ' + error.message);
    });
});