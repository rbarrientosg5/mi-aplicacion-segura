// Validación básica de seguridad (contra XSS básico)
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('message');
    
    // Validación simple del email
    if (!validateEmail(email)) {
        messageElement.textContent = 'Por favor ingresa un email válido';
        messageElement.style.color = 'red';
        return;
    }
    
    // Escapando el contenido para prevenir XSS básico
    const safeEmail = escapeHtml(email);
    messageElement.textContent = `Email válido recibido: ${safeEmail}`;
    messageElement.style.color = 'green';
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}