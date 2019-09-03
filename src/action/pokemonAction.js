import { getImage } from '../services/pokemonApi';

export const FETCH_IMAGE = 'FETCH_IMAGE';
export const FETCH_IMAGE_LOADING = 'FETCH_IMAGE_LOADING';

export const fetchImage = () => ({
  type: FETCH_IMAGE,
  payload: getImage(),
  pendingType: FETCH_IMAGE_LOADING
});


