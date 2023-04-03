import { galleryItems } from './gallery-items.js';
// Change code below this line





const galleryElement = document.querySelector('.gallery');

const markupGalleryItem = galleryItems.map(({preview, original, description }) => `<li class="gallery__item">
<a class="gallery__link" href= "${original}">
   <img class="gallery__image" src ="${preview}" alt ="${description}"/></a></li>`).join('');


   galleryElement.insertAdjacentHTML('beforeend', markupGalleryItem);

   galleryElement.addEventListener('click', onOpenModal);

function onOpenModal(event) {
    event.preventDefault();

    const ligthBox = new SimpleLightbox('.gallery .gallery__link', {
        captionData: 'alt',
        captionDelay: 250
    });
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            ligthBox.close();
        }
    });
    
} 

