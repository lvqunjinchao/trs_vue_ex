<template>
  <div class="swiper-container swiper3">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="container-water-fall">
          <div class="vue-waterfall is-transition">
            <div class="vue-waterfall-column">
              <div class="cell-item" v-for="(cell_item,index) in cell_item_list" :key="index">
                <img :src="cell_item.photo" alt />
                <div class="item-body">
                  <div class="item-desc">{{cell_item.item_desc}}</div>
                  <div class="item-footer">
                    <div class="avator">
                      <img :src="cell_item.avator" alt />
                    </div>
                    <div class="name">{{cell_item.name}}</div>
                    <div class="like active">
                      <i class="iconfont"></i>
                      <div class="like-total">{{cell_item.like_total}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="vue-waterfall-column">
              <div class="cell-item" v-for="(cell_item2,index) in cell_item_list2" :key="index">
                <img :src="cell_item2.photo" alt />
                <div class="item-body">
                  <div class="item-desc">{{cell_item2.item_desc}}</div>
                  <div class="item-footer">
                    <div class="avator">
                      <img :src="cell_item2.avator" alt />
                    </div>
                    <div class="name">{{cell_item2.name}}</div>
                    <div class="like active">
                      <i class="iconfont"></i>
                      <div class="like-total">{{cell_item2.like_total}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="datebox g_mark">
          <div class="datetitle js_datetitle">
            <span>04月07日</span>
            <i class="iconfont">&#xe64b;</i>
          </div>
          <div class="date_list">
            <div class="bordertop" v-for="(swiper3_right_item,index) in swiper3_right" :key="index">
              <div class="item" v-if="swiper3_right_item.type =='1'">
                <div class="info fix3">
                  <a href="#">
                    <img :src="swiper3_right_item.avator" alt />
                    <span>{{swiper3_right_item.username}}</span>
                  </a>
                </div>
                <div class="moreimg">
                  <a href="#">
                    <p class="title">{{swiper3_right_item.title}}</p>
                    <p class="content">
                      <img :src="swiper3_right_item.photo1" alt />
                      <img :src="swiper3_right_item.photo2" alt />
                      <img :src="swiper3_right_item.photo3" alt />
                    </p>
                  </a>
                </div>
                <div class="label">
                  <div class="left">
                    <a href="#" class="lb js_index_module">{{swiper3_right_item.label}}</a>
                  </div>
                  <div class="right">
                    <div class="icon">
                      <span>
                        <i class="iconfont">&#xe60f;</i>{{swiper3_right_item.pinglun}}
                      </span>
                      <span>
                        <i class="iconfont">&#xe60c;</i>{{swiper3_right_item.dianzan}}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item" v-if="swiper3_right_item.type =='2'">
                <div class="info fix3">
                  <a href="#">
                    <img :src="swiper3_right_item.avator" alt />
                    <span>{{swiper3_right_item.username}}</span>
                  </a>
                </div>
                <div class="noimg">
                  <a href="#">
                    <p class="title">{{swiper3_right_item.title}}</p>
                    <p class="content">{{swiper3_right_item.content}}</p>
                  </a>
                </div>
                <div class="label">
                  <div class="left">
                    <a href="#" class="lb js_index_module">{{swiper3_right_item.label}}</a>
                  </div>
                  <div class="right">
                    <div class="icon">
                      <span>
                        <i class="iconfont">&#xe60f;</i>{{swiper3_right_item.pinglun}}
                      </span>
                      <span>
                        <i class="iconfont">&#xe60c;</i>{{swiper3_right_item.dianzan}}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item" v-if="swiper3_right_item.type =='3'">
                <div class="info fix3">
                  <a href="#">
                    <img :src="swiper3_right_item.avator" alt />
                    <span>{{swiper3_right_item.username}}</span>
                  </a>
                </div>
                <div class="nmoimg">
                  <a href="#">
                    <div class="content">
                      <div class="con_left">
                        <span>{{swiper3_right_item.title}}</span>
                        <i>{{swiper3_right_item.content}}</i>
                      </div>
                      <img :src="swiper3_right_item.photo1" alt class="con_right" />
                    </div>
                  </a>
                </div>
                <div class="label">
                  <div class="left">
                    <a href="#" class="lb js_index_module">{{swiper3_right_item.label}}</a>
                  </div>
                  <div class="right">
                    <div class="icon">
                      <span>
                        <i class="iconfont">&#xe60f;</i>{{swiper3_right_item.pinglun}}
                      </span>
                      <span>
                        <i class="iconfont">&#xe60c;</i>{{swiper3_right_item.dianzan}}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination2"></div>
  </div>
</template>>
<script>
import Swiper from "swiper";
import axios from "axios";

export default {
  name: "swiper3",
  data() {
    return {
      cell_item_list: [],
      cell_item_list2: [],
      swiper3_right:[]
    };
  },
  mounted() {
    var swiper = new Swiper(".swiper-container.swiper3", {
      pagination: {
        el: ".swiper-pagination3"
      }
    });
  },
  created() {
    this.loadList_left();
    this.loadList_right();
  },
  methods: {
    loadList_left() {
      this.axios.get("/swiper3_left.json", {}).then(res => {
        this.cell_item_list=({...res.data.s3_left_f});
        this.cell_item_list2=({...res.data.s3_left_r})
      });
    },loadList_right() {
      this.axios.get("/swiper3_right.json", {}).then(res => {
        this.swiper3_right=({...res.data.s3_right});
        console.log(res.data);
        console.log(this.swiper3_right);
        console.log(this.swiper3_right[0].type);
      });
    }
  }
};
</script>
<style scoped lang="scss">
.swiper-container.swiper3 {
  width: 100%;
  height: auto;
  position: relative;
  .container-water-fall {
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    .vue-waterfall {
      width: 100%;
      overflow-y: auto;
      position: relative;
      display: flex;
      justify-content: space-between;
      .vue-waterfall-column:nth-child(2) {
        padding-left: 5.5px;
      }
      .vue-waterfall-column:nth-child(1) {
        padding-right: 5.5px;
      }
      .vue-waterfall-column {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 50%;
        .cell-item {
          margin-bottom: 12px;
          position: relative;
          width: 100%;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          & > img {
            width: 100%;
            height: auto;
            display: block;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
          .item-body {
            padding: 12px 11px 12px 12px;
            border: 1px solid #f0f0f0;
            border-top: 0;
            .item-desc {
              font-size: 15px;
              font-weight: 300;
              color: #333;
              line-height: 20px;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              line-clamp: 2;
              -webkit-box-orient: vertical;
              margin-bottom: 8px;
              word-break: break-all;
            }
            .item-footer {
              position: relative;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              .avatar img {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                display: inline-block;
              }

              .name {
                margin-left: 4px;
                font-size: 12px;
                font-weight: 300;
                color: #666;
                line-height: 17px;
                width: 44%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              .like {
                position: absolute;
                right: 0;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                i {
                  width: 16px;
                  height: 16px;
                  display: block;
                  background: url(../assets/dianzan.png) no-repeat;
                  background-size: 100%;
                }
                .like-total {
                  font-size: 12px;
                  font-weight: 400;
                  color: #999;
                  line-height: 17px;
                  margin-left: 4px;
                }
              }
            }
          }
        }
      }
    }
  }
  .datebox {
    padding-bottom: 18px;
    .datetitle {
      padding: 18.5px 0 18px 0;
      border-bottom: 1px solid #eee;
      margin-bottom: 9.5px;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 15px;
        color: #333;
        font-weight: 700;
      }
      i {
        cursor: pointer;
      }
    }
    .date_list {
      .bordertop {
        border-top: 1px solid #eee;
        .item {
          .title {
            font-size: 15px;
            color: #333;
            display: inline-block;
            padding: 15.5px 0 15px 0;
          }
          .nmoimg .content {
            display: flex;
            justify-content: space-between;
            margin-bottom: 24px;
            .con_left {
              width: 60%;
              display: inline-block;
              vertical-align: top;
              word-break: break-all;
              span {
                font-size: 15px;
                color: #333;
                padding-top: 0;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                padding-bottom: 15px;
              }
              i {
                font-size: 12px;
                color: #666;
                height: 33px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
              }
            }
            .con_right {
              width: 40%;
              display: inline-block;
              vertical-align: top;
              word-break: break-all;
            }
          }
          .label {
            margin-bottom: 14.5px;
          }

          .info {
            padding: 11px 0 12px 0;
            img {
              width: 32px;
              height: 32px;
              display: inline-block;
              vertical-align: middle;
              border-radius: 64px;
            }
            span {
              display: inline-block;
              color: #000;
              font-size: 15px;
              vertical-align: middle;
              margin-left: 22px;
            }
          }
          .info.fix3 {
            padding: 11.5px 0 12px 0;
          }

          .noimg .content {
            background: #f5f5f5;
            font-size: 13px;
            color: #333;
            padding: 15px 16px 13.5px 15.5px;
            border-radius: 20px;
            margin-bottom: 21.5px;
            span {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
          }
          .moreimg {
            margin-bottom: 21.5px;
            .title {
              padding: 0 0 15.5px 0;
            }
            .content {
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-pack: justify;
              -ms-flex-pack: justify;
              justify-content: space-between;
              img {
                margin-right: 4px !important;
                border-radius: 10px;
                max-width: 32%;
                display: inline-block;
                margin-left: 0 !important;
              }
            }
          }
          .label {
            margin-bottom: 18px;
            .left {
              width: 50%;
              display: inline-block;
              .lb {
                font-size: 11px;
                text-align: center;
                line-height: 16px;
                padding: 0 5px;
                height: 16px;
                display: inline-block;
                border-radius: 6px;
                margin-right: 12px;
              }
              a {
                border: 1px solid #2283e2;
                color: #2283e2;
              }
            }
            .right {
              width: 50%;
              display: inline-block;
              text-align: right;
              .icon {
                position: relative;
                top: 2px;
                span {
                  display: inline-block;
                  color: #999;
                  font-size: 11px;
                  padding-right: 8.5px;
                }
                i {
                  font-size: 16px;
                  margin-right: 5px;
                  position: relative;
                  top: 2px;
                  color: #999;
                }
              }
            }
          }
        }
      }
      .bordertop:first-child {
        border-top: none;
      }
    }
  }
}
</style>>