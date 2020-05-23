<template>
  <div class="main-page-wrapper">
    <!-- <!- ===================================================
      Loading Transition
    ====================================================
    <div id="loader-wrapper">
      <div class="lds-dual-ring"></div>
    </div> -->

    <header id="header" class="header-one">
      <AppAddressHeader />
      <AppMenu />
    </header>
    <slot />
    <AppFooter />
    <!-- Scroll Top Button -->
    <button class="scroll-top tran3s">
      <i class="fa fa-angle-up" aria-hidden="true" />
    </button>
  </div>
</template>
<script>
import AppMenu from '@/components/AppMenu'
import AppFooter from '@/components/AppFooter'
import AppAddressHeader from '@/components/AppAddressHeader'
export default {
  name: 'default',
  components: {
    AppAddressHeader,
    AppFooter,
    AppMenu
  }
}
</script>

<style scoped>
.tran3s {
  background-color:#d0d0d0 !important;
  color: #212121;
}
</style>
