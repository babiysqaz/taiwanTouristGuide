<template>
  <div class="img-container">
    <img :src="imgSrc" alt="" />
    <span class="title">{{ route.query.title }}</span>
  </div>
  <main style="padding-top: 3.75vh">
    <div class="input-conitainer">
      <img src="@/assets/icon/select.svg" alt="" />
      <select
        style="margin-bottom: 4.625vh"
        v-model="selectedCity"
        @change="refresh(route.query.title, selectedCity)"
      >
        <option disabled value="">請選擇</option>
        <option v-for="city of cityNameArr" :value="city" :key="city">
          {{ city }}
        </option>
      </select>
    </div>
    <CardDetail
      v-for="item in data"
      :key="item"
      :data="item"
      :btnName="'了解更多'"
      style="margin-bottom: 4.625vh"
      :hasDescription="false"
    />
  </main>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { ref } from "vue";
import { useRoute } from "vue-router";
import bannerActivity from "../assets/image/banner-activity.png";
import bannerFood from "../assets/image/banner-food.png";
import bannerHotel from "../assets/image/banner-hotel.png";
import bannerSearch from "../assets/image/banner-search.png";
import {
  getActivityByCity,
  getScenicSpotByCity,
  getRestaurantByCity,
  getHotelByCity,
} from "@/api/index.js";

import CardDetail from "@/components/CardDetail.vue";
import moment from "moment";
export default {
  components: {
    CardDetail,
  },
  setup() {
    let cityNameArr = [
      "臺北市",
      "新北市",
      "桃園市",
      "臺中市",
      "臺南市",
      "高雄市",
      "基隆市",
      "新竹市",
      "嘉義市",
      "宜蘭縣",
      "新竹縣",
      "苗栗縣",
      "彰化縣",
      "南投縣",
      "雲林縣",
      "嘉義縣",
      "屏東縣",
      "花蓮縣",
      "臺東縣",
      "金門縣",
      "澎湖縣",
      "連江縣",
    ];
    const data = ref({});
    const route = useRoute();
    const selectedCity = ref("");
    let imgSrc = computed(() => {
      refresh(route.query.title);
      switch (route.query.title) {
        case "精選活動":
          return bannerActivity;
        case "全台景點":
          return bannerSearch;
        case "探索美食":
          return bannerFood;
        case "住宿飯店":
          return bannerHotel;
      }
    });

    async function refresh(route, selectedCity2) {
      switch (route) {
        case "精選活動":
          data.value = await getActivityByCity(selectedCity2);
          break;
        case "全台景點":
          data.value = await getScenicSpotByCity(selectedCity2);
          break;
        case "探索美食":
          data.value = await getRestaurantByCity(selectedCity2);
          break;
        case "住宿飯店":
          data.value = await getHotelByCity(selectedCity2);
          break;
      }
      // console.log(route, data.value.data);
      data.value = data.value.data
        .map((item) => ({
          imgSrc: item.Picture.PictureUrl1,
          title: item.ActivityName,
          startTime: moment(item.StartTime).format("YYYY/MM/DD"),
          endTime: moment(item.EndTime).format("YYYY/MM/DD"),
          location: item.Address,
          route: item.WebsiteUrl,
        }))
        .slice(0, 4);
    }

    return {
      route,
      imgSrc,
      cityNameArr,
      data,
      selectedCity,
      refresh,
    };
  },
};
</script>

<style lang="scss">
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .title {
    position: absolute;
    font-weight: 700;
    font-size: 34px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1edea;
  .input-conitainer {
    position: relative;
    img {
      width: 31px;
      position: absolute;
      top: 12px;
      left: 16px;
    }
    select {
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
</style>