document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

     // Check if the 'time' field is empty
     if (!formData.get('time')) {
        alert('No available times for this date. Please select another date.');
        return; // Stop form submission if the time field is empty
    }

    fetch('https://script.google.com/macros/s/AKfycbwgKtb6PDZaBqrMZ0wOH0VKOkCFnugrqtZ1N7LCbV0-9-udd2LPVdiwYGZnJ3ha8_ZFgg/exec', {
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
