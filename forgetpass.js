document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;

    var URL_API = 'https://652f88b10b8d8ddac0b2a08b.mockapi.io/Users';

    fetch(URL_API)
    .then(response => response.json())
    .then(data => {
        var userExists = data.some(user => user.email === email);

        if (userExists) {
            window.location.href = 'newpass.html?email=' + email;
        } else {
            alert('Email tidak terdaftar');
        }
    })
    .catch(error => console.error('Error:', error));
});
