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
  fetch("https://script.google.com/macros/s/AKfycbw8_DbXTw7vgU9nRG4driTMEme3cvMoZVWkVr5Q7cGJ1x9I7Ok6-aCwHD86GTqtGc1KUA/exec", {  // Replace with your Google Apps Script Web App URL
      method: "POST",
      mode: 'no-cors',  // This disables CORS checks
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json"
      }
  })
  .then(response => {
      console.log("Raw response:", response); // Log the raw response for debugging
      if (!response.ok) {
          throw new Error("Network response was not ok: " + response.statusText);
      }
      return response.json();
  })
  .then(result => {
      console.log("Parsed JSON result:", result); // Log the parsed result
      if (result.status === "success") {
          alert("Reservation successfully submitted!");
          document.getElementById("reservationForm").reset();  // Clear the form after success
      } else {
          alert("There was an error submitting your reservation.");
      }
  })
  .catch(error => {
      console.error("Error occurred during reservation submission:", error);
      alert("There was an error submitting your reservation. Please try again.");
  });
}
