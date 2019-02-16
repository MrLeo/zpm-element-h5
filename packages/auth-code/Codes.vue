<template>
  <div class="wrapper" :style="{ justifyContent: align }">
    <input
      type="number"
      class="box"
      :style="{ marginLeft: index > 0 ? `${margin / 100}rem` : '' }"
      v-for="(box, index) in boxLength"
      :key="index"
      @focus="focusHandler(index)"
      @input="inputHandler(index)"
      @keyup.delete="deleteHandler(index)"
      v-model="boxes[index]"
      ref="box"
    />
  </div>
</template>

<script>
export default {
  props: {
    // 验证码长度
    boxLength: {
      type: Number,
      default: 6
    },
    // 输入框间距（按照750尺寸输入px数值自动转为rem单位）
    margin: {
      type: Number,
      // 默认值：`23`/100rem
      default: 23
    },
    // flex对齐方式，默认center
    align: {
      // `'center'/'flex-start'/'flex-end'`
      type: String,
      default: "center"
    }
  },
  data() {
    return {
      boxes: [],
      focusIndex: 0
    };
  },
  computed: {},
  watch: {
    boxes(newValue) {
      let code = newValue.join("");
      if (code.length >= this.boxLength) {
        // 完成验证码输入
        // @arg {code:123456}
        this.$emit("onCheck", { code });
      }
    }
  },
  created() {
    this.$nextTick(() => {
      this.$refs["box"][0].focus();
    });
  },
  methods: {
    focusHandler(index) {
      this.boxes.splice(index, 1, "");
    },
    inputHandler(index) {
      let inputString = this.boxes[index];
      if (inputString.length > 1)
        this.boxes.splice(index, 1, inputString.substr(0, 1));
      index < this.boxLength - 1 && this.$refs["box"][index + 1].focus();
    },
    deleteHandler(index) {
      index > 0 && this.$refs["box"][index - 1].focus();
    }
  }
};
</script>

<style scoped lang="less">
.wrapper {
  display: flex;
  justify-content: center;
  margin-top: 24/32 * 1rem;
  margin-bottom: 24/32 * 1rem;
}
.box {
  display: block;
  width: 82/32 * 1rem;
  height: 82/32 * 1rem;

  background-color: rgba(255, 255, 255, 1);
  border-radius: 9/32 * 1rem;
  border: 2px solid rgba(201, 203, 214, 1);
  text-align: center;

  font-size: 40/32 * 1rem;
  color: #1b8bff;
  caret-color: #1b8bff;
}
.box:not(:first-child) {
  margin-left: 23/32 * 1rem;
}
.box:focus {
  border-color: #1b8bff;
}
</style>
