import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

for (const image of galleryItems) {
  const newImage = `<li class="gallery__item"><a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      alt="${image.description}"
    />
  </a></li>`;
  galleryEl.insertAdjacentHTML("beforeend", newImage);
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
