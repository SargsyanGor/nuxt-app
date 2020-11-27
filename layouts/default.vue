<template>
  <div class="gs_app_wrapper">
    <Navbar />
    <Nuxt />
  </div>
</template>

<style lang="scss">
// Static part of app
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: 'CodecPro', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  body {
    background: #fcfcfc;
  }
}
.gs_app_wrapper {
  padding: 0 64px;
  margin-bottom: 50px;
  @include respond-below(sm) {
    padding: 0 16px;
  }
}
</style>
