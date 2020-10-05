<template>
    <!--
    =====================================================
      Free Consultation
    =====================================================
    -->
    <div id="contact" class="consultation-form section-spacing">
      <div class="container">
        <div class="theme-title-one">
          <h2>{{ $t('menu.contact') }}</h2>
          <!-- <p>
            A tale of a fateful trip that started from this tropic port aboard
            this tiny ship today stillers
          </p> -->
        </div>
        <!-- /.theme-title-one -->
        <div class="clearfix wow fadeIn animated main-content no-gutters row">
          <div class="col-xl-6 col-lg-5 col-12">
            <div class="img-box">
              <v-lazy-image :src="require('@/assets/home/contact.jpg')" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-7 col-12">
            <div class="form-wrapper">
              <form action="#" class="theme-form-one" v-on:submit.prevent="sendemail">
                <div class="row">
                  <div class="col-md-6">
                    <input type="text" required :placeholder="$t('contact.name')" v-model="user.nome">
                  </div>
                  <div class="col-md-6">
                    <input type="tel" minlength="8" maxlength="15" :placeholder="$t('contact.phone')" v-model="user.telefone">
                  </div>
                  <div class="col-12">
                    <input type="email" required :placeholder="$t('contact.email')" v-model="user.email">
                  </div>
                  <div class="col-12">
                    <textarea required :placeholder="$t('contact.message')" v-model="user.mensagem" />
                  </div>
                </div>
                <!-- /.row -->
                <button class="float-right theme-button-two" type="submit">
                  {{ $t('contact.submit') }}
                </button>
              </form>
            </div>
            <!-- /.form-wrapper -->
          </div>
          <!-- /.col- -->
        </div>
        <!-- /.main-content -->
      </div>
      <!-- /.container -->
    </div>
</template>
<style scoped>

.theme-button-two:hover {
  color: #fff;
  background-color: #8d8d8d;
}
.theme-button-two {
    line-height: 50px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    background-color:#d8d8d8;
    color: #212121;
    border-radius: 5px;
    padding: 0 35px;
}

#contact {
  padding-bottom: 80px;
}
</style>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  data () {
    return {
      user: { nome: '', telefone: '', email: '', mensagem: '' }
    }
  },
  methods: {
    sendemail () {
      if (this.user.nome && this.user.email && this.user.mensagem) {
        axios.post('https://menon-dev.digitalfactory.co.ao/home/sendemailzenki', this.user).then(response => {
          this.user.nome = ''
          this.user.telefone = ''
          this.user.email = ''
          this.user.mensagem = ''
          Swal.fire({ icon: 'success', title: this.$t('contact.modal_title_success'), text: this.$t('contact.modal_text_success'), confirmButtonText: this.$t('contact.modal_ok') })
        })
      } else {
        Swal.fire({ icon: 'error', title: this.$t('contact.modal_title_error'), text: this.$t('contact.modal_text_error'), confirmButtonText: this.$t('contact.modal_ok') })
      }
    }
  }
}
</script>
