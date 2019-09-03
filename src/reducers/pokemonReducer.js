import { FETCH_IMAGE_LOADING, FETCH_IMAGE } from '../action/pokemonAction';

const initialState = {
  image: {},
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_IMAGE_LOADING:
      return { ...state, loading: true };
    case FETCH_IMAGE:
      return { ...state, image: action.payload, loading: false };
    default: 
      return state;
  }
}
