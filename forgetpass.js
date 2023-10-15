document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;

    var URL_API = 'https://6524eba3ea560a22a4ea45bb.mockapi.io/users';

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
