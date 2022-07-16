import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from "basiclightbox";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function createImgMarkup(gallery) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </div>`;
    })
    .join("");
}

const imgMarkup = createImgMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imgMarkup);

let instance = null;

function imgHandler(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const originalImg = e.target.dataset.source;
  instance = basicLightbox.create(`
    <img src="${originalImg}" width="100%">
`);
  instance.show();
  document.addEventListener("keydown", closeModalKeyEscape);
}

galleryContainer.addEventListener("click", imgHandler);

function closeModalKeyEscape(e) {
  if (e.key === "Escape") {
    instance.close(() => console.log("lightbox not visible anymore"));
  }
  document.removeEventListener("keydown", closeModalKeyEscape);
}
