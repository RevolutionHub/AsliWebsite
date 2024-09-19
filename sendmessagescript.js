function submitReservation(event) {
    event.preventDefault(); // Prevent form from reloading the page

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    // Ensure all required fields are filled
    if (!name || !email || !phone || !date || !time || !guests) {
        alert("Please fill out all fields.");
        return;
    }

    const data = {
        name: name,
        email: email,
        phone: phone,
        date: date,
        time: time,
        guests: guests
    };

    console.log("Sending reservation data:", data); // Log the data for debugging

    // Send the data to Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbxEs0Y5wUrMQdotqeYRci9HF4nOoaFIM3hhCKPLq854txOwvYPG3_Lrthse9Yux_7ex4g/exec", {
        method: "POST",
        mode: 'no-cors',  // This disables CORS checks
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log("Raw response:", response); // Log the raw response for debugging

        if (!response.ok) {
            throw new Error("Network response was not ok: " + response.statusText);
        }
        return response.json(); // Parse the response as JSON
    })
    .then(result => {
        console.log("Parsed JSON result:", result); // Log the parsed result

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
}
