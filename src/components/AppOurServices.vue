<template>
  <!--
    =============================================
      Service Style One
    ==============================================
    -->
  <div id="companies" class="service-style-one section-spacing">
    <div class="container">
      <div class="theme-title-one">
        <h2>{{ $t('solutions.ourcompanies') }}</h2>
        <!-- <p>
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today stillers
        </p> -->
      </div>
      <!-- /.theme-title-one -->
      <div class="wrapper">
        <div class="row">
          <div v-for="item in rows" :key="item.image" class="col-xl-6 col-md-6 col-12">
            <div class=" wow fadeInUp animated single-service">
              <div :class="{'ajust': item.ajust}" class="image d-block center-block bg-transparent">
                <v-lazy-image :src="require(`@/assets/companies/${item.image}`)" alt="" />
              </div>
              <div class="text">
                <br />
                <p>{{ $t(item.description) }}</p>
                <a v-if="item.url" target="__blank" :href="item.url" class="read-more d-flex">
                  {{ $t('shared.open') }}
                  <img v-if="item.url2" src="images/flag-portugal.png" style="margin-left: 5px" height="20" alt="flag-portugal" />
                </a>
                <a v-if="item.url2" target="__blank" :href="item.url2" class="read-more d-flex">
                  {{ $t('shared.open') }}
                  <img src="images/flag-angola.png" alt="flag-angola"  style="margin-left: 5px" height="20" />
                </a>
              </div>
              <!-- /.text -->
            </div>
            <!-- /.single-service -->
          </div>
        </div>
        <!-- /.row -->
      </div>
    </div>
    <!-- /.container -->
  </div>
  <!-- /.service-style-one -->
</template>
<script>
export default {
  name: 'AppOurServices',
  computed: {
    rows () {
      return [
        {
          image: 'bus.png',
          name: 'BUS',
          description: 'solutions.bus',
          url: 'https://www.busride.agency/',
          ajust: true
        },
        {
          image: 'zre.png',
          name: 'Zenki Real Estate',
          description: 'solutions.real',
          url: 'https://zenkirealestate.com/',
          ajust: true
        },
        {
          image: 'superbrand.png',
          name: 'SUPERBRANDS',
          description: 'solutions.superbrands',
          url: 'https://superbrands.sapo.pt/',
          url2: 'https://superbrands.sapo.ao'
        },
        {
          image: 'consulting.png',
          name: 'ZENKI CONSULTING ESTATE',
          description: 'solutions.consulting'
          // url: 'https://superbrands.sapo.ao/'
        }
      ]
    }
  }
}
</script>
<style scoped>
.image {
  width: 100%;
  max-height: 100px;
}

@media (max-width: 768px) {
  .image {
    padding-left: 5px;
  }

  .image.ajust {
    padding-left: 10px !important;
  }
}

.image img {
  width: 100px;
}
</style>
