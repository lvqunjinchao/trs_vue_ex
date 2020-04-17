<template>
  <div class="zhuye">
    <div class="header">
      <span class="iconfont iconhoutui">&#xe64e;</span>
      <a class>海粉社区</a>
    </div>
    <div>
      <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
        <!--内容...-->
        <div>
          <div class="main">
            <div class="top_box">
              <a class="left">
                <div class="info">
                  <span>问行家</span>
                  <p>家居家电权益</p>
                </div>
                <img src="../assets/111.png" alt />
              </a>
              <div class="right">
                <div class="top">
                  <div class="info">
                    <span>问海粉</span>
                    <p>经验分享互助</p>
                  </div>
                  <img src="../assets/topright.png" alt />
                </div>
                <div class="bottom">
                  <div class="info">
                    <span>有想法</span>
                    <p>迭代需求建议</p>
                  </div>
                  <img src="../assets/22.png" alt />
                </div>
              </div>
            </div>
            <div class="baike_box">
              <div class="title">
                <span>家电百科</span>
                <a href="#">
                  更多
                  <span class="iconfont">&#xe74b;</span>
                </a>
              </div>
              <Swiper1></Swiper1>
            </div>
            <div class="category_box noapp">
              <div class="item">
                <a href="#">
                  <img src="./../assets/ia_100000016.png" alt />
                  <span>会员活动</span>
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="./../assets/ia_100000017.png" alt />
                  <span>海粉测评</span>
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="./../assets/ia_100000018.png" alt />
                  <span>海尔头条</span>
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="./../assets/ia_100000019.png" alt />
                  <span>防疫专区</span>
                </a>
              </div>
            </div>
            <div class="banner_box">
              <Swiper2></Swiper2>
            </div>
            <div class="featured_box">
              <div class="category js_category_tab">
                <span :class="{'on':isIndex0}">精选内容</span>
                <span :class="{'on':!isIndex0}">热议话题</span>
              </div>
              <div class="list_box">
                <!-- <Swiper3></Swiper3> -->
                <div class="swiper-container swiper3">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="container-water-fall">
                        <div class="vue-waterfall is-transition">
                          <div class="vue-waterfall-column">
                            <div
                              class="cell-item"
                              v-for="(cell_item,index) in cell_item_list"
                              :key="index"
                            >
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
                            <div
                              class="cell-item"
                              v-for="(cell_item2,index) in cell_item_list2"
                              :key="index"
                            >
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
                          <div
                            class="bordertop"
                            v-for="(swiper3_right_item,index) in swiper3_right"
                            :key="index"
                          >
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
                                  <a
                                    href="#"
                                    class="lb js_index_module"
                                  >{{swiper3_right_item.label}}</a>
                                </div>
                                <div class="right">
                                  <div class="icon">
                                    <span>
                                      <i class="iconfont">&#xe60f;</i>
                                      {{swiper3_right_item.pinglun}}
                                    </span>
                                    <span>
                                      <i class="iconfont">&#xe60c;</i>
                                      {{swiper3_right_item.dianzan}}
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
                                  <a
                                    href="#"
                                    class="lb js_index_module"
                                  >{{swiper3_right_item.label}}</a>
                                </div>
                                <div class="right">
                                  <div class="icon">
                                    <span>
                                      <i class="iconfont">&#xe60f;</i>
                                      {{swiper3_right_item.pinglun}}
                                    </span>
                                    <span>
                                      <i class="iconfont">&#xe60c;</i>
                                      {{swiper3_right_item.dianzan}}
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
                                  <a
                                    href="#"
                                    class="lb js_index_module"
                                  >{{swiper3_right_item.label}}</a>
                                </div>
                                <div class="right">
                                  <div class="icon">
                                    <span>
                                      <i class="iconfont">&#xe60f;</i>
                                      {{swiper3_right_item.pinglun}}
                                    </span>
                                    <span>
                                      <i class="iconfont">&#xe60c;</i>
                                      {{swiper3_right_item.dianzan}}
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
              </div>
            </div>
          </div>
        </div>
      </mescroll-vue>
    </div>
    <div class="posting js_posting">
      <div class="posting_box js_posting_box open">
        <div class="logo">
          <div class="new_question">
            <a href="#" class="js_new_question">
              <img src="../assets/222.png" alt />
              <span>提问</span>
            </a>
          </div>
          <img src="../assets/333.png" alt class="logo_pic" />
          <div class="new_topic">
            <a href="#" class="js_new_question">
              <img src="../assets/444.png" alt />
              <span>主题</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
import $ from "jquery";

import Swiper from "swiper";
import axios from "axios";
import Swiper1 from "@/components/swiper1.vue";
import Swiper2 from "@/components/swiper2.vue";
// import Swiper3 from "@/components/swiper3.vue";

import MescrollVue from "mescroll.js/mescroll.vue";

export default {
  name: "home",
  components: {
    Swiper1,
    Swiper2,
    // Swiper3
    MescrollVue
  },
  data() {
    return {
      cell_item_list: [],
      cell_item_list2: [],
      swiper3_right: [],
      concat1: [],
      concat2: [],
      concat3: [],
      ajaxsum: 0,
      mescroll: null,
      isIndex0: true,
      mescrollDown: {
        callback: this.downCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        textOutOffset: "松开立即刷新",
        htmlContent:
          '<p class><img src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAkCAYAAADB7MdlAAAA90lEQVRoQ+2ZQQrCMBBFJ1CCN3Dlxlu6cOXCW3bjyhuUIkTUVmjopPmKQuFl2z908uZPmqTBGNUEQrUSoQFLMAGwgCUQEKQ4C1gCAUGKs4AlEBCkOOsTWPvTJVkTzW69G94ed7Nwn7ELY1WxA4c85/fkHxMOcWOp7+an3URrD1sXVjHWzIqwvCI5SY8Jloo05uO+93xNnjG82AksnDWUocZZwAKWvs7irOlSXPwoAQtYv9my4CychbPyXfHfd/+0IW1IG66iDTlIv8rEQTqz61c7+KX7KJ4bP1kVE3CtLNACFrAEAoIUZwFLICBIcRawBAKCFGcJsO6zO5w0GcU2eQAAAABJRU5ErkJggg==" alt class="donwpng isshow" /></p><p class="downwarp-tip"></p>'
      }, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      mescrollUp: {
        // 上拉加载的配置.
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        //以下是一些常用的配置,当然不写也可以的.
        page: {
          num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 3 //每页数据条数,默认10
        },
        offset: 0,
        htmlNodata: '<p class="upwarp-nodata">数据已经全部加载完毕</p>',
        htmlLoading:
          '<p class><img src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAkCAYAAADB7MdlAAAA90lEQVRoQ+2ZQQrCMBBFJ1CCN3Dlxlu6cOXCW3bjyhuUIkTUVmjopPmKQuFl2z908uZPmqTBGNUEQrUSoQFLMAGwgCUQEKQ4C1gCAUGKs4AlEBCkOOsTWPvTJVkTzW69G94ed7Nwn7ELY1WxA4c85/fkHxMOcWOp7+an3URrD1sXVjHWzIqwvCI5SY8Jloo05uO+93xNnjG82AksnDWUocZZwAKWvs7irOlSXPwoAQtYv9my4CychbPyXfHfd/+0IW1IG66iDTlIv8rEQTqz61c7+KX7KJ4bP1kVE3CtLNACFrAEAoIUZwFLICBIcRawBAKCFGcJsO6zO5w0GcU2eQAAAABJRU5ErkJggg==" alt class="donwpng isshow" /></p><p class="downwarp-tip">加载中</p>',
        noMoreSize: 5 //如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
      }
    };
  },
  mounted() {
    let _this = this;
    window.addEventListener("mousewheel", this.handleScroll, false);
    var swiper = new Swiper(".swiper-container.swiper3", {
      pagination: {
        el: ".swiper-pagination3"
      },
      on: {
        slideChangeTransitionEnd: function() {
          _this.isIndex0 = !_this.isIndex0;
        }
      }
    });
  },
  created() {
    this.loadList();
  },
  methods: {
    handleScroll(e) {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    upCallback(page, mescroll) {
      console.log("上拉加载");

      if (this.ajaxsum > 2) {
        this.mescroll.endUpScroll(true);
        // this.mescroll.showNoMore();
      } else {
        this.ajaxsum = this.ajaxsum + 1;
        console.log(this.ajaxsum);
        this.axios.get("/swiper3.json", {}).then(res => {
          this.concat1 = res.data.s3_left_f;
          this.concat2 = res.data.s3_left_r;
          this.concat3 = res.data.s3_right;
          for (let i = 0; i < this.concat1.length; i++) {
            this.cell_item_list.push(this.concat1[i]);
          }
          for (let i = 0; i < this.concat2.length; i++) {
            this.cell_item_list2.push(this.concat2[i]);
          }
          for (let i = 0; i < this.concat3.length; i++) {
            this.swiper3_right.push(this.concat3[i]);
          }
          this.mescroll.endSuccess();
        });
      }

      //这是回调
    },
    downCallback(page, mescroll) {
      console.log("下拉刷新");
      // 次数归零
      this.ajaxsum = 0;
      this.axios.get("/swiper3.json", {}).then(res => {
        this.cell_item_list = res.data.s3_left_f;
        this.cell_item_list2 = res.data.s3_left_r;
        this.swiper3_right = res.data.s3_right;
        this.mescroll.endSuccess();
      });
      //这是回调
    },
    loadList() {
      this.axios.get("/swiper3.json", {}).then(res => {
        this.cell_item_list = res.data.s3_left_f;
        this.cell_item_list2 = res.data.s3_left_r;
        this.swiper3_right = res.data.s3_right;
      });
    }
  }
};
</script>
<style scope lang="scss">
@import "@/assets/haifen.scss";
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
            // padding-right: 1px;
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
</style>