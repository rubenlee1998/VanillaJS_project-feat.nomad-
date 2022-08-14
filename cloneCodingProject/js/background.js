const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
];

const todaysImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.className = 'background';

bgImage.src = `img/${todaysImg}`;

document.body.prepend(bgImage);

