<template>
  <!--
    =====================================================
      Our Team
    =====================================================
    -->
  <div id="our-team" class="our-team section-spacing">
    <div class="container">
      <div class="theme-title-one">
        <h2>{{ $t('menu.our_team') }}</h2>
      </div>
      <!-- /.theme-title-one -->
      <div class="wrapper">
        <div class="row">
          <div v-for="member in team" :key="member.image" class="col-lg-3 col-sm-6 col-12">
            <div class="team-member">
              <div class="image-box">
                <v-lazy-image :class="{'ajust': member.ajustObjectPosition}" :src="`images/team/${member.image}.jpg`" :alt="member.name" />

                <div class="overlay">
                  <div class="hover-content">
                    <ul>
                      <li>
                        <button class="link" data-toggle="modal" @click="expand(member)">
                          <!-- data-target="#person" -->
                          <i class="fa fa-external-link" aria-hidden="true"
                        /></button>
                      </li>
                    </ul>
                  </div>
                </div>
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
        { image: 'DOR_bw', name: 'DIOGO OSÓRIO RODRIGUES', ocupation: 'Partner & Board Member', description: 'team.diogo_rodrigues' },
        { image: 'RV_bw', name: 'RUI VARGAS', ocupation: 'Co-founder, Board Member & CFO', description: 'team.rui_vargas', ajustObjectPosition: true },
        { image: 'GR_bw', name: 'GONÇALO OSÓRIO RODRIGUES', ocupation: 'Co-founder & CEO', description: 'team.goncalo_rodrigues' },
        { image: 'PDV_bw', name: 'PEDRO DIOGO VAZ', ocupation: 'Co-founder, Partner & Board Member', description: 'team.pedro_vaz' }
      ]
    }
  },
  methods: {
    expand (member) {
      this.$emit('expand', member)
      // eslint-disable-next-line
      $('#person').modal('toggle')
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

.link {
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid #fff;
  padding: 5px;
  height: 40px;
  width: 40px;
  color: #fff;
}
</style>
