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
      <div class="card-detail-container">
        <CardDetail
          v-for="item in activity"
          :key="item"
          :data="item"
          :btnName="'了解更多'"
        />
      </div>
      <div class="arrow-container">
        <span>More</span>
        <img src="@/assets/icon/arrow-right.svg" alt="" />
      </div>
    </section>

    <section class="swiper-container" style="margin-bottom: 10vh">
      <div class="img-title">
        <img src="@/assets/image/tower.svg" alt="" />熱門景點
      </div>
      <CardSwiper v-for="item in scenicSpot" :key="item" :data="item" />
      <div class="arrow-container">
        <span>More</span>
        <img src="@/assets/icon/arrow-right.svg" alt="" />
      </div>
    </section>

    <section class="swiper-container">
      <div class="img-title">
        <img src="@/assets/image/peral-milk-tea.svg" alt="" />推薦美食
      </div>
      <CardSwiper v-for="item in restaurant" :key="item" :data="item" />
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
import moment from "moment";

import {
  getActivityByCity,
  getScenicSpotByCity,
  getRestaurantByCity,
} from "@/api/index.js";
import { onMounted, ref } from "vue";
export default {
  components: {
    CardDetail,
    CardSwiper,
  },
  setup() {
    const activity = ref({});
    const scenicSpot = ref({});
    const restaurant = ref({});

    async function init() {
      activity.value = await getActivityByCity();
      // console.log("activity", activity.value.data);
      activity.value = activity.value.data
        .map((item) => ({
          imgSrc: item.Picture.PictureUrl1,
          title: item.ActivityName,
          startTime: moment(item.StartTime).format("YYYY/MM/DD"),
          endTime: moment(item.EndTime).format("YYYY/MM/DD"),
          location: item.Address,
          description: item.Description,
          route: item.WebsiteUrl,
        }))
        .slice(0, 4);

      scenicSpot.value = await getScenicSpotByCity();
      // console.log("scenicSpot", scenicSpot.value.data);
      scenicSpot.value = scenicSpot.value.data
        .map((item) => ({
          imgSrc: item.Picture.PictureUrl1,
          title: item.ScenicSpotName,
          location: item.city,
          route: item.WebsiteUrl,
        }))
        .slice(0, 1);

      restaurant.value = await getRestaurantByCity();
      // console.log("restaurant", restaurant.value.data);
      restaurant.value = restaurant.value.data
        .map((item) => ({
          imgSrc: item.Picture.PictureUrl1,
          title: item.RestaurantName,
          location: item.Address,
          route: item.WebsiteUrl,
        }))
        .slice(0, 1);
    }

    onMounted(() => {
      init();
    });

    return {
      activity,
      scenicSpot,
      restaurant,
    };
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
    .card-detail-container {
      display: flex;
      flex-direction: column;
      gap: 4.625vh;
    }
  }
  .swiper-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 38.5px;
  }
}
</style>