<template>
    <!--
    =====================================================
      Free Consultation
    =====================================================
    -->
    <div id="contact" class="consultation-form section-spacing">
      <div class="container">
        <div class="theme-title-one">
          <h2>{{ $t('menu.contact') }}</h2>
          <!-- <p>
            A tale of a fateful trip that started from this tropic port aboard
            this tiny ship today stillers
          </p> -->
        </div>
        <!-- /.theme-title-one -->
        <div class="clearfix wow fadeIn animated main-content no-gutters row">
          <div class="col-xl-6 col-lg-5 col-12">
            <div class="img-box">
              <v-lazy-image :src="require('@/assets/home/contact.jpg')" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-7 col-12">
            <div class="form-wrapper">
              <form action="#" class="theme-form-one">
                <div class="row">
                  <div class="col-md-6">
                    <input type="text" :placeholder="$t('contact.name')">
                  </div>
                  <div class="col-md-6">
                    <input type="text" :placeholder="$t('contact.phone')">
                  </div>
                  <div class="col-12">
                    <input type="email" :placeholder="$t('contact.email')">
                  </div>
                  <div class="col-12">
                    <textarea :placeholder="$t('contact.email')" />
                  </div>
                </div>
                <!-- /.row -->
                <button class="float-right theme-button-one">
                  {{ $t('contact.submit') }}
                </button>
              </form>
            </div>
            <!-- /.form-wrapper -->
          </div>
          <!-- /.col- -->
        </div>
        <!-- /.main-content -->
      </div>
      <!-- /.container -->
    </div>
</template>
<style scoped>
.theme-button-one {
  background-color:#d8d8d8;
  color: #212121;
}

.theme-button-one:hover {
  color: #fff;
  background-color: #8d8d8d;
}
</style>
