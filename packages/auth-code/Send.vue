<template>
  <div class="btn" :class="[sending ? 'disable' : '']" @click="clickHandler">
    {{ btnTxt }}
  </div>
</template>

<script>
import { Toast } from "mint-ui";

import Cookie from "js-cookie";

export default {
  props: {
    // 是否自动发送验证码
    auto: {
      type: Boolean,
      default: false
    },
    // 倒计时，单位s
    timeout: {
      type: Number,
      default: 10
    },
    // 按钮文字
    text: {
      type: String,
      default: "发送验证码"
    }
  },
  data() {
    return {
      sending: false, // 发送中
      btnTxt: "" // 按钮文案
    };
  },
  created() {
    this.btnTxt = this.text;
    if (this.auto) {
      this.clickHandler();
    }
  },
  methods: {
    async clickHandler() {
      try {
        // #region 校验
        if (this.sending) return false;

        let count = Cookie.get(`send_times_${this.userId}`) || 0;
        if (count >= 5) {
          Toast("每天最多获取5次");
          return false;
        }
        // #endregion

        // 点击发送按钮
        this.$emit("onSend");
        this.sending = true;

        // #region 发送成功
        Cookie.set(`send_times_${this.userId}`, ++count, {
          expires: 7,
          path: "/",
          domain: window.location.hostname
        });
        let seconds = this.timeout;
        this.btnTxt = `（ ${seconds}秒后重发 )`;
        let interval = setInterval(() => {
          seconds--;
          this.btnTxt = `（ ${seconds}秒后重发 )`;
          if (seconds === 0) {
            clearInterval(interval);
            this.sending = false;
            this.btnTxt = this.text;
          }
        }, 1000);
        // #endregion
      } catch (err) {
        console.log("TCL: catch -> err", err);
      }
    }
  }
};
</script>

<style scoped lang="less">
.btn {
  align-self: center;
  width: 100%;
  height: 88/32 * 1rem;
  background: #1b8bff;
  color: #fff;
  font-size: 34/32 * 1rem;
  font-family: PingFangSC-Regular;
  line-height: 88/32 * 1rem;
  text-align: center;
  border-radius: 16/32 * 1rem;
}
.disable {
  background: #bfbfbf;
}
</style>
