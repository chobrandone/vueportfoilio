<template >
  <section id="home-section" class="hero">
    <div class="home-slider owl-carousel">
      <div class="slider-item">
        <div class="overlay"></div>
        <div class="container-fluid px-md-0">
          <div
            class="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
            data-scrollax-parent="true"
          >
            <div class="one-third order-md-last img">
              <div class="overlay"></div>
              <div class="overlay-1"></div>
            </div>
            <div
              class="one-forth d-flex align-items-center ftco-animate"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <div class="text text-left">
                <span class="subheading">Hello! This is Clyde</span>
                <h1 class="mb-4 mt-3">
                  Creative <span>UI/UX</span> Designer &amp; Developer
                </h1>
                <p>
                  <a href="#" class="btn btn-primary mx-2">Hire me</a>
                  <a href="#" class="btn btn-primary btn-outline-primary"
                    >Download CV</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script >
// import image from '../../assets/img/'
export default {
  data() {
    return {};
  },
  methods: {
    aboutus: function () {
      this.$router.push({
        path: "/aboutus",
      });
    },
  },
};
</script>
<style scoped>
.owl-carousel.home-slider {
  position: relative;
  height: 750px;
  z-index: 0;
}
.owl-carousel.home-slider .slider-item {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 750px;
  position: relative;
  z-index: 0;
}
@media (max-width: 1199.98px) {
  .owl-carousel.home-slider .slider-item {
    background-position: center center !important;
  }
}
.owl-carousel.home-slider .slider-item .overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000000;
  opacity: 0;
}
.owl-carousel.home-slider .slider-item .slider-text {
  height: 750px;
  z-index: 0;
}
@media (max-width: 991.98px) {
  .owl-carousel.home-slider .slider-item .slider-text {
    text-align: center;
  }
}
.owl-carousel.home-slider .slider-item .slider-text .one-third {
  background-image: url("../../assets/img/bg_1.jpg");
  width: 70%;
  position: relative;
  height: 750px;
  z-index: -1;
  -webkit-box-shadow: 20px -20px 69px -27px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 20px -20px 69px -27px rgba(0, 0, 0, 0.16);
  box-shadow: 20px -20px 69px -27px rgba(0, 0, 0, 0.16);
}
.owl-carousel.home-slider .slider-item .slider-text .one-third .overlay,
.owl-carousel.home-slider .slider-item .slider-text .one-third .overlay-1 {
  position: absolute;
  left: -7%;
  background: #fff;
  width: 150px;
  height: 50%;
  opacity: 1;
  border-right: 10px solid rgba(0, 0, 0, 0.1);
}
@media (max-width: 991.98px) {
  .owl-carousel.home-slider .slider-item .slider-text .one-third .overlay,
  .owl-carousel.home-slider .slider-item .slider-text .one-third .overlay-1 {
    opacity: 0;
    display: none;
  }
}
.owl-carousel.home-slider .slider-item .slider-text .one-third .overlay {
  top: 0;
  -webkit-transform: skewX(20deg);
  -ms-transform: skewX(20deg);
  transform: skewX(20deg);
}
.owl-carousel.home-slider .slider-item .slider-text .one-third .overlay-1 {
  bottom: 0;
  -webkit-transform: skewX(-20deg);
  -ms-transform: skewX(-20deg);
  transform: skewX(-20deg);
}
@media (max-width: 991.98px) {
  .owl-carousel.home-slider .slider-item .slider-text .one-third {
    width: 100%;
    z-index: 0;
  }
  .owl-carousel.home-slider .slider-item .slider-text .one-third .overlay {
    opacity: 0.3;
  }
  .owl-carousel.home-slider .slider-item .slider-text .one-third:after {
    opacity: 0;
  }
}
.owl-carousel.home-slider .slider-item .slider-text .one-forth {
  width: 50%;
  position: relative;
}
@media (min-width: 768px) {
  .owl-carousel.home-slider .slider-item .slider-text .one-forth {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 1200px;
    margin: 0 auto;
  }
}
@media (max-width: 991.98px) {
  .owl-carousel.home-slider .slider-item .slider-text .one-forth {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    padding: 1em;
  }
}
.owl-carousel.home-slider .slider-item .slider-text .one-forth .text {
  width: 100%;
}
@media (min-width: 992px) {
  .owl-carousel.home-slider .slider-item .slider-text .one-forth .text {
    position: absolute;
    top: 50%;
    left: 0;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 0;
    max-width: 60%;
    padding-left: 45px;
    padding-right: 3em;
  }
}
.owl-carousel.home-slider .slider-item .slider-text .subheading {
  color: #000000;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #b1b493;
}
.owl-carousel.home-slider .slider-item .slider-text .text {
  position: relative;
  z-index: 1;
}
.owl-carousel.home-slider .slider-item .slider-text h1 {
  font-size: 55px;
  color: #000000;
  line-height: 1.2;
  font-weight: 800;
}
.owl-carousel.home-slider .slider-item .slider-text h1 span {
  font-weight: 800;
  color: #b1b493;
}
@media (max-width: 991.98px) {
  .owl-carousel.home-slider .slider-item .slider-text h1 {
    color: #fff;
    font-size: 50px;
  }
}
@media (max-width: 767.98px) {
  .owl-carousel.home-slider .slider-item .slider-text h1 {
    font-size: 40px;
  }
}
.owl-carousel.home-slider .slider-item .slider-text h2 {
  font-size: 30px;
  font-weight: 400;
}
@media (max-width: 991.98px) {
  .owl-carousel.home-slider .slider-item .slider-text h2 {
    color: #fff;
  }
}
.owl-carousel.home-slider .slider-item .slider-text p {
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
}
@media (max-width: 991.98px) {
  .owl-carousel.home-slider .slider-item .slider-text p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 23px;
  }
}
.owl-carousel.home-slider .slider-item .slider-text .btn-custom {
  border: 1px solid #b1b493;
  padding: 5px 20px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 3px;
}
.owl-carousel.home-slider .owl-nav {
  position: absolute;
  bottom: 60px !important;
  left: 0;
  right: 0;
  margin: 0 auto;
}
@media (max-width: 991.98px) {
  .owl-carousel.home-slider .owl-nav {
    display: none;
  }
}
.owl-carousel.home-slider .owl-nav .owl-prev,
.owl-carousel.home-slider .owl-nav .owl-next {
  position: absolute;
  width: 60px;
  height: 60px;
  background: #fff !important;
  -moz-transition: all 0.7s ease;
  -o-transition: all 0.7s ease;
  -webkit-transition: all 0.7s ease;
  -ms-transition: all 0.7s ease;
  transition: all 0.7s ease;
  opacity: 1;
}
.owl-carousel.home-slider .owl-nav .owl-prev span:before,
.owl-carousel.home-slider .owl-nav .owl-next span:before {
  font-size: 20px;
  margin-top: 7px;
  color: #000000;
}
.owl-carousel.home-slider .owl-nav .owl-prev {
  top: 0 !important;
  right: 0 !important;
}
@media (min-width: 992px) {
  .owl-carousel.home-slider .owl-nav .owl-prev {
    right: 61px !important;
  }
}
.owl-carousel.home-slider .owl-nav .owl-prev:hover,
.owl-carousel.home-slider .owl-nav .owl-prev:focus {
  background: #000000 !important;
  outline: none !important;
}
.owl-carousel.home-slider .owl-nav .owl-prev:hover span:before,
.owl-carousel.home-slider .owl-nav .owl-prev:focus span:before {
  font-size: 20px;
  margin-top: 7px;
  color: #b1b493;
}
.owl-carousel.home-slider .owl-nav .owl-next {
  top: 0 !important;
  right: 0 !important;
}
@media (min-width: 992px) {
  .owl-carousel.home-slider .owl-nav .owl-next {
    right: 0 !important;
  }
}
.owl-carousel.home-slider .owl-nav .owl-next:hover,
.owl-carousel.home-slider .owl-nav .owl-next:focus {
  background: #000000 !important;
  outline: none !important;
}
.owl-carousel.home-slider .owl-nav .owl-next:hover span:before,
.owl-carousel.home-slider .owl-nav .owl-next:focus span:before {
  font-size: 24px;
  margin-top: 7px;
  color: #b1b493;
}
.owl-carousel.home-slider .owl-dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 40px;
  width: 100%;
  text-align: center;
}
@media (min-width: 992px) {
  .owl-carousel.home-slider .owl-dots {
    display: none;
  }
}
@media (max-width: 767.98px) {
  .owl-carousel.home-slider .owl-dots {
    bottom: 5px;
  }
}
.owl-carousel.home-slider .owl-dots .owl-dot {
  width: 10px;
  height: 10px;
  margin: 5px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
}
.owl-carousel.home-slider .owl-dots .owl-dot.active {
  background: #fff;
}
.img,
.blog-img,
.user-img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
img {
  vertical-align: middle;
  border-style: none;
}
.order-md-last {
  -webkit-box-ordinal-group: 14;
  -ms-flex-order: 13;
  order: 13;
}
</style>