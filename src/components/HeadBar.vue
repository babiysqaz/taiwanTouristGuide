<template>
  <header>
    <div class="navbar">
      <img src="@/assets/icon/logo.svg" alt="" />
      <span @click="switchMenu()" class="material-symbols-outlined">
        menu
      </span>
    </div>
    <ul v-if="expandMenu">
      <li v-for="item in tags" :key="item">{{ item }}</li>
    </ul>
  </header>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const tags = ["精選活動", "全台景點", "探索美食", "住宿飯店"];
    const expandMenu = ref(false);
    const switchMenu = () => {
      expandMenu.value = !expandMenu.value;
    };
    return {
      tags,
      expandMenu,
      switchMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #00457c;
  .navbar {
    height: 7.5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px 0 21px;
    img {
      height: 100%;
    }
  }
  ul {
    background-color: #00457c;
    li {
      color: rgba(255, 255, 255, 0.55);
      padding: 1vh 0;
      text-align: center;
    }
  }
  .material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
    color: white;
    font-size: 40px;
  }
}
</style>