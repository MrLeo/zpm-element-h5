<template>
  <div class="sms">
    <TipMobile align="center">150xxxx0000</TipMobile>
    <Codes @onCheck="checkHandler" :length="6"></Codes>
    <Send
      :timeout="15"
      :auto="auto"
      text="获取验证码"
      @onSend="sendHandler"
    ></Send>
  </div>
</template>

<script>
import TipMobile from "./TipMobile";
import Codes from "./Codes";
import Send from "./Send";

export default {
  components: {
    TipMobile,
    Codes,
    Send
  },
  props: {
    auto: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    checkHandler(obj) {
      console.log("TCL: checkHandler -> obj", obj);
    },
    sendHandler() {
      console.log("TCL: sendingHandler -> ");
    }
  }
};
</script>

<style scoped lang="less">
.sms {
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: (40/32) * 1rem;
  padding: (48/32) * 1rem (32/32) * 1rem;
  background-color: rgba(109, 109, 109, 0.03);
  border-radius: (16/32) * 1rem;
  border: 1px solid rgba(151, 151, 151, 0.3);
}
</style>
