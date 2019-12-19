const prevbtn = document.querySelector('.prevbtn');
const nextbtn = document.querySelector('.nextbtn');
const container = document.querySelector('.header-wrapper');

let counter = 0;

//prevbtn.addEventListener('click', prevslide);
nextbtn.addEventListener('click', nextslide);

function nextslide() {
    counter++;
    container.style.backgroundImage = 'url(image-2.jpg';
}