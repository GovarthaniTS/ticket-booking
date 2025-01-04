// Function to handle bus ticket booking
document.getElementById('busForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const from = document.getElementById('busFrom').value;
    const to = document.getElementById('busTo').value;
    document.getElementById('busResult').innerText = `Bus ticket booked from ${from} to ${to}!`;
});

// Function to handle railway ticket booking
document.getElementById('railwayForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const from = document.getElementById('trainFrom').value;
    const to = document.getElementById('trainTo').value;
    document.getElementById('railwayResult').innerText = `Railway ticket booked from ${from} to ${to}!`;
});

// Function to handle movie ticket booking
document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const movieName = document.getElementById('movieName').value;
    const movieDate = document.getElementById('movieDate').value;
    document.getElementById('movieResult').innerText = `Movie ticket for ${movieName} on ${movieDate} booked!`;
});

// Function to handle temple ticket booking
document.getElementById('templeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const templeName = document.getElementById('templeName').value;
    const templeDate = document.getElementById('templeDate').value;
    document.getElementById('templeResult').innerText = `Temple ticket for ${templeName} on ${templeDate} booked!`;
});
