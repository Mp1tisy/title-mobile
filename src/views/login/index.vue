<template>
  <div>
    <van-nav-bar title="登录" />
    <van-field v-model="user.mobile" placeholder="请输入手机号">
      <van-icon class="mobile" slot="left-icon" class-prefix="icon" name="shouji" />
    </van-field>
    <van-field v-model="user.code" left-icon="question-o" placeholder="请输入验证码">
      <van-icon class="lock" slot="left-icon" class-prefix="icon" name="icon--" />
      <div slot="button" class="divide">
        <van-button round type="info" v-if="!isCountDown" @click="getcode">获取验证码</van-button>
        <van-count-down v-else :time="time" format="ss s" @finish="resetcode" />
      </div>
    </van-field>
    <div class="loginborder">
      <van-button type="info" class="loginbutton" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
import { login as userlogin, getcode as usergetcode } from '@/api/user.js'

export default {
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      time: 60 * 1000,
      isCountDown: false
    }
  },
  methods: {
    resetcode () {
      this.isCountDown = false
    },
    async getcode () {
      try {
        let result = await usergetcode(this.user)
        console.log('验证码发送成功', result)
        this.isCountDown = true
      } catch (err) {
        console.log('验证码发送失败', err)
        this.$toast.fail('请勿重复发送验证码')
      }
    },
    async login () {
      this.$toast.loading({
        message: 'Loading...',
        forbidClick: true,
        duration: 0
      })

      try {
        let result = await userlogin(this.user)
        console.log('登录成功', result)
        this.user = {
          mobile: '',
          code: ''
        }
        this.$toast.success('登录成功')
      } catch (err) {
        console.log('登录失败', err)
        this.$toast.fail('登录失败')
      }
    }
  }
}
</script>

<style scoped lang="less">
.lock {
  font-size: 24px;
  line-height: 30px;
}

.mobile {
  font-size: 20px;
  margin-left: 3px;
  line-height: 30px;
}

.van-button--round {
  height: 26px;
  line-height: 26px;
  background-color: #ededed;
  border-color: #ededed;
  color: #666666;
  padding: 0 15px;
}

.van-field {
  display: flex;
  align-items: center;
}

.loginborder {
  padding: 0 16px;
  .loginbutton {
    margin-top: 26px;
    background-color: #6db4fb;
    border-color: #6db4fb;
    width: 100%;
    border-radius: 5px;
  }
}

.divide {
  border-left: 1px solid #ededed;
  padding-left: 10px;
}
</style>
