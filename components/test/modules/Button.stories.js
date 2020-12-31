import MyButton from './Button.vue'

export default {
  title: 'Modules/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
})

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}
