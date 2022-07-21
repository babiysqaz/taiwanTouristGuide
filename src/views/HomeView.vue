<template>
  <div class="banner-container">
    <div class="input-conitainer">
      <img src="@/assets/icon/search.svg" alt="" />
      <input type="text" placeholder="我想去..." />
    </div>
  </div>
  <main>
    <section class="activity-container">
      <div class="title">
        <img src="@/assets/image/lantern.png" alt="" />熱門活動
      </div>
      <CardDetail />
    </section>
  </main>
</template>

<script>
import CardDetail from "@/components/CardDetail.vue";
export default {
  components: {
    CardDetail,
  },
};
</script>

<style lang="scss" scoped>
.banner-container {
  height: 28.375vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/image/banner-home.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .input-conitainer {
    position: relative;
    img {
      width: 31px;
      position: absolute;
      top: 12px;
      left: 16px;
    }
    input {
      width: 324px;
      height: 6.875vh;
      padding-left: 53px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 25px;
      font-size: 24px;
      border: none;
    }
  }
}
main {
  padding: 6.125vh 0 7.75vh;
  background-color: #f1edea;
  .activity-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 38.5px;
    .title {
      height: 8.169vh;
      margin-bottom: 3vh;
      color: #333333;
      font-weight: 700;
      font-size: 24px;
      display: flex;
      align-items: center;
      img {
        height: 100%;
        margin-right: 10px;
      }
    }
  }
}
</style>