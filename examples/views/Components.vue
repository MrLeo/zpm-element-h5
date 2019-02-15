<template>
  <div class="home">
    <ZpmTest name="全局引用的测试组件"></ZpmTest>
    <Test name="单独引用测试组件"></Test>
  </div>
</template>

<script>
import Test from "../../packages/test/";

export default {
  name: "Components",
  components: { Test }
};
</script>
