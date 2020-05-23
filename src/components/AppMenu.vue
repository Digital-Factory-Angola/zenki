<template>
  <div class="theme-menu-wrapper">
    <div class="container">
      <div class="bg-wrapper clearfix">
        <!-- ============== Menu Warpper ================ -->
        <div class="menu-wrapper float-left">
          <nav id="mega-menu-holder" class="clearfix">
            <ul class="clearfix navbar-nav flex-row d-flex">
              <li class="nav-item">
                <a class="nav-link" href="#header">{{ $t('menu.home') }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#companies">{{ $t('menu.companies') }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">{{ $t('menu.about') }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#our-team">{{ $t('menu.our_team') }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">{{ $t('menu.contact') }}</a>
              </li>
            </ul>
          </nav>
          <!-- /#mega-menu-holder -->
        </div>
        <!-- /.menu-wrapper -->

        <div class="right-widget float-right">
          <ul class="d-flex">
            <li class="social-icon">
              <ul class="menu-ul d-flex">
                <li>
                  <a
                    href="#"
                  ><i class="fa fa-facebook" aria-hidden="true" /></a>
                </li>
                <li>
                  <a
                    href="#"
                  ><i class="fa fa-linkedin" aria-hidden="true" /></a>
                </li>
                <li class="ml-4">
                  <button
                    :class="['lang', {'active': $i18n.locale === 'en' }]"
                    @click="changeLocale('en')"
                  >EN</button>
                </li>
                <li>
                  <button
                    :class="['lang', {'active': $i18n.locale === 'pt' }]"
                    @click="changeLocale('pt')"
                  >PT</button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- /.right-widget -->
      </div>
      <!-- /.bg-wrapper -->
    </div>
    <!-- /.container -->
  </div>
  <!-- /.theme-menu-wrapper -->
</template>

<script>
export default {
  name: 'AppMenu',
  methods: {
    changeLocale (lang) {
      sessionStorage.setItem('zenki-lang', lang)
      this.$i18n.locale = lang
    }
  }
}
</script>

<style lang="scss" scoped>
#mega-menu-holder > ul > li > a {
  color: #212121;
}
#mega-menu-holder ul > li.active > a {
  color: #fff;
}

#mega-menu-holder > ul > li > a::before {
  content: unset;
}

.menu-ul > li{
  a{
    color: #212121 !important;
  }

  &last-child {
    a {
      padding-right:25px;
    }
  }
}
.lang {
  background-color: transparent;
}

.lang:nth-child(1) {
  margin-right: 10px;
}
.lang.active {
  font-weight: bolder;
  color: #fff !important;
}
</style>
