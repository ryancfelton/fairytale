function checkPassword() {
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');
    const correctPassword = 'Angela'; // Replace with your desired password

    if (password === correctPassword) {
        window.location.href = 'secret.html'; // Redirect to the new page
    } else {
        error.textContent = 'Incorrect password. Please try again. What's your first name Senorita?';
    }
}
