<template>
  <div :class="$style.gs_product_item_wrapper">
    <div :class="$style.gs_left_side">
      <NuxtLink :to="'/product/' + prodId">
        <img :src="imgSrc" alt="product_item" />
      </NuxtLink>
    </div>
    <div :class="$style.gs_right_side">
      <h4 :class="$style.gs_disable_text_selection">
        <NuxtLink :to="'/product/' + prodId">{{ prodName }}</NuxtLink>
      </h4>
      <p>{{ prodDesc }}</p>
      <span>{{ prodPrice }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    prodId: {
      type: Number,
      default: null,
    },
    imgSrc: {
      type: String,
      default: '',
    },
    prodName: {
      type: String,
      default: 'Missing product name',
    },
    prodDesc: {
      type: String,
      default: 'Missing product desc',
    },
    prodPrice: {
      type: String,
      default: 'Missing product price',
    },
  },
}
</script>

<style module lang="scss">
.gs_product_item_wrapper {
  display: flex;
  flex: 0 0 33.333333%;
  max-width: calc(100% - 66.666667% - 21px);
  justify-content: space-between;
  background-color: $bodyBackground;
  border-radius: 32px;
  padding: 24px 32px;
  margin-right: 32px;
  margin-bottom: 32px;
  &:nth-child(3) {
    margin-right: 0;
  }
  .gs_left_side {
    flex: 0 0 auto;
    width: 88px;
    height: 88px;
    border-radius: 34px;
    overflow: hidden;
    margin-right: 24px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.5s ease;
    }
    &:hover {
      img {
        transform: scale(1.2);
      }
    }
    @include respond-below(lg) {
      width: 50px;
      height: 50px;
      margin-right: 15px;
      border-radius: 15px;
    }
    @include respond-below(md) {
      width: 88px;
      height: 88px;
      margin-right: 32px;
      border-radius: 32px;
    }
  }
  .gs_right_side {
    flex: 1 1 auto;
    h4.gs_disable_text_selection {
      display: inline-block;
      margin: 14px 0 8px;
      &:hover {
        a {
          color: lighten($mainBlack, 40%);
        }
      }
      a {
        line-height: 14px;
        font-weight: 700;
        color: $mainBlack;
        transition: color 0.5s ease;
        text-decoration: none;
      }
    }
    p {
      font-size: 12px;
      line-height: 18px;
      font-weight: 300;
      color: $mainGrey;
      margin-bottom: 13px;
    }
    span {
      font-size: 14px;
      font-weight: 600;
      color: $mainPink;
    }
  }
  @include respond-below(md) {
    max-width: initial;
    margin-right: 0;
  }
}
</style>
