
document.getElementById('submit-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    var firstName = document.getElementById('first-name');
    var lastName = document.getElementById('last-name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var emailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{1,1})+$/; // Regular expression for email format

    document.getElementById("first-name-error").textContent = "";
    document.getElementById("last-name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";

    // Check and handle errors for each input field
    if (firstName.value === "") {
        document.getElementById("first-name-error").textContent = "First Name cannot be empty";
        firstName.style.borderColor = '#FF7A7A';
        document.getElementById("first-name-icon").style.display = "inline-block";
    } else {
        firstName.style.borderColor = '#B9B6D3';
        document.getElementById("first-name-icon").style.display = "none";
    }

    if (lastName.value === "") {
        document.getElementById("last-name-error").textContent = "Last Name cannot be empty";
        lastName.style.borderColor = '#FF7A7A';
        document.getElementById("last-name-icon").style.display = "inline-block";
    } else {
        lastName.style.borderColor = '#B9B6D3';
        document.getElementById("last-name-icon").style.display = "none";
    }

    if (email.value === "" || !emailPattern.test(email.value)) {
        email.style.borderColor = '#FF7A7A';
        document.getElementById("email-icon").style.display = "inline-block";

    }
    if (!emailPattern.test(email.value)) {
        document.getElementById("email-error").textContent = "Please enter a valid email address";
    }
    if (email.value === "") {
        document.getElementById("email-error").textContent = "Email cannot be empty";
    }
    else {
        email.style.borderColor = '#B9B6D3';
        document.getElementById("email-icon").style.display = "none";
    }

    if (password.value === "") {
        document.getElementById("password-error").textContent = "Password cannot be empty";
        password.style.borderColor = '#FF7A7A';
        document.getElementById("password-icon").style.display = "inline-block";
    } else {
        password.style.borderColor = '#B9B6D3';
        document.getElementById("password-icon").style.display = "none";
    }
});
