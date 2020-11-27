<template>
  <section :class="[$style.gs_product_details_wrapper, $style.gs_container]">
    <div :class="$style.gs_left_content">
      <img :src="requestedProduct.img" alt="product_image" />
    </div>
    <div :class="$style.gs_right_content">
      <h2>{{ requestedProduct.name }}</h2>
      <div :class="$style.gs_tabs_header">
        <span
          :class="{ [$style.gs_active]: show === 0 }"
          @click.prevent="show = 0"
          >Specifications</span
        >
        <span
          :class="{ [$style.gs_active]: show === 1 }"
          @click.prevent="show = 1"
          >Teams</span
        >
        <span
          :class="{ [$style.gs_active]: show === 2 }"
          @click.prevent="show = 2"
          >Rent terms</span
        >
      </div>
      <div :class="$style.gs_tab_content">
        <transition-group name="fade-up" target="div" appear>
          <div
            v-if="show === 0"
            :key="0"
            :class="[$style.gs_tab_item, $style.gs_tab_item_specifications]"
          >
            <p :class="$style.gs_tab_content_info">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <h4 :class="$style.gs_tab_content_title">Features:</h4>
            <ul :class="$style.gs_feature_block">
              <li><i :class="$style.gs_cup_icon"></i></li>
              <li>
                <h6>A challenge for a true champion</h6>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </li>
            </ul>
            <ul :class="$style.gs_feature_block">
              <li><i :class="$style.gs_pilot_icon"></i></li>
              <li>
                <h6>Pilot's sweaty hands</h6>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </li>
            </ul>
          </div>
          <div
            v-if="show === 1"
            :key="1"
            :class="[$style.gs_tab_item, $style.gs_tab_item_teams]"
          >
            <p :class="$style.gs_tab_content_info">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
            <h4 :class="$style.gs_tab_content_title">Qualified specialists</h4>
            <ul :class="$style.gs_specialists_list">
              <li>
                <div :class="$style.gs_img_wrapper">
                  <img
                    src="https://dummyimage.com/600x400/333/fff&text=User+avatar"
                    alt=""
                  />
                </div>
                <div :class="$style.gs_info_wrapper">
                  <h6>Marvin McKinney</h6>
                  <span>Pilot assistant</span>
                </div>
              </li>
              <li>
                <div :class="$style.gs_img_wrapper">
                  <img
                    src="https://dummyimage.com/600x400/333/fff&text=User+avatar"
                    alt=""
                  />
                </div>
                <div :class="$style.gs_info_wrapper">
                  <h6>Savannah Nguyen</h6>
                  <span>Mechanic</span>
                </div>
              </li>
              <li>
                <div :class="$style.gs_img_wrapper">
                  <img
                    src="https://dummyimage.com/600x400/333/fff&text=User+avatar"
                    alt=""
                  />
                </div>
                <div :class="$style.gs_info_wrapper">
                  <h6>Courtney Henry</h6>
                  <span>Stewardess</span>
                </div>
              </li>
            </ul>
            <p :class="$style.gs_tab_content_info">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div
            v-if="show === 2"
            :key="2"
            :class="[$style.gs_tab_item, $style.gs_tab_item_rent_terms]"
          >
            <p :class="$style.gs_tab_content_info">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
            <p :class="$style.gs_tab_content_info">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <h4 :class="$style.gs_tab_content_title">Additional conditions:</h4>
            <ul :class="$style.gs_conditions_list">
              <li>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </li>
              <li>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </li>
              <li>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </li>
            </ul>
          </div>
        </transition-group>
      </div>
      <div :class="$style.gs_footer_info">
        <p :class="$style.gs_rent_for">
          Rent for <span :class="$style.gs_cost">164 $/h</span>
        </p>
        <button :class="$style.gs_rent_btn">Rent now</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductDetailedPage',
  data() {
    return {
      show: 0,
    }
  },
  computed: {
    requestedProduct() {
      return this.$store.getters.getProductById(this.$route.params.Id)
    },
  },
}
</script>

<style module lang="scss">
section.gs_product_details_wrapper {
  display: flex;
  .gs_left_content {
    height: 700px;
    flex: 1 1 57%;
    border-radius: 24px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @include respond-below(lg) {
      flex: 1 1 50%;
      max-height: 450px;
    }
    @include respond-below(md) {
      height: 332px;
      max-height: 332px;
    }
  }
  .gs_right_content {
    flex: 1 1 43%;
    margin-left: 64px;
    padding-top: 55px;
    h2 {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 32px;
      color: $mainBlack;
      @include respond-below(sm) {
        font-size: 24px;
        margin-bottom: 20px;
      }
    }
    .gs_tabs_header {
      display: flex;
      span {
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        color: $mainGrey;
        margin-right: 32px;
        font-weight: 700;
        cursor: pointer;
        margin-bottom: 30px;
        transition: opacity 0.5s ease;
        &:hover {
          opacity: 0.7;
        }
        &.gs_active {
          opacity: 1 !important;
          color: $mainBlue;
        }
        &:last-of-type {
          margin-right: 0;
        }
        @include respond-below(sm) {
          margin-bottom: 22px;
        }
      }
    }
    .gs_tab_content {
      div.gs_tab_item {
        display: none;
        p.gs_tab_content_info {
          font-size: 14px;
          font-weight: 300;
          line-height: 20.44px;
          color: $mainGrey;
        }
        h4.gs_tab_content_title {
          font-weight: 700;
          font-size: 24px;
          line-height: 21px;
          margin: 30px 0;
          color: $mainBlack;
          @include respond-below(sm) {
            font-size: 20px;
            margin: 20px 0;
          }
        }
        &.gs_tab_item_specifications {
          ul.gs_feature_block {
            display: flex;
            list-style: none;
            padding: 0;
            margin-bottom: 16px;
            &:last-of-type {
              margin-bottom: 0;
            }
            li {
              &:first-of-type {
                flex: 0 0 auto;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: $greyBackgroundColor;
                width: 80px;
                height: 96px;
                border-radius: 16px;
                margin-right: 24px;
                i.gs_cup_icon {
                  display: inline-block;
                  width: 29px;
                  height: 24px;
                  background-image: url(~assets/icons/cup_icon.svg);
                  background-repeat: no-repeat;
                  background-size: contain;
                }
                i.gs_pilot_icon {
                  display: inline-block;
                  width: 21px;
                  height: 26px;
                  background-image: url(~assets/icons/pilot_icon.svg);
                  background-repeat: no-repeat;
                  background-size: contain;
                }
                @include respond-below(sm) {
                  width: 64px;
                  height: 80px;
                  margin-right: 16px;
                }
              }
              &:last-of-type {
                h6 {
                  font-size: 16px;
                  font-weight: 700;
                  line-height: 152%;
                  color: $mainBlack;
                  margin: 12px 0 8px;
                }
                p {
                  font-size: 14px;
                  font-weight: 300;
                  color: $mainGrey;
                  line-height: 146%;
                }
              }
            }
          }
        }
        &.gs_tab_item_teams {
          ul.gs_specialists_list {
            list-style: none;
            padding: 0;
            display: flex;
            margin-bottom: 32px;
            li {
              margin-right: 25px;
              &:last-of-type {
                margin-right: 0;
              }
              .gs_img_wrapper {
                height: 96px;
                border-radius: 16px;
                overflow: hidden;
                margin-bottom: 14px;
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
              .gs_info_wrapper {
                h6 {
                  color: $mainBlack;
                  font-weight: 700;
                  font-size: 16px;
                  line-height: 13.74px;
                  margin-bottom: 8px;
                }
                span {
                  font-weight: 300;
                  font-size: 12px;
                  line-height: 17.76px;
                  color: $mainGrey;
                }
              }
            }
            @include respond-below(sm) {
              flex-direction: column;
              margin-bottom: 20px;
              li {
                display: flex;
                margin-right: 0;
                align-items: center;
                margin-bottom: 12px;
                .gs_img_wrapper {
                  flex: 1 1 auto;
                  max-width: 132px;
                  height: 80px;
                  margin-right: 16px;
                  margin-bottom: 0;
                }
              }
            }
          }
        }
        &.gs_tab_item_rent_terms {
          p.gs_tab_content_info:first-of-type {
            margin-bottom: 16px;
          }
          ul.gs_conditions_list {
            padding-left: 10px;
            list-style: none;
            li {
              font-size: 14px;
              font-weight: 300;
              line-height: 20.44px;
              color: $mainGrey;
              margin-bottom: 16px;
              &::before {
                content: '\2022';
                color: $mainPink;
                font-weight: bold;
                display: inline-block;
                width: 4px;
                height: 4px;
                margin-left: -9px;
              }
            }
          }
        }
        &:first-of-type {
          display: block;
        }
      }
    }
    div.gs_footer_info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: $greyBackgroundColor;
      padding: 16px 32px;
      border-radius: 16px;
      margin-top: 70px;
      p.gs_rent_for {
        font-weight: 700;
        font-size: 20px;
        line-height: 140%;
        span.gs_cost {
          color: $mainPink;
        }
        @include respond-below(sm) {
          font-size: 16px;
        }
      }
      button.gs_rent_btn {
        border-radius: 12px;
        padding: 17px 32px;
        background-color: $mainBlue;
        font-weight: 700;
        outline: none;
        border: none;
        cursor: pointer;
        color: $bodyBackground;
        transition: background-color 0.5s linear;
        &:hover {
          background-color: darken($mainBlue, 10%);
        }
        @include respond-below(sm) {
          padding: 17px 26px;
        }
      }
      @include respond-below(sm) {
        position: fixed;
        bottom: 32px;
        width: calc(100% - 32px);
        z-index: 2;
        padding: 12px 24px;
      }
    }
    @include respond-below(lg) {
      flex: 1 1 50%;
    }
    @include respond-below(md) {
      margin-left: 0;
      padding-top: 22px;
    }
    @include respond-below(sm) {
      position: relative;
      padding-bottom: 100px;
      &::after {
        content: '';
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 150px;
        left: 0;
        right: 0;
        z-index: 1;
        background: -moz-linear-gradient(
          top,
          rgba(255, 255, 255, 0.03) 0%,
          rgba(255, 255, 255, 0.03) 1%,
          rgba(255, 255, 255, 0.09) 7%,
          rgba(255, 255, 255, 0.18) 14%,
          rgba(255, 255, 255, 0.25) 21%,
          rgba(255, 255, 255, 0.45) 35%,
          rgba(252, 252, 252, 1) 100%
        ); /* FF3.6-15 */

        background: -webkit-linear-gradient(
          top,
          rgba(255, 255, 255, 0.03) 0%,
          rgba(255, 255, 255, 0.03) 1%,
          rgba(255, 255, 255, 0.09) 7%,
          rgba(255, 255, 255, 0.18) 14%,
          rgba(255, 255, 255, 0.25) 21%,
          rgba(255, 255, 255, 0.45) 35%,
          rgba(252, 252, 252, 1) 100%
        ); /* Chrome10-25,Safari5.1-6 */

        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.03) 0%,
          rgba(255, 255, 255, 0.03) 1%,
          rgba(255, 255, 255, 0.09) 7%,
          rgba(255, 255, 255, 0.18) 14%,
          rgba(255, 255, 255, 0.25) 21%,
          rgba(255, 255, 255, 0.45) 35%,
          rgba(252, 252, 252, 1) 100%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      }
    }
  }
  @include respond-below(md) {
    flex-direction: column;
  }
}
</style>
