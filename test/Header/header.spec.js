import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer'

describe('Footer', () => {
  const wrapper = mount(Footer)
  it('Render the correct marup', () => {
    expect(wrapper.html()).toContain('<div class="test">0</div>')
  })
  it('Has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
  it('Button click should increment the count', () => {
    expect(wrapper.vm.test).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.test).toBe(1)
  })
  it('Button click should increment the count text', async () => {
    expect(wrapper.text()).toContain('1')
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.text()).toContain('2')
  })
})
