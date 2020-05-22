<template>
  <!--
    =============================================
      Service Style One
    ==============================================
    -->
  <div id="companies" class="service-style-one section-spacing">
    <div class="container">
      <div class="theme-title-one">
        <h2>Empresas integrantes</h2>
        <!-- <p>
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today stillers
        </p> -->
      </div>
      <!-- /.theme-title-one -->
      <div class="wrapper">
        <div class="row">
          <div v-for="item in rows" :key="item.image" class="col-xl-6 col-md-6 col-12">
            <div class="single-service">
              <!-- <div class="img-box">
                <img :src="item.image" alt="" />
              </div> -->
              <div class="text">
                <h5>{{ $t(item.name) }}</h5>
                <br />
                <p>{{ $t(item.description) }}</p>
                <a :href="item.url" class="read-more"
                  >Abrir<i class="fa fa-angle-right" aria-hidden="true"
                /></a>
                <a v-if="item.url2" :href="item.url" class="read-more"
                  >Abrir<i class="fa fa-angle-right" aria-hidden="true"
                /></a>
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
          image: '/images/home/bus.png',
          name: 'BUS',
          description: 'solutions.bus',
          url: 'https://www.busride.agency/'
        },
        {
          image: '/images/home/ZRE-01.png',
          name: 'Zenki Real Estate',
          description: 'solutions.superbrands',
          url: 'https://zenkirealestate.com/'
        },
        {
          image: '/images/home/logopt.png',
          name: 'SUPERBRANDS PT',
          description: 'solutions.real',
          url: 'https://superbrands.sapo.pt/',
          url2: 'https://superbrands.sapo.ao'
        },
        {
          image: '/images/home/logo-ao.png',
          name: 'ZENKI CONSULTING ESTATE',
          description: 'solutions.consulting',
          url: 'https://superbrands.sapo.ao/'
        }
      ]
    }
  }
}
</script>
