<template >
  <div>
       <div class="section padding_layout_1 light_silver gross_layout mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="full">
                        <div class="main_heading text_align_left">
                            <h2 class="service">Service Process</h2>
                            <p class="large">Easy and effective way to get your device repaired.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="full">
                                <div class="service_blog_inner">
                                    <div class="icon text_align_left"><img src="../../assets/images/si1.png" alt="#" /></div>
                                    <h4 class="service-heading">Fast service</h4>
                                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="full">
                                <div class="service_blog_inner">
                                    <div class="icon text_align_left"><img src="../../assets/images/si2.png" alt="#" /></div>
                                    <h4 class="service-heading">Secure payments</h4>
                                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="full">
                                <div class="service_blog_inner">
                                    <div class="icon text_align_left"><img src="../../assets/images/si3.png" alt="#" /></div>
                                    <h4 class="service-heading">Expert team</h4>
                                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="full">
                                <div class="service_blog_inner">
                                    <div class="icon text_align_left"><img src="../../assets/images/si4.png" alt="#" /></div>
                                    <h4 class="service-heading">Affordable services</h4>
                                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="full">
                                <div class="service_blog_inner">
                                    <div class="icon text_align_left"><img src="../../assets/images/si5.png" alt="#" /></div>
                                    <h4 class="service-heading">90 Days warranty</h4>
                                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="full">
                                <div class="service_blog_inner">
                                    <div class="icon text_align_left"><img src="../../assets/images/si6.png" alt="#" /></div>
                                    <h4 class="service-heading">Award winning</h4>
                                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
                                </div>
                            </div>
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
<style scoped>
.gross_layout {
	position: relative;
}

.gross_layout {
	position: relative;
}
.main_heading::after {
  float: left;
    content: "";
    display: block;
    width: 80px;
    height: 3px;
    margin: 0px auto 0px;
    background: rgb(23, 165, 233);
}
.main_heading{
  margin-bottom: 20px;
}
.service .large{
  text-align: left;
}

.light_silver_fonts p,
.light_silver_fonts h1,
.light_silver_fonts h2,
.light_silver_fonts h3,
.light_silver_fonts h4,
.light_silver_fonts h5,
.light_silver_fonts h6,
.light_silver_fonts ul,
.light_silver_fonts ul li,
.light_silver_fonts ul li a,
.light_silver_fonts ul i,
.light_silver_fonts .post_info i,
.light_silver_fonts div,
.light_silver_fonts a.read_more {
	color: #ccc !important;
}


/** icon **/

.iconsmind-Over-Time2::before {
	content: "\eb2e";
}

.iconsmind-Money-2::before {
	content: "\eac6";
}

.iconsmind-People-onCloud::before {
	content: "\eb52";
}

.iconsmind-Wallet-2::before {
	content: "\ede5";
}

.iconsmind-Shield::before {
	content: "\ec4f";
}

.iconsmind-Ribbon-2::before {
	content: "\ebf5";
}


/** end icon **/

section.background_bg_bottom {
	background-repeat: repeat-x !important;
	background-position: bottom center !important;
}

.parallax_bg {
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
}

.dark_gray {
	background-color: #111;
	min-height: 400px;
}

.dark_gray.white_fonts h2 {
	color: #17a5e9 !important;
}

.dark_gray.light_silver_fonts h2 {
	color: #fff !important;
}

.list_style_1 {
	font-size: 14px;
	font-weight: 500;
	margin: 20px 0 15px;
}

.list_style_1 i {
	float: left;
	margin: 3px 16px 0 0;
}

.light_silver {
	background: #f8f8f8;
}

.light_silver_2 {
	background: #f8f8f8 !important;
}
  
@media (min-width: 240px) {




.gross_layout::after {
	position: absolute;
	background: none;
	width: 35%;
	height: 100%;
	right: 0;
	content: "";
	top: 0;
	background-size: cover;
	background-position: right;
}
.text_align_left{
  text-align: center;
}
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
.service_blog_inner{
  text-align:center;
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


}
  
@media (min-width: 768px) {

.gross_layout::after {
	position: absolute;
	background: url('../../assets/images/dark_bg_img.png');
	width: 35%;
	height: 100%;
	right: 0;
	content: "";
	top: 0;
	background-size: cover;
	background-position: right;
}
.text_align_left{
  text-align: left;
}
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
.service_blog_inner{
  text-align: left;
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


}
</style>