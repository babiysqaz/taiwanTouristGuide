<template>
  <div class="card-container">
    <img :src="props.data.imgSrc" alt="" />
    <div class="inner-container">
      <h1 style="margin-bottom: 3vh">{{ props.data.title }}</h1>
      <div style="margin-bottom: 2vh">
        <h2>時間</h2>
        <span>{{ props.data.startTime }}-{{ props.data.endTime }}</span>
      </div>
      <div style="margin-bottom: 2.25vh">
        <h2>地點</h2>
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
export default {
  components: {
    ButtonCommon,
  },
  props: {
    data: {
      type: Object,
      default: () => ({
        imgSrc: "@/assets/icon/default-picture.svg",
        title: "",
        startTime: "",
        endTime: "",
        location: "",
        description: "",
      }),
    },
    btnName: {
      type: String,
      default: "活動詳情",
    },
  },
  setup(props) {
    const routeTo = () => {
      console.log("尚未完成");
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
  height: 70.875vh;
  display: flex;
  flex-direction: column;
  background: white;
  position: relative;
  img {
    width: 313px;
    height: 33.125vh;
    object-fit: cover;
  }
  .inner-container {
    padding: 18px 20px;
    h1 {
      font-size: 18px;
      font-weight: 700;
    }
    h2 {
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
      bottom: 2vh;
      right: 21px;
    }
  }
}
</style>