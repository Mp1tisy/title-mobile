<template>
  <div>
    <van-nav-bar title="登录" />
    <van-field v-model="mobile" placeholder="请输入手机号">
      <van-icon class="mobile" slot="left-icon" class-prefix="icon" name="shouji" />
    </van-field>
    <van-field v-model="code" left-icon="question-o" placeholder="请输入验证码">
      <van-icon class="lock" slot="left-icon" class-prefix="icon" name="icon--" />
      <div slot="button" class="divide">
        <van-button round type="info">获取验证码</van-button>
      </div>
    </van-field>
    <div class="loginborder">
      <van-button type="info" class="loginbutton">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mobile: '',
      code: ''
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

.divide{
    border-left: 1px solid #ededed;
    padding-left: 10px;
}
</style>
