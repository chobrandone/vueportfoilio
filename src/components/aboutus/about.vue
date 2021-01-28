<template >
  <section class="ftco-counter img bg-light" id="section-counter">
    <div class="container">
      <div class="row">
        <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
          <div class="block-18 d-flex">
            <div class="icon d-flex justify-content-center align-items-center">
              <span class="fas fa-briefcase"></span>
            </div>
            <div class="text">
              <strong class="number" data-number="750">35</strong>
              <span>Project Complete</span>
            </div>
          </div>
        </div>
        <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
          <div class="block-18 d-flex">
            <div class="icon d-flex justify-content-center align-items-center">
              <span class="far fa-smile"></span>
            </div>
            <div class="text">
              <strong class="number" data-number="568">20</strong>
              <span>Happy Clients</span>
            </div>
          </div>
        </div>
        <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
          <div class="block-18 d-flex">
            <div class="icon d-flex justify-content-center align-items-center">
              <span class="fas fa-mug-hot"></span>
            </div>
            <div class="text">
              <strong class="number" data-number="478">25</strong>
              <span>Cups of coffee</span>
            </div>
          </div>
        </div>
        <div class="col-md-3 justify-content-center counter-wrap ftco-animate">
          <div class="block-18 d-flex">
            <div class="icon d-flex justify-content-center align-items-center">
              <span class="fas fa-chart-line"></span>
            </div>
            <div class="text">
              <strong class="number" data-number="780">40</strong>
              <span>Years experienced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
.ftco-counter {
  overflow-x: hidden;
  position: relative;
  padding: 5em 0;
}
@media (max-width: 1199.98px) {
  .ftco-counter {
    background-position: center center !important;
  }
}
.ftco-counter .block-18 {
  display: block;
  width: 100%;
}
@media (max-width: 991.98px) {
  .ftco-counter .block-18 {
    margin-bottom: 2em;
  }
}
.ftco-counter .icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #b1b493;
  position: relative;
}
.ftco-counter .icon span {
  font-size: 40px;
  color: #fff;
}
.ftco-counter .text {
  width: calc(100% - 60px);
  position: relative;
  padding-left: 15px;
}
@media (max-width: 767.98px) {
  .ftco-counter .text {
    width: 100%;
  }
}
.ftco-counter .text .number {
  line-height: 1;
  font-weight: 700;
  font-size: 30px;
  color: rgba(0, 0, 0, 0.8);
  display: block;
  margin-bottom: 4px;
}
.ftco-counter .text span {
  font-weight: 600;
  font-size: 15px;
  color: #b1b493;
  text-transform: uppercase;
}
@media (max-width: 767.98px) {
  .ftco-counter .counter-wrap {
    margin-bottom: 20px;
  }
}
</style>