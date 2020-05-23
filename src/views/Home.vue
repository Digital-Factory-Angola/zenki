<template>
  <AppDefault>
    <AppCarousel />
    <AppOurServices />
    <AppAbout />

    <AppTeam @expand="setMember" />
    <AppCounter />

    <AppContact />
    <!-- /.partner-section -->

    <!-- Modal -->
    <div class="modal fade" id="person" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg p-6" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-5">
                <v-lazy-image  :class="{'ajust': member.ajustObjectPosition}" :src="`images/team/${member.image}.jpg`" class="team-img" :alt="member.name" />
              </div>
              <div class="col-md-7">
                <h2> {{ member.name }} </h2>
                <span class="sub-title"> {{ member.ocupation}} </span>
                <div class="text" v-html="$t(member.description).trim()"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  },
  data () {
    return {
      member: {
        name: '',
        image: '',
        ocupation: '',
        description: ''
      }
    }
  },
  methods: {
    setMember (member) {
      this.member = member
    }
  }
}
</script>

<style>
.modal {
  text-align: center;
}

@media screen and (min-width: 768px) {
  .modal:before {
    display: inline-block;
    vertical-align: middle;
    content: " ";
    height: 100%;
  }
}

.modal-dialog {
  display: inline-block;
  text-align: left;
  vertical-align: middle;
}

.modal-body {
  padding-bottom: 25px;
}

.p-6 {
  padding: 1.3em;
}

.modal .team-img {
  height: 100%;
  object-position: center;
  object-fit: cover;
}

.team-img.ajust {
  object-position: -40px center;
}

.modal .sub-title {
  font-weight: 100;
}

.modal .text {
  margin-top: 20px;
  font-weight: 200;
  white-space: pre-line;
}
</style>
