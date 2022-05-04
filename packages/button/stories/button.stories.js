import LgButton from '../'

export default {
  title: 'LgButton',
  component: LgButton,
};

export const ConfirmButton = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LgButton },
  template: '<lg-button>我爱我自己</lg-button>',
});