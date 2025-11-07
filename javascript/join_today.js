/**
 * Initializes Lucide Icons after the DOM is loaded.
 * Assumes the Lucide script is loaded in the HTML head.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Only call createIcons if lucide object is available
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

/**
 * Handles form submission, performs basic validation, and simulates registration success.
 * @param {Event} event The form submit event.
 */
function handleRegistration(event) {
    event.preventDefault(); // Stop the default form submission

    const form = document.getElementById('registrationForm');
    const messageBox = document.getElementById('messageBox');
    const submitButton = document.getElementById('submitButton');
    
    // Basic client-side validation check
    if (!form.checkValidity()) {
        messageBox.textContent = 'Please fill out all required fields correctly.';
        messageBox.className = 'p-3 rounded-lg text-sm bg-red-100 text-red-700';
        messageBox.classList.remove('hidden');
        return;
    }

    // Simulate loading state
    submitButton.textContent = 'Registering...';
    submitButton.disabled = true;
    submitButton.classList.add('opacity-60');
    messageBox.classList.add('hidden');

    // Simulate API call delay (2 seconds)
    setTimeout(() => {
        // Get form data (for logging/debugging)
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log('Simulated Registration Data:', data);
        
        // Success message
        messageBox.textContent = `Success! Welcome, ${data.fullName}. Check your email for a confirmation link.`;
        messageBox.className = 'p-3 rounded-lg text-sm bg-green-100 text-green-700';
        messageBox.classList.remove('hidden');

        // Reset button and clear form
        submitButton.textContent = 'Complete Registration';
        submitButton.disabled = false;
        submitButton.classList.remove('opacity-60');
        form.reset(); 

    }, 2000);
}