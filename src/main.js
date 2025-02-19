import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

import iconPath from './img/bi_x-octagon.svg';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.show({
      messageColor: '#fff',
      iconColor: '#fff',
      iconUrl: iconPath,
      title: '',
      message: 'Please enter a search query!',
      position: 'topRight',
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
      iziToast.show({
        messageColor: '#fff',
        color: '#fff',
        iconColor: '#fff',
        iconUrl: iconPath,
        backgroundColor: '#ef4040',
        title: '',
        message:
          'Sorry, there are no images matching <br> your search query. Please try again!',
        position: 'topRight',
        maxWidth: '432px',
        borderBottom: '2px solid #ffbebe',
        borderRadius: '4px',
        titlecolor: '#fff',
        top: '20px',
        right: '20px',
      });
    })
    .finally(() => {
      loader.style.display = 'none';
    });

  event.target.reset();
});
