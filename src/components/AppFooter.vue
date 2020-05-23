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
          <div class="col-xl-6 col-lg-8 footer-newsletter" />
          <!-- /.footer-list -->
          <div class="col-xl-3 col-lg-2 col-sm-6 footer-newsletter">
            <div v-html="$t('address.pt')" class="white" />
          </div>
          <div class="col-xl-3 col-lg-2 col-sm-6 footer-newsletter">
            <div v-html="$t('address.ao')" class="white" />
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
</style>
