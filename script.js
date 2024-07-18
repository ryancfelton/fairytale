function checkPassword() {
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');
    const correctPassword = 'your_password_here'; // Replace with your desired password

    if (password === correctPassword) {
        window.location.href = 'your_pdf.pdf'; // Replace with the path to your PDF
    } else {
        error.textContent = 'Incorrect password. Please try again.';
    }
}

