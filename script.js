const images = ['images/image1.png', 'images/image2.png', 'images/image3.png', 'images/image4.png', 'images/image5.png', 'images/image6.png', 'images/image7.png']; // Список изображений
const texts = ['Ядерка', 'Холокост', 'Геноцид', 'Массовые чистки', 'Казнь', 'Термоядерная война']; // Список текстов

const imageElement = document.getElementById('image');
const textElement = document.getElementById('text');

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let lastUsed = { image: null, text: null };

// ...

setInterval(() => {
  let newImage, newText;
  do {
    newImage = randomItem(images);
    newText = randomItem(texts);
  } while (newImage === lastUsed.image || newText === lastUsed.text);

  lastUsed.image = newImage;
  lastUsed.text = newText;
  imageElement.src = newImage;
  textElement.textContent = newText;
}, 1000);

window.onload = function() {
  const audio = document.getElementById('audio');
  audio.play();
};