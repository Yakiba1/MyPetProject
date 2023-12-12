import { mediaScopes } from '../../constants/media';

export default {
  image: {
    quality: 100,
  },
  loading: 'lazy',
  screens: {
    ...mediaScopes,
  },
};
