<template>
  <div class="fedback">
    <div class="section padding_layout_1 light_silver gross_layout right_gross_layout">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="full text-right">
                        <div class="main_heading text_align_right">
                            <h2>Our Feedback</h2>
                            <p class="large">Easy and effective way to get your device repaired.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row counter mt-4">
                <div class="col-md-4"> </div>
                <div class="col-md-8 ">
                    <div class="row text-right ">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin_bottom_50 ">
                            <div class="text_align_right"><i class="fa fa-smile-o"></i></div>
                            <div class="text_align_right">
                                <p class="counter-heading text_align_right">Happy Customers</p>
                            </div>
                            <h5 class="counter-count">2150</h5>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin_bottom_50">
                            <div class="text_align_right"><i class="fa fa-laptop"></i></div>
                            <div class="text_align_right">
                                <p class="counter-heading text_align_right">Laptop Repaired</p>
                            </div>
                            <h5 class="counter-count">1280</h5>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin_bottom_50">
                            <div class="text_align_right"><i class="fa fa-desktop"></i></div>
                            <div class="text_align_right">
                                <p class="counter-heading">Computer Repaired</p>
                            </div>
                            <h5 class="counter-count">848</h5>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin_bottom_50">
                            <div class="text_align_right"><i class="fa fa-windows"></i></div>
                            <div class="text_align_right">
                                <p class="counter-heading">OS Installed</p>
                            </div>
                            <h5 class="counter-count">450</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>
<style>
*{
  font-family: 'Raleway', sans-serif;
}
.fedback{
  margin-top: 30px;
}
.service_blog_inner .icon img {
	width: 65px;
}

.service_blog_inner h4.service-heading {
	margin: 25px 0 15px 0;
}

.service_blog_inner {
	margin-bottom: 35px;
	margin-top: 10px;
}

.gross_layout {
	position: relative;
}


.counter i {
    font-size: 70px;
    color: rgb(23, 165, 233);
}

.margin_bottom_50 {
    margin-bottom: 50px;
}
.counter-heading {
    color: rgb(0, 0, 0);
    margin-top: 15px;
    margin-bottom: 0px;
    font-weight: 600;
    font-size: 18px;
}
.mechanic .counter-count {
	text-align: center;
	color: #fff;
	margin-top: 10px;
}

p.large {
    color: rgb(137, 137, 137);
    font-size: 20px;
    font-weight: 400;
    margin: 0px 0px 10px;
}
.main_heading::after {
  float: right;
    content: "";
    display: block;
    width: 80px;
    height: 3px;
    margin: 0px auto 0px;
    background: rgb(23, 165, 233);
}
.gross_layout {
	position: relative;
}

@media (min-width: 240px) {

.gross_layout::before {
	position: absolute;
	background: none;
	width: 35%;
	height: 100%;
	right: 0;
	content: "";
	top: 0;
	background-size: cover;
	background-position: right;
	z-index: 1;
}


.gross_layout.right_gross_layout::before {
	position: absolute;
	background: none;
	width: 35%;
	height: 100%;
	left: 0;
	content: "";
	top: 0;
	background-size: cover;
	background-position: right;
	z-index: 1;
}
.gross_layout.right_gross_layout::after {
 
	position: absolute;
	background:none;
	width: 35%;
	height: 100%;
	left: 0;
	content: "";
	top: 0;
	background-size: cover;
	background-position: right;
}
.gross_layout.right_gross_layout::after {
  
	position: absolute;
	background: none;
	width: 35%;
	height: 100%;
	left: 0;
	content: "";
	top: 0;
	background-size: cover;
	background-position: right;
}

}


@media (min-width: 768px) {




.gross_layout::before {
	position: absolute;
	background: rgba(10, 139, 199, 0.8);
	width: 35%;
	height: 100%;
	right: 0;
	content: "";
	top: 0;
	background-size: cover;
	background-position: right;
	z-index: 1;
}


.gross_layout.right_gross_layout::before {
	position: absolute;
	background: rgba(10, 139, 199, 0.8);
	width: 35%;
	height: 100%;
	left: 0;
	content: "";
	top: 0;
	background-size: cover;
	background-position: right;
	z-index: 1;
}

.gross_layout.right_gross_layout::after {
 
	position: absolute;
	background: url('../../assets/images/dark_bg_img2.png');
	width: 35%;
	height: 100%;
	left: 0;
	content: "";
	top: 0;
	background-size: cover;
	background-position: right;
}
.gross_layout.right_gross_layout::after {
  
	position: absolute;
	background: url('../../assets/images/dark_bg_img2.png');
	width: 35%;
	height: 100%;
	left: 0;
	content: "";
	top: 0;
	background-size: cover;
	background-position: right;
}
}
@media (max-width: 767px){

.counter .text_align_right {
    text-align: center;
}
.counter-count {
    text-align: center;
}
h2 {
    font-size: 28px;
    line-height: 28px;
    margin-bottom: 20px;
}
p.large {
    font-size: 18px;
    line-height: 24px;
}
}

  
</style>