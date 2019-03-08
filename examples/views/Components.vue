<template>
  <div class="home">
    <ZpmTest name="全局引用的测试组件"></ZpmTest>
    <hr />
    <Test name="单独引用测试组件"></Test>
    <AuthCode></AuthCode>
  </div>
</template>

<script>
import Test from "../../packages/@zpm/test/";
import {
  default as AuthCode,
  Codes,
  Send,
  TipMobile
} from "../../packages/@zpm/auth-code/";
console.log(
  "TCL: AuthCode, Codes, Send, TipMobile",
  AuthCode,
  Codes,
  Send,
  TipMobile
);

export default {
  name: "Components",
  components: { Test, AuthCode }
};
</script>
