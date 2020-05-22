<template>
  <div class="theme-menu-wrapper">
    <div class="container">
      <div class="bg-wrapper clearfix">
        <!-- ============== Menu Warpper ================ -->
        <div class="menu-wrapper float-left">
          <nav id="mega-menu-holder" class="clearfix">
            <ul class="clearfix navbar-nav flex-row d-flex">
              <li class="nav-item">
                <a class="nav-link" href="#header">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#companies">COMPANIES</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">ABOUT US</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#our-team">OUR TEAM</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">CONTACT</a>
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
                  <a
                    href="#"
                  >EN</a>
                </li>
                <li>
                  <a
                    href="#"
                  >PT</a>
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
</style>
