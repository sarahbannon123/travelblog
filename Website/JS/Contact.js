document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Show confirmation message
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.style.display = 'block';

    // Optionally reset the form
    this.reset();

    // Hide the message after 5 seconds
    setTimeout(() => {
        confirmationMessage.style.display = 'none';
    }, 5000);
});
