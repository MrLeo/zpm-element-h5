<template>
  <div :style="{ alignSelf: align }">
    <span class="txt">已发送验证码至</span>
    <span class="tel">
      <slot>xxx-xxxx-xxxx</slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      default: "flex-start"
    }
  }
};
</script>

<style scoped>
.txt {
  font-size: 24px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(173, 180, 201, 1);
  line-height: 33px;
}
.tel {
  color: #0587fe;
}
</style>
