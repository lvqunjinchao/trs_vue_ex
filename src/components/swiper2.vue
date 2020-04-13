<template>
  <div class="swiper-container swiper2">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../assets/swiper.png" alt />
      </div>
      <div class="swiper-slide">
        <img src="../assets/swiper.png" alt />
      </div>
      <div class="swiper-slide">
        <img src="../assets/swiper.png" alt />
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination2"></div>
  </div>
</template>>
<script>
import Swiper from "swiper";
export default {
  name: "swiper2",
  data() {
    return {};
  },
  mounted() {
    var swiper = new Swiper(".swiper-container.swiper2", {
      loop: true,
      autoplay:true,
      pagination: {
        el: ".swiper-pagination2",
        bulletClass: "my-bullet",
        bulletActiveClass: "my-bullet-active"
      }
    });
  }
};
</script>
<style scoped lang="scss">
.swiper-container.swiper2 {
  width: 100%;
  height: 80px;
  position: relative;

  .my-bullet {
  }
  .my-bullet-active {
  }
  img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
}
</style>>