import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';


import { galleryItems } from './gallery-items';


console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const galleryItemsList = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend' , galleryItemsList);


function createGalleryItems (items){

    return items.map(({preview, original, description}) => {
   return ` <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
}).join("");
}


const lightbox = new SimpleLightbox('.gallery a', {
   captionDelay: 250,
   captionsData: 'alt',
 });
