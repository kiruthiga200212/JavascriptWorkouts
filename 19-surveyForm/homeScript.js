
//login page visible 
window.addEventListener("DOMContentLoaded", () => {
    var homeLoginBtns = document.querySelectorAll(".home-log-btn");
    var displayLogin = document.querySelector(".login-register");

    homeLoginBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            displayLogin.style.display = "block";
        });
    });

    const errorMessage = document.getElementById("errorMessage");

    var loginBtn = document.getElementById("login-btn");
    var emailInput = document.getElementById("lemail");
    var passwordInput = document.getElementById("lpassword");

    loginBtn.addEventListener("click", (event) => {
        event.preventDefault(); 

        let isValid = true;
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        if (emailValue == "" && passwordValue == "") {
            confirm("Enter Your Email and Password");
            isValid = false;
        }        

        if (!validEmail(emailValue)) {
            errorMessage.textContent = "Incorrect E-mail, username or password";
            isValid = false;
        } 

        if (!validPassword(passwordValue)) {
            errorMessage.textContent = "Incorrect Password";
            isValid = false;
        } 

        if (isValid) {
            errorMessage.textContent = ""; 
            alert("login successfully!")
            displayLogin.style.display = "none";
        }
    });

    function validEmail(email) {
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        return emailPattern.test(email);
    }

    function validPassword(password) {
        const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,10}$/;
        return passwordPattern.test(password);
    }

});

window.addEventListener("scroll", () => {
    var header = document.getElementById("header");
    var ul = document.getElementById("ul");

    if (window.scrollY  > 30) {
        header.classList.add("header");
        ul.classList.add("ul");
    } else  {
        ul.classList.remove("ul");
        header.classList.remove("header");
    }
});



window.addEventListener("scroll", () => {
    const slideContainers = document.querySelectorAll(".slidercontent");
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    slideContainers.forEach((container, index) => {
        const start = window.innerWidth * index;
        const end = window.innerWidth * (index + 1) ;
        if (scrollTop >= start && scrollTop < end) {
            container.classList.add('active');
            console.log("scrolling working");
            console.log(`Slide ${index + 1} is active`);
        } else {
            container.classList.remove('active');
        }
    });
});
// window.addEventListener("scroll", () => {
//     const slideContainers = document.querySelectorAll(".slidercontent");
//     const scrollTop = window.scrollY || document.documentElement.scrollTop;
//     const windowHeight = window.innerHeight;

//     slideContainers.forEach((container, index) => {
//         const containerTop = container.offsetTop;
//         const containerBottom = containerTop + container.clientHeight;

//         if (scrollTop + windowHeight >= containerTop && scrollTop <= containerBottom) {
//             container.classList.add('active');
//             console.log(`Slide ${index + 1} is active`);
//         } else {
//             container.classList.remove('active');
//         }
//     });
// });


//

var listItem = document.querySelectorAll(".list-coruse-section ul li");
console.log(listItem[0]);

const options = {
    rootMargin: "0%",
    threshold: 1.0
};

let observer = new IntersectionObserver(showItem, options);
console.log(observer);

function showItem(entries) {
    entries.forEach(entry => {
        console.log('Entry:', entry);
        if (entry.isIntersecting) {
           let letters = [...entry.target.querySelectorAll('span')];
           console.log(letters)
            letters.forEach((letter, index) => {
                setTimeout(() => {
                    letter.classList.add('active');
                }, index * 10);
            });
        }
    });
}

listItem.forEach(item => {
    console.log("working");
    console.log(item);
    let newString = '';
    let itemText = item.children[0].innerHTML.split('');
    itemText.map(letter => newString += letter === '' ? `<span class="space"></span>` : `<span>${letter}</span>`);
    item.innerHTML = newString;
    observer.observe(item);
});



