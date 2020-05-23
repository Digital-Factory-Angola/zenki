<template>
  <!--
  =============================================
    Theme Main Banner
  ==============================================
  -->
  <div id="theme-main-banner" class="banner-one">
    <div data-src="/images/home/slide-1.jpg">
      <div class="camera_caption">
        <div class="container">
          <h1 class="wow fadeInUp animated" data-wow-delay="0.2s" v-html="$t('carousel.first')">
          </h1>
        </div> <!-- /.container -->
      </div> <!-- /.camera_caption -->
    </div>
    <div data-src="/images/home/slide-2.jpg">
      <div class="camera_caption">
        <div class="container">
          <h1 class="wow fadeInUp animated" data-wow-delay="0.2s" v-html="$t('carousel.first')">
          </h1>
        </div> <!-- /.container -->
      </div> <!-- /.camera_caption -->
    </div>
  </div> <!-- /#theme-main-banner -->
</template>

<style lang="scss" scoped>
.camera_caption h1 {
  color: #fff !important;
  text-align: center;
}
</style>
