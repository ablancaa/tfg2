import NavBar2 from '@/components/NavBar2.vue';
import { shallowMount, mount } from '@vue/test-utils';

test('NavBar2.vue', () => {
    it('El componente muestra el estado inicial'), () => {
        const wrapper = mount(NavBar2)
        const wrapper = shallowMount
        expect(wrapper.find("h3")).exists()).toBe(0)
    })
    it('Muestra email de usuario'), () => {

    })
})