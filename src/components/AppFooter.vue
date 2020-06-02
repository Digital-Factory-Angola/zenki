<template>
  <!--
    =====================================================
      Footer
    =====================================================
    -->
  <footer class="theme-footer-one">
    <div class="top-footer">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-8 footer-newsletter">
            <iframe :src="showMap === 'pt' ? 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194.60109615521577!2d-9.16223140295139!3d38.703628746439875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19349a2dc9b35d%3A0x1273b4bdbbe3d288!2sZenki%20Group!5e0!3m2!1spt-PT!2sao!4v1591114112658!5m2!1spt-PT!2sao' : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.5297568783094!2d13.234884314605898!3d-8.83016899365894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f3b0b169055d%3A0x68fb2cfe960014a8!2sZENKI%20GROUP%20ANGOLA!5e0!3m2!1spt-PT!2sao!4v1591114332054!5m2!1spt-PT!2sao'" width="90%" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
          <!-- /.footer-list -->
          <div class="col-xl-3 col-lg-2 col-sm-6 footer-newsletter">
            <div v-html="$t('address.pt')" class="white" />
            <a @click="changeMapLocation('pt')" :class="{'active': showMap === 'pt'}"> {{ $t('shared.showMap') }} </a>
          </div>
          <div class="col-xl-3 col-lg-2 col-sm-6 footer-newsletter">
            <div v-html="$t('address.ao')" class="white" />
            <a @click="changeMapLocation('ao')" :class="{'active': showMap === 'ao'}"> {{ $t('shared.showMap') }} </a>
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.top-footer -->
    <div class="bottom-footer">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-12">
            <p>&copy; Copyrights 2020. All Rights Reserved.</p>
          </div>
          <div class="col-md-6 col-12">
            <ul class="navbar-nav d-flex flex-row justify-content-end">
              <li class="nav-item">
                <a class="nav-link" href="#companies">{{
                  $t("menu.companies")
                }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">{{ $t("menu.about") }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#our-team">{{
                  $t("menu.our_team")
                }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">{{ $t("menu.contact") }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- /.bottom-footer -->
  </footer>
  <!-- /.theme-footer -->
</template>
<script>
export default {
  name: 'AppFooter',
  methods: {
    changeMapLocation (location) {
      this.showMap = location
    }
  },
  data () {
    return {
      showMap: 'ao'
    }
  },
  mounted () {
    const locale = navigator.language.split('-')[1].toLowerCase()
    if (!['ao', 'pt'].includes(locale)) {
      this.showMap = 'ao'
      return
    }

    this.showMap = locale
  }
}
</script>
<style>
.white {
  color: #212121;
}

.white h4 {
  color: #212121;
}

.white ul li, .white p {
  font-weight: 100;
}

.footer-newsletter a {
  text-decoration: underline !important;
  color: #001a57 !important;
  cursor: pointer;
}

.footer-newsletter a.active {
  text-decoration: none !important;
  color: #212121 !important;
}

@media (max-width: 900px) {
  .footer-newsletter iframe {
    width: 100% !important;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
