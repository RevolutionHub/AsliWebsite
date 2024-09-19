// Reservation form submission
document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var formData = new FormData(this); // Collect form data

    // Send the form data to Google Apps Script using fetch
    fetch('https://script.google.com/macros/s/AKfycbyCFBFt_mTvQUqDGpsz8E9jpy5-7YfH285slB-SFf1mV80aUffuBm97IsZq24-bsnUwrA/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text()) // Use response.text() to handle plain text response
    .then(data => {
        // Display a success message
       // document.getElementById('successMessage').style.display = 'block';
        document.getElementById('reservationForm').reset(); // Clear the form after success
        
        // Optionally, hide or reset any other elements if needed
        // Example: Reset form UI or show success animations
    })
    .catch(error => {
        console.error('Error occurred during reservation submission:', error);
        alert("There was an error submitting your reservation. Please try again.");
    });
});
