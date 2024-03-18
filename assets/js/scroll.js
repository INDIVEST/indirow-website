const container = document.querySelector('.scroll-container');
const content = document.querySelector('.scroll-content');

let isScrolling;

container.addEventListener('mouseenter', function() {
clearInterval(isScrolling);
});

container.addEventListener('mouseleave', function() {
isScrolling = setInterval(() => {
content.style.transform = 'translateX(-1px)';
}, 50);
});

isScrolling = setInterval(() => {
content.style.transform = 'translateX(-1px)';
}, 50);
