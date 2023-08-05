import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const feachPictures = async params => {
  try {
    const { data } = await axios.get('/', {
      params: {
        key: '38159533-e12282be0ac062c7779a27933',
        image_type: 'photo',
        orientation: 'horizontal',
        ...params,
      },
    });
    return data;
  } catch {}
};
