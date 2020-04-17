<template>
  <div class="swiper-container swiper1">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../assets/ia_100000058.jpg" alt />
        <div class="desc">空调内部清洁杀菌怎么做？</div>
      </div>
      <div class="swiper-slide">
        <img src="../assets/ia_100000059.jpg" alt />
        <div class="desc">空调内部清洁杀菌怎么做？</div>
      </div>
      <div class="swiper-slide">
        <img src="../assets/ia_100000060.jpg" alt />
        <div class="desc">空调内部清洁杀菌怎么做？</div>
      </div>
    </div>
    <!-- Add Pagination -->
    <!-- <div class="swiper-pagination"></div> -->
  </div>
</template>>
<script>
import Swiper from "swiper";
export default {
  name: "swiper1",
  data() {
    return {};
  },
  mounted() {
    var swiper = new Swiper(".swiper-container.swiper1", {
      slidesPerView: 1.33333,
      centeredSlides: true,
      autoplay:true,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>
<style scoped lang="scss">
.swiper-container.swiper1 {
  width: 100%;
  height: 100%;
  padding: 16px 0;
  .swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }
  img {
    width: 100%;
    height: auto;
    display: inline-block;
    border-radius: 10px;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }
  .desc {
    display: block;
    position: absolute;
    bottom: 7px;
    left: 0;
    font-size: 15px;
    color: #fff;
    z-index: 1;
    width: 100%;
    padding: 8px 0;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 0 0 10px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }
}
</style>>