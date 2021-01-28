<template>
  <section
    class="ftco-about ftco-section ftco-no-pt ftco-no-pb"
    id="about-section"
  >
    <div class="container">
      <div class="row d-flex no-gutters">
        <div class="col-md-6 col-lg-5 d-flex">
          <div class="img-about img d-flex align-items-stretch">
            <div class="overlay"></div>
            <div
              class="img d-flex align-self-stretch align-items-center about-img"
            ></div>
          </div>
        </div>
        <div class="col-md-6 col-lg-7 pl-md-4 pl-lg-5 py-5">
          <div class="py-md-5">
            <div class="row justify-content-start pb-3">
              <div class="col-md-12 heading-section ftco-animate">
                <span class="subheading">My Intro</span>
                <h2
                  class="mb-4"
                  style="font-size: 34px; text-transform: capitalize"
                >
                  About Me
                </h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>

                <ul class="about-info mt-4 px-md-0 px-2">
                  <li class="d-flex">
                    <span>Name:</span> <span>Clyde Nowitzki</span>
                  </li>
                  <li class="d-flex">
                    <span>Date of birth:</span> <span>January 01, 1990</span>
                  </li>
                  <li class="d-flex">
                    <span>Address:</span>
                    <span>San Francisco CA 97987 USA</span>
                  </li>
                  <li class="d-flex">
                    <span>Zip code:</span> <span>1000</span>
                  </li>
                  <li class="d-flex">
                    <span>Email:</span> <span>cydenowitzki@gmail.com</span>
                  </li>
                  <li class="d-flex">
                    <span>Phone: </span> <span>+1-2234-5678-9-0</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-12">
                <div class="my-interest d-lg-flex w-100">
                  <div class="interest-wrap d-flex align-items-center">
                    <div
                      class="icon d-flex align-items-center justify-content-center"
                    >
                      <span class="flaticon-listening"></span>
                    </div>
                    <div class="text">Music</div>
                  </div>
                  <div class="interest-wrap d-flex align-items-center">
                    <div
                      class="icon d-flex align-items-center justify-content-center"
                    >
                      <span class="flaticon-suitcases"></span>
                    </div>
                    <div class="text">Travel</div>
                  </div>
                  <div class="interest-wrap d-flex align-items-center">
                    <div
                      class="icon d-flex align-items-center justify-content-center"
                    >
                      <span class="flaticon-video-player"></span>
                    </div>
                    <div class="text">Movie</div>
                  </div>
                  <div class="interest-wrap d-flex align-items-center">
                    <div
                      class="icon d-flex align-items-center justify-content-center"
                    >
                      <span class="flaticon-football"></span>
                    </div>
                    <div class="text">Sports</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import image from "../../assets/img/about-1.jpg"
export default {
  name: "choose",
  data() {
    return {};
  },
};
</script>
<style scoped>
.ftco-about .img-about {
  width: 100%;
  z-index: 0;
  position: relative;
}
.ftco-about .img-about .img {
  width: 100%;
  position: relative;
  z-index: 1;
  -webkit-box-shadow: -20px 20px 69px -27px rgb(0 0 0 / 33%);
  -moz-box-shadow: -20px 20px 69px -27px rgba(0, 0, 0, 0.33);
  box-shadow: -20px 20px 69px -27px rgb(0 0 0 / 33%);
}
.img,
.blog-img,
.user-img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.ftco-about ul.about-info {
  display: inline-block;
  padding: 0;
  margin: 0;
  width: 100%;
}
.ftco-about ul.about-info li {
  list-style: none;
  margin-bottom: 10px;
}
.ftco-about ul.about-info li span {
  width: calc(100% - 130px);
  font-weight: 600;
  color: #b1b493;
}
.ftco-about ul.about-info li span:first-child {
  font-weight: 600;
  color: #000000;
  width: 130px;
}

.ftco-about .my-interest {
  margin-top: 30px;
}
.ftco-about .my-interest .interest-wrap {
  width: 25%;
  border-left: 2px solid #b1b493;
  padding-left: 10px;
}
@media (max-width: 1199.98px) {
  .ftco-about .my-interest .interest-wrap {
    width: 50%;
    float: left;
    margin-bottom: 10px;
  }
}
.ftco-about .my-interest .interest-wrap .icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #b1b493;
}
.ftco-about .my-interest .interest-wrap .icon span {
  color: #000000;
  font-size: 18px;
}
.ftco-about .my-interest .interest-wrap .text {
  font-weight: 600;
  color: #000000;
  padding-left: 5px;
}
.about-img {
  background-image: url("../../assets/img/about-1.jpg");
  display: flex;
  justify-content: center;
  width: 50%;
}
</style>
