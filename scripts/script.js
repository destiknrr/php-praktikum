function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    }

    function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    }

// Initialize AOS
document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
});

// General Typewriter Effect Function
function typeWriterEffect(element, texts, speed = 100) {
    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (element && charIndex < texts[textIndex].length) {
            element.innerHTML += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, speed);
        } else if (element) {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (element && element.innerHTML.length > 0) {
            element.innerHTML = element.innerHTML.slice(0, -1);
            setTimeout(erase, 50);
        } else if (element) {
            textIndex = (textIndex + 1) % texts.length;
            charIndex = 0;
            setTimeout(type, 500);
        }
    }

    type(); // Start the typewriter effect
}

// Initialize everything when page loads
window.onload = function () {
    const homeTypewriter = document.querySelector("#home-typewriter");
    const descTypewriter = document.querySelector("#desc-typewriter");


    if (homeTypewriter) {
        typeWriterEffect(homeTypewriter, ["nice to meet you!"]);
    }
    if (descTypewriter) {
        typeWriterEffect(descTypewriter, ["Let’s get to know more about me!"]);
    }
}


