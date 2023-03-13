// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const createGallery = createGaleryMarkup (galleryItems);

galleryEl.insertAdjacentHTML('afterbegin', createGallery)

function createGaleryMarkup (galleryItems) {
return galleryItems.map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img 
                class="gallery__image"
                src="${preview}" 
                data-source="${original}"
                alt="${description}" /> 
            </a>           
        </li>
        `;}).join('');
   
};

new SimpleLightbox('.gallery a', {   
    captionDelay: 250,    
    captionsData: 'alt',    
});
