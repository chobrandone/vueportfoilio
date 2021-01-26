<template>
  <div class="major">
    <div class="header">
      <section class="head"><Head /></section>
      <div></div>
      <section class="navi"><Navbar /></section>
    </div>
 
    <section><About /></section>
   
    
    <section><Contact /></section>
    <section><Footer /></section>
  </div>
</template>
<script>
import Head from "../head/header";
import Navbar from "../head/navbar";
import Slider from "../slider/slider";
import chooseus from "@/components/chooseUsComponent/chooseus";
import Footer from "../footer/footer";
import Contact from "../contactus/contactus";
import About from "../aboutus/about";
import Facts from "../Facts/facts";
import Team from "../team/team";
import Process from '../serviceProcess/serviceprocess'
// import Blog from "../blog/blog"
import Feedback from '../Feedback/feedbac'
export default {
  data() {
    return {};
  },
  components: {
    Head,
    Navbar,

 
    Footer,
    Contact,
    About,
   
    Process,
    // Blog,
    Feedback
  },
  methods:{
   
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap");
*{
  font-family: "dosis";
}
.major {
  overflow: hidden;
}
</style>
