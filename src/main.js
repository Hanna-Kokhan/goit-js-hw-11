import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
    });
    return;
  }

  loader.style.display = 'block';
  gallery.innerHTML = '';

  fetchImages(query)
    .then(images => {
      renderGallery(images);
    })
    .catch(error => {
      iziToast.error({
        title: '',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        class: 'custom-error-toast',
        position: 'topRight',
        timeout: 5000,
      });
    })
    .finally(() => {
      loader.style.display = 'none';
    });

  event.target.reset();
});
