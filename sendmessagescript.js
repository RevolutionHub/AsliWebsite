document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    var data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('https://script.google.com/macros/s/AKfycbyCFBFt_mTvQUqDGpsz8E9jpy5-7YfH285slB-SFf1mV80aUffuBm97IsZq24-bsnUwrA/exec', {
        method: 'POST',
        mode: 'no-cors',  // This disables CORS checks
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
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
