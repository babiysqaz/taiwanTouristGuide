<template>
  <div class="banner-container">
    <div class="input-conitainer">
      <img src="@/assets/icon/search.svg" alt="" />
      <input type="text" placeholder="我想去..." />
    </div>
  </div>
  <main>
    <section class="activity-container" style="margin-bottom: 12.5vh">
      <div class="img-title">
        <img src="@/assets/image/lantern.png" alt="" />熱門活動
      </div>
      <CardDetail />
      <div class="arrow-container">
        <span>More</span>
        <img src="@/assets/icon/arrow-right.svg" alt="" />
      </div>
    </section>

    <section class="swiper-container" style="margin-bottom: 10vh">
      <div class="img-title">
        <img src="@/assets/image/tower.svg" alt="" />熱門景點
      </div>
      <CardSwiper />
      <div class="arrow-container">
        <span>More</span>
        <img src="@/assets/icon/arrow-right.svg" alt="" />
      </div>
    </section>

    <section class="swiper-container">
      <div class="img-title">
        <img src="@/assets/image/peral-milk-tea.svg" alt="" />推薦美食
      </div>
      <CardSwiper />
      <div class="arrow-container">
        <span>More</span>
        <img src="@/assets/icon/arrow-right.svg" alt="" />
      </div>
    </section>
  </main>
</template>

<script>
import CardDetail from "@/components/CardDetail.vue";
import CardSwiper from "@/components/CardSwiper.vue";
export default {
  components: {
    CardDetail,
    CardSwiper,
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
  .img-title {
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
  .arrow-container {
    width: 170px;
    height: 4.3vh;
    margin-top: 5.625vh;
    margin-left: auto;
    color: black;
    font-size: 18px;
    font-weight: 700;
    position: relative;
    img {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  .activity-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 38.5px;
  }
  .swiper-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 38.5px;
  }
}
</style>