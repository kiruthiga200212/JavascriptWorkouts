document.addEventListener('DOMContentLoaded', function() {
    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const email = document.getElementById("email");
    const altEmail = document.getElementById("altEmail");
    const phoneNumber = document.getElementById("number");
    const nextButtons = document.querySelectorAll(".nextButton");
    const prevButtons = document.querySelectorAll('.previous-btn');
    const formPages = document.querySelectorAll('.form-main-container');
    const processSteps = document.querySelectorAll('.process div');
    
    let currentPage = 0;

    const createErrorMessageElement = (element) => {
        const errorSpan = document.createElement("span");
        errorSpan.className = "error-message";
        element.parentElement.appendChild(errorSpan);
        return errorSpan;
    };
    
    const firstNameError = createErrorMessageElement(firstName);
    const lastNameError = createErrorMessageElement(lastName);
    const emailError = createErrorMessageElement(email);
    const altEmailError = createErrorMessageElement(altEmail);
    const phoneNumberError = createErrorMessageElement(phoneNumber);
    
    function updatePage(step) {
        formPages.forEach((page, index) => {
            page.style.display = (index === step) ? 'block' : 'none';
        });
        processSteps.forEach((stepElement, index) => {
            stepElement.classList.toggle('active', index === step);
        });
    }

    function validateForm(event) {
     
        let isValid = true;

        // First Name Validation
        if (firstName.value.trim() === "") {
            isValid = false;
            firstNameError.textContent = "First name is required";
        } else {
            firstNameError.textContent = "";
        }

        // Last Name Validation
        if (lastName.value.trim().length < 2) {
            isValid = false;
            lastNameError.textContent = "(Atleast 2 character long)";
        } else {
            lastNameError.textContent = "";
        }

        // Email Validation
        if (!validateEmail(email.value)) {
            isValid = false;
            emailError.textContent = "Please enter a valid email address";
        } else {
            emailError.textContent = "";
        }

        // Alternate Email Validation
        if((email.value) == (altEmail.value)){
                isValid = false;
                altEmailError.textContent = "please Enter different Email Address";
        }else{
                altEmailError.textContent = "";
        }

        // Phone Number Validation
        if (!validatePhoneNumber(phoneNumber.value)) {
            isValid = false;
            phoneNumberError.textContent = "Please enter a valid 10-digit phone number";
        } else {
            phoneNumberError.textContent = "";
        }

        return isValid;
    }

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (validateForm() && currentPage < formPages.length - 1) {
                currentPage++;
                updatePage(currentPage);
            }
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentPage > 0) {
                currentPage--;
                updatePage(currentPage);
            }
        });
    });

    updatePage(currentPage);

    const submit = document.getElementById("submit");
    const successMessage = document.getElementById("sucess-container");
    const homeBtn = document.getElementById("home-btn");

    submit.addEventListener("click", (event) => {
        event.preventDefault();
        if (validateForm()) {
            successMessage.style.display = "block";
        }
    });

    homeBtn.addEventListener("click", () => {
        window.location.href = "http://127.0.0.1:5501/-Test-practice-/Projects/19-surveyForm/home.html";
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePhoneNumber(phoneNumber) {
        const re = /^\d{10}$/;
        return re.test(String(phoneNumber));
    }
});
