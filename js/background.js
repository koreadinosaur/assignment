const images = ["sunsetbusan.jpg","busan.jpg","hanok.jpg"];
const chosenImages = images[Math.floor(Math.random()*images.length)];

const bgImages = document.createElement("img");
bgImages.src = "/img/" + chosenImages;
// `/img/${chosenImages}`; // 탬플릿 리터럴

document.body.appendChild(bgImages); //prepend는 앞에 추가하는 것.