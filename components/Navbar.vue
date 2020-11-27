<template>
  <nav :class="[$style.gs_navbar, $style.gs_container]">
    <section :class="$style.gs_left_section">
      <a :class="$style.gs_brand" href="/">
        <i></i>
        Pepelane
      </a>
      <p>World's first affordable airsharing</p>
    </section>
    <section :class="$style.gs_right_section">
      <div :class="$style.gs_shift_mode">
        <i :class="$style.gs_moon_icon"></i>
        <span :class="$style.gs_disable_text_selection">Night mode</span>
      </div>
      <i :class="$style.gs_convers_icon"></i>
      <i :class="$style.gs_notify_icon"></i>
      <div :class="$style.gs_user_info_action_box">
        <div id="gs_user_dropdown" :class="$style.gs_main_info">
          <span :class="$style.gs_disable_text_selection" @click="dropIt"
            >Bessie Cooper</span
          >
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            @click="dropIt"
          >
            <img src="~assets/imgs/user.jpg" alt="user_image" />
          </button>
        </div>
        <transition name="bounce">
          <div
            v-if="isDropped"
            :class="$style.gs_main_info_dropdown_content"
            @click.stop
          >
            <ul>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Language</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Settings & privacy</a></li>
            </ul>
          </div>
        </transition>
      </div>
    </section>
  </nav>
</template>

<script>
export default {
  data: () => ({
    isDropped: false,
  }),
  watch: {
    isDropped(dropOpen) {
      if (dropOpen) {
        document.addEventListener('click', this.closeIfClickedOutside)
      }
    },
  },
  methods: {
    dropIt() {
      this.isDropped = !this.isDropped
    },
    closeIfClickedOutside(event) {
      if (!document.getElementById('gs_user_dropdown').contains(event.target)) {
        this.isDropped = false
        document.removeEventListener('click', this.closeIfClickedOutside)
      }
    },
  },
}
</script>

<style module lang="scss">
.gs_navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px 0 40px;
  section {
    &.gs_left_section {
      display: flex;
      align-items: center;
      a.gs_brand {
        display: flex;
        align-items: center;
        color: $mainBlack;
        text-decoration: none;
        font-size: 20px;
        font-weight: 600;
        margin-right: 65px;
        @include respond-below(lg) {
          margin-right: 0;
          margin-bottom: 10px;
        }
        @include respond-below(sm) {
          margin-bottom: 0;
          font-size: 14px;
        }
        i {
          display: inline-block;
          width: 48px;
          height: 48px;
          margin-right: 10px;
          background-image: url(~assets/icons/logo_icon.svg);
          background-size: contain;
          background-repeat: no-repeat;
          transition: transform 0.5s ease-in-out;
          @include respond-below(sm) {
            width: 32px;
            height: 32px;
          }
        }
        &:hover {
          i {
            transform: rotate(360deg);
          }
        }
      }
      p {
        color: $mainGrey;
        @include respond-below(lg) {
          font-size: 12px;
        }
        @include respond-below(sm) {
          display: none;
        }
      }
      @include respond-below(lg) {
        flex-direction: column;
        align-items: flex-start;
      }
    }
    &.gs_right_section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div.gs_shift_mode {
        cursor: pointer;
        display: flex;
        align-items: center;
        margin-right: 107px;
        span {
          color: $mainGrey;
          transition: color 0.5s linear;
          @include respond-below(md) {
            display: none;
          }
        }
        &:hover {
          span {
            color: darken($mainGrey, 70%);
          }
        }
        i.gs_moon_icon {
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-right: 18px;
          background-image: url(~assets/icons/moon_icon.svg);
          background-size: contain;
          background-repeat: no-repeat;
          @include respond-below(md) {
            margin-right: 0;
          }
        }
        @include respond-below(md) {
          margin-right: 20px;
        }
      }
      i.gs_convers_icon {
        display: inline-block;
        width: 20px;
        height: 18px;
        background-image: url(~assets/icons/conversation_icon.svg);
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 29px;
        cursor: pointer;
        transition: transform 0.5s;
        &:hover {
          transform: scale(1.5);
        }
        @include respond-below(md) {
          margin-right: 20px;
        }
      }
      i.gs_notify_icon {
        display: inline-block;
        width: 18px;
        height: 21px;
        background-image: url(~assets/icons/notify_icon.svg);
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
        transition: transform 0.5s;
        &:hover {
          transform: scale(1.5);
        }
      }
      div.gs_user_info_action_box {
        position: relative;
        margin-left: 59px;
        .gs_main_info {
          display: flex;
          align-items: center;
          span {
            margin-right: 16px;
            font-weight: 700;
            color: $mainBlack;
            cursor: pointer;
            transition: color 0.5s linear;
            &:hover {
              color: lighten($mainBlack, 40%);
            }
            @include respond-below(md) {
              display: none;
            }
          }
          button {
            background: transparent;
            cursor: pointer;
            border: none !important;
            outline: none !important;
            img {
              width: 56px;
              height: 56px;
              object-fit: cover;
              border-radius: 50%;
              @include respond-below(sm) {
                width: 32px;
                height: 32px;
              }
            }
          }
        }
        .gs_main_info_dropdown_content {
          position: absolute;
          left: 0;
          top: 68px;
          border-radius: 10px;
          padding: 25px 18px;
          background: $mainBlue;
          transform-origin: top;
          transition: transform 0.3s ease-in-out;
          overflow: hidden;
          box-shadow: -1px 1px 9px 2px rgba(73, 89, 255, 0.75);
          -webkit-box-shadow: -1px 1px 9px 2px rgba(73, 89, 255, 0.75);
          -moz-box-shadow: -1px 1px 9px 2px rgba(73, 89, 255, 0.75);
          ul {
            list-style: none;
            padding: 0;
            li {
              margin-bottom: 10px;
              &:last-of-type {
                margin-bottom: 0;
              }
              a {
                text-decoration: none;
                color: $bodyBackground;
                font-size: 13px;
                font-weight: 600;
                transition: color 0.5s ease-in-out;
                &:hover {
                  color: darken($bodyBackground, 20%);
                }
              }
            }
          }
          @include respond-below(md) {
            left: initial;
            right: 15px;
            min-width: 170px;
            top: 50px;
          }
        }
        @include respond-below(md) {
          margin-left: 24px;
        }
      }
    }
  }
  @include respond-below(sm) {
    padding: 40px 0 20px;
  }
}
</style>
