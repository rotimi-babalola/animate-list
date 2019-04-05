import { shallowMount } from '@vue/test-utils';
import History from '../../components/History.vue';
import store, { localVue } from '../store';

describe('History Component', () => {
  it.only('renders history from vuex state', () => {
    const wrapper = shallowMount(History, {
      store,
      localVue,
    });

    // we only have 2 items in history in the store
    expect(wrapper.findAll('.list-content').length).toEqual(2);
    expect(wrapper.find('.time-travel-button').text()).toEqual('Time Travel');
  });
});
