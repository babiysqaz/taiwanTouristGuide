<template>
  <div class="card-container">
    <img :src="props.data.imgSrc" alt="" />
    <div class="inner-container">
      <div class="title" style="margin-bottom: 2vh">{{ props.data.title }}</div>
      <a :href="props.data.route">
        <span class="material-symbols-outlined"> location_on </span>
        {{ props.data.location }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({
        imgSrc: "@/assets/icon/default-picture.svg",
        title: "123",
        location: "123",
        route: "",
      }),
    },
  },
  setup(props) {
    return { props };
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  height: 45.25vh;
  display: flex;
  flex-direction: column;
  background: white;
  img {
    width: 279px;
    height: 35vh;
    object-fit: cover;
  }
  .inner-container {
    padding: 1.25vh 10px;
    .title {
      font-weight: 700;
      font-size: 18px;
    }
    a {
      color: #5b9bd5;
      font-weight: 400;
      font-size: 16px;
      text-decoration: none;
    }
    .material-symbols-outlined {
      font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
    }
  }
}
</style>