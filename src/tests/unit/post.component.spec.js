import { shallowMount } from '@vue/test-utils';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Posts from '../../components/Posts.vue';
import store, { localVue } from '../store';

localVue.component('font-awesome-icon', FontAwesomeIcon);

describe('Posts Component', () => {
  it('renders lists of posts from vuex state', () => {
    const wrapper = shallowMount(Posts, {
      store,
      localVue,
      computed: {
        posts() {
          return this.$store.getters.posts;
        },
      },
    });

    expect(wrapper.find('.list-content').text()).toEqual('Post 1');
    expect(wrapper.findAll('.list-content').length).toEqual(3);
    expect(wrapper.find('.list-header').text()).toEqual('Sortable Post List');
  });
});
