import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryEl = document.querySelector('.gallery');

const markupGallery = galleryItems.map(({preview, original, description }) => `<li class="gallery__item">
<a class="gallery__link" href= "${original}">
   <img class="gallery__image" src ="${preview}" alt ="${description}" />
</a>
</li>`).join('');


galleryEl.insertAdjacentHTML('beforeend', markupGallery);

galleryEl.addEventListener('click', onOpenModal);

function onOpenModal(event){
    event.preventDefault();

    const currentItem = event.target;
    if(currentItem.nodeName !== 'IMG'){
        return }
        
        const instance = basicLightbox.create(`<img class="gallery__image" src="${currentItem.parentNode.href}" />`);

        instance.show()

        document.addEventListener('keydown', onCloseModal);
  
        function onCloseModal(event) {
          if (event.code === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', onCloseModal);
          }
        }

}



