import axios from 'axios';

const API_KEY = '48886188-3f23dcecdc45a7bc3ec26601c';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      if (response.data.hits.length === 0) {
        iziToast.warning({
          backgroundColor: 'rgba(239, 64, 64, 1)',
          messageColor: '#ffffff',
          iconColor: '#fff',
          messageSize: '16px',
          iconUrl: '../img/bi_x-octagon.svg',
          transitionIn: 'bounceInLeft',
          position: 'topRight',
          displayMode: 'replace',
          closeOnClick: true,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      return response.data.hits;
    });
}
