<template>
      <!--
    =====================================================
      Theme Counter
    =====================================================
    -->
    <div class="theme-counter section-spacing">
      <div class="container">
        <div class="bg">
          <!-- <h6>Company Success</h6>
          <h2>Some fun facts about our consulting</h2> -->

          <div class="cunter-wrapper">
            <div class="row">
              <div class="col-md-3 col-6">
                <div class="single-counter-box">
                  <div class="number">
                    <span
                      class="timer"
                      data-from="0"
                      data-to="15"
                      data-speed="1200"
                      data-refresh-interval="5"
                    >0</span>
                  </div>
                  <p>{{ $t('counter.activities') }}</p>
                </div>
                <!-- /.single-counter-box -->
              </div>
              <!-- /.col- -->
              <div class="col-md-3 col-6">
                <div class="single-counter-box">
                  <div class="number">
                    +<span
                      class="timer"
                      data-from="0"
                      data-to="145"
                      data-speed="1200"
                      data-refresh-interval="5"
                    >0</span>
                  </div>
                  <p>{{ $t('counter.clients') }}</p>
                </div>
                <!-- /.single-counter-box -->
              </div>
              <!-- /.col- -->
              <div class="col-md-3 col-6">
                <div class="single-counter-box">
                  <div class="number">
                    <span
                      class="timer"
                      data-from="0"
                      data-to="19"
                      data-speed="1200"
                      data-refresh-interval="5"
                    >0</span>
                  </div>
                  <p>{{ $t('counter.countries') }}</p>
                </div>
                <!-- /.single-counter-box -->
              </div>
              <!-- /.col- -->
              <div class="col-md-3 col-6">
                <div class="single-counter-box">
                  <div class="number">
                    <span
                      class="timer"
                      data-from="0"
                      data-to="45"
                      data-speed="1200"
                      data-refresh-interval="5"
                    >0</span>
                  </div>
                  <p>{{ $t('counter.employees') }}</p>
                </div>
                <!-- /.single-counter-box -->
              </div>
              <!-- /.col- -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.cunter-wrapper -->
          <!-- <a href="#" class="theme-button-one">VIEW CASE STUDIES</a> -->
        </div>
        <!-- /.bg -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.theme-counter -->
</template>
