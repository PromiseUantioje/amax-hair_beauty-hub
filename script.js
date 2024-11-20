document.getElementById('registrationForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // send data to server
    const response = await fetch('/auth/register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,email,password })

    })

        const data = await response.json();

        alert('New User Created Successfully')

     })

     // Initialize and add the map
     function initMap() {
        // The location (latitude and longitude)
        const location = { lat: 40.73061, lng: -73.935242 };

        // Create the map centered at the location
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12, // Zoom level
            center: location,
        });

        // Add a marker at the location
        const marker = new google.maps.Marker({
            position: location,
            map: map,
        });
    }