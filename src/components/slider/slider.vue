<template>
  <div>
    <div class="loader">
      <div class="loader__element"></div>
    </div>

    <div
      id="carouselExampleIndicators"
      class="carousel slide "
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="overlay"></div>
          <img
            class="d-block w-100"
            src="../../assets/images/main1.jpg"
            alt="First slide"
          />
          <div class="carousel-caption d-none d-md-block mid-text">
            <h1>{{ typeValue }}</h1>
            <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
          </div>
        </div>
        <div class="carousel-item ">
          <div class="overlay"></div>
          <img
            class="d-block w-100"
            src="../../assets/images/main2.jpg"
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <div class="overlay"></div>
          <img
            class="d-block w-100"
            src="../../assets/images/main3.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "slider",
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: ["Breath", "Lived", "Emulated ", "with each action"],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap");

.mid-text {
display: flex;
justify-content: center;
top: 40%;
}

.carousel-item img{
  height: 700px;
  object-fit: cover;
  
}

.loader {
  background-color: #2d3c7f;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  z-index: 100000;
}

.loader__element {
  height: 3px;
  width: 100%;
  background: white;
}

.loader__element:before {
  content: "";
  display: block;
  background-color: #039ee3;
  height: 3px;
  width: 0;
  animation: getWidth 10s ease-in infinite;
}
@media (min-width: 240px) {
  .carousel-item img{
  height: unset;
  object-fit: cover;
  
}
 }

@media (min-width: 768px) {
  .carousel-item img{
  height: 700px;
  object-fit: cover;
  
}
 }


@keyframes getWidth {
  100% {
    width: 100%;
  }
}

.overlay {
  position: absolute;

  height: 100%;
  width: 100%;
  background-color: #2d3c7f;
  opacity: 0.7;
}
</style>
