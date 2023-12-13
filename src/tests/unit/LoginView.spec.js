// import {describe, expect, test } from '@jest/globals'
import { shallowMount } from '@vue/test-utils';
import LoginViewVue from '@/views/LoginView.vue';
describe('testing Login.vue', () => {
    test('Usuario Admin', async () => {
     const wrapper = shallowMount(LoginViewVue);
     const email = 'ablancaa@gmail.com';
     await wrapper.find('input').setValue(email);
     expect(wrapper.find('button').text()).toEqual(email);
    });
  
});
  
describe('Some describe text here', () => {
    test('3 + 3 is 6', () => {
      expect(3 + 3).toBe(6);
    });
  });