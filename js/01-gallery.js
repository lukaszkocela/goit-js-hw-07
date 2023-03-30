import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

for (const image of galleryItems) {
  const newImage = `<div class="gallery__item"> <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a></div>`;
  galleryEl.insertAdjacentHTML("beforeend", newImage);
}

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}"/>`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            instance.close();
          }
        });
      },
    }
  );
  instance.show();
});
