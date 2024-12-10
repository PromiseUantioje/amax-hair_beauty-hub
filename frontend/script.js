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


        const menuIcon = document.querySelector('.menu-icon');
        const navbar = document.querySelector('.navbar');
                
        menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
       