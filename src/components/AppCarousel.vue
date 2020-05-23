<template>
  <!--
  =============================================
    Theme Main Banner
  ==============================================
  -->
  <div id="theme-main-banner" class="banner-one">
    <div class="position-relative">
      <img src="@/assets/home/slide-1.jpg" class="position-absolute  wow fadeIn animated" height="800" width="100%" style="z-index: 0" />
      <div class="d-flex position-absolute align-items-center h-full w-full justify-content-center ">
        <div>
          <h1 class="wow fadeInUp animated" v-html="$t('carousel.first')">
          </h1>
        </div> <!-- /.container -->
      </div> <!-- /.camera_caption -->
    </div>
  </div> <!-- /#theme-main-banner -->
</template>

<style lang="scss" scoped>
h1 {
  color: #fff !important;
  text-align: center;
  font-size: 52pt !important;
}

.position-relative {
  height: 800px;
}

.h-full {
  height: 100%;
}

.w-full {
  width: 100%;
}
</style>
