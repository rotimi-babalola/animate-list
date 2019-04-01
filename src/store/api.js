import instance from './axiosConfig';

export default {
  getPosts() {
    return instance.get('/posts');
  },
};
