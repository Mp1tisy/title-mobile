<template>
  <div id="app">
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-icon name="chat-o"></van-icon>
    <van-icon name="chat-o"></van-icon>
    <van-icon name="chat-o"></van-icon>
    <div class="test">test</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.test {
  height: 200px;
  width: 200px;
  border: 1px solid red;
}
</style>
