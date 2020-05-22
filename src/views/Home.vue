<template>
  <AppDefault>
    <AppCarousel />
    <AppOurServices />
    <AppAbout />

    <AppTeam />
    <AppCounter />

    <AppContact />
    <!-- /.partner-section -->
  </AppDefault>
</template>
<script>
import AppTeam from '@/components/AppTeam'
import AppDefault from '@/layouts/default'
import AppAbout from '@/components/AppAbout'
import AppContact from '@/components/AppContact'
import AppCounter from '@/components/AppCounter'
import AppCarousel from '@/components/AppCarousel'
import AppOurServices from '@/components/AppOurServices'

export default {
  name: 'Home',
  components: {
    AppTeam,
    AppAbout,
    AppCounter,
    AppDefault,
    AppContact,
    AppCarousel,
    AppOurServices
  }
}
</script>
