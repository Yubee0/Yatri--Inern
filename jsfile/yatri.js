function formHandler(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById("Username");
    const addressInput = document.getElementById("Address");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("Phone");
    const aboutInput = document.getElementById("About");

    const name = nameInput.value.trim();
    const Address = addressInput.value.trim();
    const email = emailInput.value.trim();
    const phoneNumber = phoneInput.value.trim();
    const About = aboutInput.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    let errors = {};

    if (!name) {
        errors.name = "Name is Required!";
    }
    if (!Address) {
        errors.Address = "Address is Required!";
    }
    if (!email) {
        errors.email = "Email is Required!";
    } else if (!emailPattern.test(email)) {
        errors.email = "Enter a valid email address.";
    }
    if (!phoneNumber) {
        errors.phoneNumber = "Phone Number is Required!";
    } else if (!phonePattern.test(phoneNumber)) {
        errors.phoneNumber = "Enter a valid Phone Number.";
    }
    if (!About) {
        errors.About = "Message is Required!";
    }

    nameInput.classList.remove("error");
    addressInput.classList.remove("error");
    emailInput.classList.remove("error");
    phoneInput.classList.remove("error");
    aboutInput.classList.remove("error");

    nameInput.placeholder = "Name";
    addressInput.placeholder = "Address";
    emailInput.placeholder = "Email";
    phoneInput.placeholder = "Phone Number";
    aboutInput.placeholder = "About";

    if (Object.keys(errors).length > 0) 
{
        if (errors.name) {
            nameInput.value = "";
            nameInput.placeholder = errors.name;
            nameInput.classList.add("error");

        }
        if (errors.Address) {
            addressInput.value = "";
            addressInput.placeholder = errors.Address;
            addressInput.classList.add("error");
        }
        if (errors.email) {
            emailInput.value = "";
            emailInput.placeholder = errors.email;
            emailInput.classList.add("error");
        }
        if (errors.phoneNumber) {
            phoneInput.value = "";
            phoneInput.placeholder = errors.phoneNumber;
            phoneInput.classList.add("error");
        }
        if (errors.About) {
            aboutInput.value = "";
            aboutInput.placeholder = errors.About;
            aboutInput.classList.add("error");
        }
        } 
        else {
            alert(JSON.stringify({
            name: name,
            Address: Address,
            email: email,
            phoneNumber: phoneNumber,
            About: About
        }));
        document.getElementById("contact-form").reset();
    }
}
