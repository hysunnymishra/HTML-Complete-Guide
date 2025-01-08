// Smooth scrolling for navigation links
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Typing animation for the input placeholder
const searchInput = document.querySelector('main input');
if (searchInput) { // Check if the input element exists
    let placeholderText = "Search for restaurant, cuisine, or a dish...";
    let index = 0;

    function typePlaceholder() {
        searchInput.setAttribute('placeholder', placeholderText.slice(0, index));
        index++;
        if (index > placeholderText.length) index = 0;
        setTimeout(typePlaceholder, 150);
    }

    typePlaceholder();
}

// Bounce effect for logo
const logo = document.querySelector('.logo img');
if (logo) { // Check if the logo element exists
    logo.addEventListener('mouseover', () => {
        logo.style.animation = 'bounce 0.5s';
    });
    logo.addEventListener('animationend', () => {
        logo.style.animation = '';
    });
}
