<template>
  <!--
    =====================================================
      Our Team
    =====================================================
    -->
  <div id="our-team" class="our-team section-spacing">
    <div class="container">
      <div class="theme-title-one">
        <h2>Our TEAM</h2>
      </div>
      <!-- /.theme-title-one -->
      <div class="wrapper">
        <div class="row">
          <div v-for="member in team" :key="member.image" class="col-lg-3 col-sm-6 col-12">
            <div class="team-member">
              <div class="image-box">
                <img :class="{'ajust': member.ajustObjectPosition}" :src="`images/team/${member.image}.jpg`" :alt="member.name" />
                <!-- <div class="overlay">
                  <div class="hover-content">
                    <ul>
                      <li>
                        <a href="#"
                          ><i class="fa fa-facebook" aria-hidden="true"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><i class="fa fa-twitter" aria-hidden="true"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><i class="fa fa-pinterest" aria-hidden="true"
                        /></a>
                      </li>
                    </ul>
                    <p>The government they survive as soldiers of fortune.</p>
                  </div>
                </div> -->
                <!-- /.overlay -->
              </div>
              <!-- /.image-box -->
              <div class="text">
                <h6>{{ member.name }}</h6>
                <span>{{ member.ocupation }}</span>
              </div>
              <!-- /.text -->
            </div>
            <!-- /.team-member -->
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.wrapper -->
    </div>
    <!-- /.container -->
  </div>
  <!-- /.our-team -->
</template>

<script>
export default {
  name: 'AppTeam',
  computed: {
    team () {
      return [
        { image: 'DOR_bw', name: 'DIOGO OSÓRIO RODRIGUES', ocupation: 'Partner & Board Member' },
        { image: 'RV_bw', name: 'RUI VARGAS', ocupation: 'Co-founder, Board Member & CFO', ajustObjectPosition: true },
        { image: 'GR_bw', name: 'GONÇALO OSÓRIO RODRIGUES', ocupation: 'Co-founder & CEO' },
        { image: 'PDV_bw', name: 'PEDRO DIOGO VAZ', ocupation: 'Co-founder, Partner & Board Member' }
      ]
    }
  }
}
</script>

<style scoped>
.image-box img {
  height: 300px;
  object-fit: cover;
  object-position: center center;
}

.team-member .text {
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image-box img.ajust {
  object-position: -15px center;
}
</style>
