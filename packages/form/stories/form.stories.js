import LgForm from '../'
import lgFormItem from '../../form-item'
import lgButton from '../../button'
import lgInput from '../../input'
const _defaultForm = () => {
  return {
    username: "",
    password: "",
    email: "",
  };
};
export default {
  title: 'LgForm',
  component: LgForm,
};

export const loginForm = () => ({
  components: {
    LgForm,
    lgFormItem,
    lgButton,
    lgInput
  },
  template:
    `
     <lg-form class="form" ref="form" :model="form" :rules="rules">
       <lg-form-item label="用户名" prop="username">
         <!-- <lg-input v-model="form.username" placeholder="请输入用户名"></lg-input> -->
         <lg-input
           :value="form.username"
           @input="(e) => (form.username = e)"
           placeholder="请输入用户名"
         ></lg-input>
       </lg-form-item>
       <lg-form-item label="密码" prop="password">
         <lg-input v-model="form.password"></lg-input>
       </lg-form-item>
      <lg-form-item label="邮箱" prop="email">
        <lg-input v-model="form.email"></lg-input>
      </lg-form-item>
       <lg-form-item>
         <lg-button type="primary" @click="login">登录</lg-button>
       </lg-form-item>
     </lg-form>
  `,
  data() {
    return {
      form: _defaultForm(),
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
          },
          {
            min: 6,
            max: 12,
            message: "请输入6-12位密码",
          },
        ],
        email: [
          {
            required: true,
            message: "请输入邮箱",
          },
        ],
      },
    };
  },
  methods: {
    login(e) {
      // console.log(1234);
      this.$refs.form.validate((valid) => {
        console.log(valid);
      });
    },
  },
})