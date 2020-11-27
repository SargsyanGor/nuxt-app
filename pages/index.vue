<template>
  <section :class="[$style.gs_main_products_wrapper, $style.gs_container]">
    <header :class="$style.gs_products_header">
      <div
        :class="[
          $style.gs_select_rent_prod_type,
          $style.gs_disable_text_selection,
        ]"
      >
        Rent <span>whatever <i></i></span>
      </div>
      <div :class="$style.gs_add_new_product">
        <span :class="[$style.gs_add_text, $style.gs_disable_text_selection]"
          >Add new</span
        >
        <button :class="$style.gs_add_prod_btn"></button>
      </div>
    </header>
    <main :class="$style.gs_products_main_scope">
      <div
        v-for="i in Math.ceil(productItemsList.length / 3)"
        :key="i"
        :class="$style.gs_row"
      >
        <ProductItem
          v-for="item in productItemsList.slice((i - 1) * 3, i * 3)"
          :key="item.id"
          :prod-id="productItemsList[item.id].id"
          :img-src="productItemsList[item.id].img"
          :prod-name="productItemsList[item.id].name"
          :prod-desc="productItemsList[item.id].desc"
          :prod-price="productItemsList[item.id].price"
        />
      </div>
    </main>
  </section>
</template>

<script>
import ProductItem from '../components/ProductItem'
export default {
  components: { ProductItem },
  data() {
    return {}
  },
  computed: {
    productItemsList() {
      return this.$store.state.productItemsList
    },
  },
}
</script>

<style module lang="scss">
section.gs_main_products_wrapper {
  background: $greyBackgroundColor;
  border-radius: 48px;
  padding: 56px 64px;
  header.gs_products_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    .gs_select_rent_prod_type {
      font-size: 40px;
      font-weight: 700;
      color: $mainBlack;
      span {
        cursor: pointer;
        color: $mainBlue;
        transition: color 0.5s ease;
        &:hover {
          color: darken($mainBlue, 10%);
        }
        i {
          display: inline-block;
          width: 12px;
          height: 8px;
          background-image: url(~assets/icons/arrow_down_icon.svg);
          background-size: contain;
          background-repeat: no-repeat;
          cursor: pointer;
          vertical-align: middle;
          margin-left: 6px;
        }
      }
      @include respond-below(md) {
        font-size: 24px;
      }
      @include respond-below(xs2) {
        font-size: 18px;
      }
    }
    .gs_add_new_product {
      display: flex;
      align-items: center;
      span.gs_add_text {
        color: $mainBlue;
        font-size: 20px;
        font-weight: 700;
      }
      button.gs_add_prod_btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        background-color: $mainBlue;
        border-radius: 16px;
        margin-left: 20px;
        cursor: pointer;
        transition: background-color 0.5s ease-in-out;
        border: none !important;
        outline: none !important;
        &::before {
          content: '';
          display: inline-block;
          width: 17px;
          height: 17px;
          background-image: url(~assets/icons/plus_icon.svg);
          background-repeat: no-repeat;
          background-size: contain;
        }
        &:hover {
          background-color: darken($mainBlue, 10%);
        }
      }
      @include respond-below(md) {
        span.gs_add_text {
          font-size: 16px;
        }
        button.gs_add_prod_btn {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          margin-left: 12px;
          &::before {
            width: 11px;
            height: 11px;
          }
        }
      }
      @include respond-below(xs2) {
        span.gs_add_text {
          font-size: 12px;
        }
      }
    }
    @include respond-below(sm) {
      margin-bottom: 25px;
    }
  }
  main.gs_products_main_scope {
    height: auto;
    @include respond-below(md) {
      .gs_row {
        flex-direction: column;
      }
    }
  }
  @include respond-below(lg) {
    padding: 40px 25px;
    border-radius: 38px;
  }
  @include respond-below(sm) {
    padding: 26px 16px;
    border-radius: 24px;
  }
}
</style>
