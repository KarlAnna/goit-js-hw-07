import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery')
const imgesMarkup = createImgesMarkup(galleryItems)
galleryContainer.insertAdjacentHTML('beforeend', imgesMarkup)

function createImgesMarkup(arr) {
    return arr.map(({preview, original, description}) => {
        return `
        <a class="gallery__link" href="#">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}""
            />
        </a>
        `
    }).join('')
}

galleryContainer.addEventListener('click', ongalleryContainerClick)

function ongalleryContainerClick(e) {
    const isItContains = e.target.classList.contains('gallery__image')
    if (!isItContains) {
        return
    }


    const currentImgDataSrc = e.target.dataset.source
    const instance = basicLightbox.create(`
    <img src="${currentImgDataSrc}"/>
    `)
    instance.show()
}