document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('https://script.google.com/macros/s/AKfycbyCFBFt_mTvQUqDGpsz8E9jpy5-7YfH285slB-SFf1mV80aUffuBm97IsZq24-bsnUwrA/exec', {
        method: 'POST',
        mode: 'no-cors',  // This disables CORS checks
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.status === 'success') {
            alert('Reservation successfully submitted!');
        } else {
            alert('There was an error submitting your reservation.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
