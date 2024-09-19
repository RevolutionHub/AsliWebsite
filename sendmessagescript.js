document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('https://script.google.com/macros/s/AKfycbwgndg89OVCGqK0mwdPcXop-fo-kMxTD34vc3IrZCffHjUCEkgKtpF_JSu58EjNtbd4nw/exec', {
        method: 'POST',
        mode: 'no-cors',  // This disables CORS checks
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('reservationForm').style.display = 'none';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
