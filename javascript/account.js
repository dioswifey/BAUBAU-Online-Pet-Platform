/**
 * Initializes Lucide Icons and sets up the form listener.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize icons if the library is present
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Set up the form submission listener
    const form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', handleLogin);
    }
});

/**
 * Handles form submission, performs basic validation, and simulates login.
 * @param {Event} event The form submit event.
 */
function handleLogin(event) {
    event.preventDefault(); // Stop the default form submission

    const form = document.getElementById('loginForm');
    const messageBox = document.getElementById('messageBox');
    const loginButton = document.getElementById('loginButton');
    
    // Get values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic client-side validation check
    if (!username || !password) {
        showMessage('Please enter both username and password.', 'error');
        return;
    }

    // Simulate loading state
    loginButton.textContent = 'Logging In...';
    loginButton.disabled = true;
    loginButton.classList.add('opacity-60'); // Keep a simple opacity class for loading visual
    messageBox.classList.add('message-box--hidden');

    // Simulate API call delay (1.5 seconds)
    setTimeout(() => {
        // --- Simulated Login Logic ---
        if (username === 'testuser' && password === 'password') {
            showMessage(`Welcome back, ${username}! Redirecting to dashboard...`, 'success');
            // In a real app, you would redirect here: window.location.href = '/dashboard.html';
        } else {
            showMessage('Login failed. Check your username and password.', 'error');
        }
        
        // Reset button state
        loginButton.textContent = 'Member Login';
        loginButton.disabled = false;
        loginButton.classList.remove('opacity-60');

    }, 1500);
}

/**
 * Displays a styled message in the message box.
 * @param {string} message The message to display.
 * @param {('success'|'error')} type The type of message.
 */
function showMessage(message, type) {
    const messageBox = document.getElementById('messageBox');
    messageBox.textContent = message;
    
    // Pure CSS styling for messages
    messageBox.classList.remove('message-box--hidden');

    if (type === 'success') {
        messageBox.style.backgroundColor = '#d1fae5'; // bg-green-100
        messageBox.style.color = '#065f46'; // text-green-700
        messageBox.style.border = '1px solid #10b981'; // border-green-500
    } else {
        messageBox.style.backgroundColor = '#fee2e2'; // bg-red-100
        messageBox.style.color = '#991b1b'; // text-red-700
        messageBox.style.border = '1px solid #ef4444'; // border-red-500
    }
}