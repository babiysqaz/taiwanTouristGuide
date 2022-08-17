<template>
  <div
    class="card-container"
    :class="[props.hasDescription ? '' : 'has-no-description']"
  >
    <img :src="props.data.imgSrc" alt="" />
    <div class="inner-container">
      <h1 style="margin-bottom: 3vh">{{ props.data.title }}</h1>
      <div style="margin-bottom: 2vh">
        <span class="sub-title">時間</span>
        <span>{{ props.data.startTime }}-{{ props.data.endTime }}</span>
      </div>
      <div style="margin-bottom: 2.25vh">
        <span class="sub-title">地點</span>
        <span>{{ props.data.location }}</span>
      </div>
      <p>
        {{ props.data.description }}
      </p>
      <ButtonCommon
        class="button"
        @btn-click="routeTo()"
        :name="props.btnName"
        :width="'143px'"
      />
    </div>
  </div>
</template>

<script>
import ButtonCommon from "@/components/ButtonCommon.vue";
import defaultPicture from "../assets/icon/default-picture.svg";
export default {
  components: {
    ButtonCommon,
  },
  props: {
    data: {
      type: Object,
      default: () => ({
        imgSrc: defaultPicture,
        title: "查無資料",
        startTime: "查無資料",
        endTime: "查無資料",
        location: "查無資料",
        description: "查無資料",
        route: "",
      }),
    },
    btnName: {
      type: String,
      default: "活動詳情",
    },
    hasDescription: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    console.log(props);
    const routeTo = () => {
      if (props.data.route) {
        window.open(props.data.route);
      } else {
        console.log("沒有更多詳細資訊了");
      }
    };
    return {
      routeTo,
      props,
    };
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  width: 313px;
  height: 70.875vh;
  display: flex;
  flex-direction: column;
  background: white;
  position: relative;
  &.has-no-description {
    height: 54.875vh;
  }
  img {
    height: 33.125vh;
    object-fit: cover;
  }
  .inner-container {
    padding: 18px 20px;
    h1 {
      font-size: 18px;
      font-weight: 700;
    }
    .sub-title {
      font-size: 16px;
      font-weight: 700;
      margin-right: 10px;
    }
    span {
      font-size: 14px;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      line-height: 3vh;
    }
    .button {
      position: absolute;
      bottom: 2.25vh;
      right: 21px;
    }
  }
}
</style>