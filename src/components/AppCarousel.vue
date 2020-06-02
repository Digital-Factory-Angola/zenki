<template>
  <!--
  =============================================
    Theme Main Banner
  ==============================================
  -->
  <div id="theme-main-banner" class="banner-one">
    <div class="position-relative">
      <img src="@/assets/home/slide-1.jpg" class="position-absolute  wow fadeIn animated" width="100%" style="z-index: 0" />
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
  font-size: 18pt;
  line-height: 1.5;
  text-shadow: 0 3px 9px rgba($color: #000000, $alpha: 0.6);
}

.position-relative {
  height: 100%;
}

.position-relative img {
  height: 100%;
  object-fit: cover;
}

@media (min-width: 768px) {
  .position-relative img {
    min-height: 100%;
  }
  .position-relative {
    height: 100%;
  }

  h1 {
    font-size: 52pt;
    line-height: 70px;
  }
}

@media (min-width: 991px) {
  #theme-main-banner {
    height: 600px;
  }
}

.h-full {
  height: 100%;
}

.w-full {
  width: 100%;
}
</style>
