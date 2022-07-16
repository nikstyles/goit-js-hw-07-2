import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery"); // Обращение к родителю в HTML
const imageMarkup = createImage(galleryItems); //Переменная для вызова функции

galleryContainer.insertAdjacentHTML("beforeend", imageMarkup); //Добавление в родителя готовой разметки

function createImage(image) {
  //Рендер разметки
  return image
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>`;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a", {
  //   captionSelector: "img",
  //   captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
  //   doubleTapZoom: 5,
  //   loop: false,
});
// gallery.on("show.simplelightbox", function () {});
