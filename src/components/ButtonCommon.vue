<template>
  <button @click="$emit('btnClick')" :style="getWidth()">
    {{ props.name }}
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "按鈕",
    },
    width: {
      type: String,
      default: "124px",
    },
  },
  setup(props) {
    const getWidth = () => ({ width: props.width });
    return {
      props,
      getWidth,
    };
  },
};
</script>

<style scoped>
button {
  width: v-bind(buttonWidth);
  height: 3.75vh;
  background: #5b9bd5;
  border-radius: 15px;
  font-weight: 700;
  font-size: 14px;
  border: none;
  color: white;
}
</style>