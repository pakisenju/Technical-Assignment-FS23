document.getElementById('resetPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var password = document.getElementById('password').value;
    var confirmpwd = document.getElementById('confirmpwd').value;

    if (password !== confirmpwd) {
        alert('Password dan konfirmasi password tidak sesuai');
        return;
    }

    var URL_API = 'https://6524eba3ea560a22a4ea45bb.mockapi.io/users';

    var email = new URLSearchParams(window.location.search).get('email');

    fetch(URL_API)
    .then(response => response.json())
    .then(data => {
        var user = data.find(user => user.email === email);

        if (user) {
            user.password = password;
            fetch(`${URL_API}/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
            .then(response => response.json())
            .then(data => {
                alert('Password berhasil direset!');
                window.location.href = 'login.html';
            })
            .catch(error => console.error('Error:', error));
        } else {
            alert('User tidak ditemukan');
        }
    })
    .catch(error => console.error('Error:', error));
});
