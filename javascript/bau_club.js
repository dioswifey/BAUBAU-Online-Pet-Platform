// --- JAVASCRIPT FOR UX EFFECTS ---

// 1. Get all service cards
const cards = document.querySelectorAll('.service');

// 2. Function to map mouse position to rotation values
function mapRange(value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// 3. Attach Mouse and Touch listeners to each card
cards.forEach(card => {
    // --- 3D TILT EFFECT ---
    const handleMove = (e) => {
        // Prevent tilt if the card is active (clicked/tapped)
        if (card.classList.contains('is-active')) return;

        // Determine if it's a mouse or touch event
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;

        const rect = card.getBoundingClientRect();
        
        // Calculate the center of the card
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from center (-1 to 1)
        const x = (clientX - centerX) / (rect.width / 2);
        const y = (clientY - centerY) / (rect.height / 2);

        // Map the position to subtle rotation values (Max 5 degrees)
        const rotY = mapRange(x, -1, 1, -5, 5); // Rotate Y based on X position
        const rotX = mapRange(y, -1, 1, 5, -5); // Rotate X based on Y position

        // Apply the transform
        card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
    };

    const handleLeave = () => {
        // Only reset if the card is not active
        if (!card.classList.contains('is-active')) {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        }
    };

    // Mouse Events
    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', handleLeave);

    // Touch Events (using mouse events for basic touch emulation)
    card.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent default scroll/zoom behavior
        handleMove(e);
    });
    card.addEventListener('touchmove', handleMove);
    card.addEventListener('touchend', handleLeave);

    // --- QUICK POP EFFECT (Selection) ---
    const buttons = card.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active state from all other cards
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('is-active');
                    otherCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
                }
            });

            // Toggle active state for the clicked card
            const wasActive = card.classList.toggle('is-active');
            
            // Apply a strong visual pop if activated
            if (wasActive) {
                // Apply flat transform to override tilt, and slightly enlarge
                card.style.transform = 'scale(1.05)';
            } else {
                // Reset if deactivated
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
            }
        });
    });
});