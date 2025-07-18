
const emailForm = document.getElementById('email-form');
const formMessage = document.getElementById('form-message');

emailForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;

    if (!validateEmail(email)) {
        formMessage.textContent = 'Please enter a valid email';
        formMessage.style.color = 'red';
        return;
    }

    formMessage.textContent = 'Thank you! We will notify you when the app is ready.';
    formMessage.style.color = '#FFD700';
    emailForm.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
