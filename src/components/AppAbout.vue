<template>
  <div>
    <!--
    =============================================
      About Company
    ==============================================
    -->
    <!--
    =============================================
      Theme Inner Banner
    ==============================================
    -->
    <div id="about" class="theme-inner-banner section-spacing">
      <div class="overlay">
        <div class="container">
          <h2 class="font-height">{{ $t('menu.about') }}</h2>
        </div>
        <!-- /.container -->
      </div>
      <!-- /.overlay -->
    </div>
    <!-- /.theme-inner-banner -->

    <!--
      =============================================
        CallOut Banner
      ==============================================
      -->
    <div class="callout-banner no-bg">
      <div class="container clearfix">
        <h3 class="title" v-html="$t('about.focus_title')">
        </h3>
        <p>
          {{ $t('about.focus_market') }}
        </p>
        <a href="#contact" class="theme-button-one">{{ $t('menu.contact') }}</a>
      </div>
    </div>
    <!-- /.callout-banner -->

    <!--
      =============================================
        About Company Stye Two
      ==============================================
      -->
    <div class="about-compnay-two no-bg section-spacing">
      <div class="overlay">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-12 text order-lg-last">
              <div class="theme-title-one">
                <h2>{{ $t('about.short_history') }}</h2>
              </div>
              <!-- /.theme-title-one -->
              <div v-html="$t('about.description')"></div>
            </div>
            <!-- /.col- -->
            <div class="col-lg-6 col-12 order-lg-first">
              <v-lazy-image :src="require('@/assets/home/about.jpg')" alt="" style="height: 100%; object-fit: cover" class="left-img"/>
            </div>
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.overlay -->
    </div>
    <!-- /.about-compnay-two -->

  </div>
</template>

<style lang="scss" scoped>
.theme-button-one {
  background-color: #d8d8d8 !important;
  color: #000 !important;
}

.section-spacing {margin: 120px 0; padding: 0; }

.font-height {
  font-size: 24pt !important;
}
</style>
