document.getElementById('reservationForm').addEventListener('submit', function(event)  {
    event.preventDefault(); // Prevent form from reloading the page

    var formData = new FormData(this);

    // Send the data to Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbzCjontu46gnumcf3y_R9Z0EDmxadnBLdBQluNe3XviWiYQafgk14nD2jqd3lcBitrwOg/exec", {
        method: "POST",
        body: formData
    })
    .then(response => {
        console.log("Raw response:", response); // Log the raw response for debugging
    })
    .then(result => {
        if (result.status === "success") {
            alert("Reservation successfully submitted!");   
            document.getElementById("reservationForm").reset();  // Clear the form after success
        } else {
            alert("There was an error submitting your reservation: " + result.message);
        }
    })
    .catch(error => {
        console.error("Error occurred during reservation submission:", error);
        alert("There was an error submitting your reservation. Please try again.");
    });
});
