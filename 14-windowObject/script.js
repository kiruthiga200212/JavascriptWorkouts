var content = document.getElementById("content");
const time = setInterval(myFunc, 2000);
function myFunc() {
    console.log("display");
    content.style.display = "block";
}

function clear() {
    clearInterval(time);
    content.style.display = "none";
}

setTimeout(clear, 4000);


var heading = document.getElementById("heading");

window.addEventListener("scroll", () => {
    heading.classList.add("scrolled");
});



document.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card');
    const viewportHeight = window.innerHeight;

    cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < viewportHeight && cardTop > 0) {
            card.style.transform = 'translateY(-' + index * 30 + '%)';
            card.style.opacity = '1';
        } else {
            card.style.opacity = '0';
        }
    });
});
