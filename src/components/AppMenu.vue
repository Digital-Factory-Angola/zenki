<template>
  <div class="theme-menu-wrapper">
    <div class="container">
      <div class="bg-wrapper clearfix">
        <!-- ============== Menu Warpper ================ -->
        <div class="menu-wrapper float-left">
          <nav id="mega-menu-holder" ref="megaMenuHolder" class="clearfix">
            <ul class="clearfix navbar-nav flex-row d-flex">
              <li class="nav-item web">
                <a class="nav-link" href="#header">
                  <span class="fa-2x icon-home" />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="hideMenuOnMobile" href="#companies">{{ $t('menu.companies') }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="hideMenuOnMobile" href="#about">{{ $t('menu.about') }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="hideMenuOnMobile" href="#our-team">{{ $t('menu.our_team') }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="hideMenuOnMobile" href="#contact">{{ $t('menu.contact') }}</a>
              </li>
            </ul>
          </nav>
          <!-- /#mega-menu-holder -->
        </div>
        <!-- /.menu-wrapper -->

        <div class="right-widget float-right">
          <ul class="menu-ul d-flex">
            <li>
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
    },
    hideMenuOnMobile () {
      if (window.screen.availWidth < 768) {
        if (this.$refs.megaMenuHolder.style.display !== 'none') {
          this.$refs.megaMenuHolder.style.display = 'none'
        }
      }
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

.right-widget {
  height: 100%;
}
.menu-ul {
  height: 100%;
}
.fa-2x {
  font-size: 2em;
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

@media (min-width: 768px) {
  #mega-menu-holder li, .theme-menu-wrapper .right-widget ul li {
    display: flex;
    align-items: center;
  }

  .bg-wrapper  {
    height: 82px;
    overflow: hidden;
  }
}

.lang:nth-child(1) {
  margin-right: 10px;
}
.lang.active {
  font-weight: bolder;
  color: #fff !important;
}
</style>

<style>

.web {
  display: none !important;
}

@media (min-width: 768px) {
  .web {
    display: block !important;
  }
}

@media (max-width: 768px) {
  .navbar-nav {
    display: block !important;
    background-color: #d8d8d8;
  }
  #mega-menu-holder {
    border: 0;
    width: 100vw;
    left: -4.5%;
    position: relative;
    border-top: 1px solid #fff;
  }

  .menu-collapser {
    margin-bottom: 14px;
  }
}
</style>
