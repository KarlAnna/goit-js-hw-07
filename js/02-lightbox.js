import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery')
const markup = createMarkup(galleryItems)
galleryContainer.insertAdjacentHTML('afterbegin', markup)

function createMarkup(arr) {
    return arr.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
    }).join('')
}

const currentImgAlt = galleryContainer['alt']
console.log(currentImgAlt);
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt',
    captionDelay: 250 });