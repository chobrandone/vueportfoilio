<template >
  <div>
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-info">
              <h3 class="image">
                <img src="../../assets/it_logo.png" alt="" />
              </h3>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
                nada terra videa magna derita valies darta donna mare fermentum
                iaculis eu non diam phasellus. Scelerisque felis imperdiet proin
                fermentum leo. Amet volutpat consequat mauris nunc congue.
              </p>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="ion-ios-arrow-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i class="ion-ios-arrow-right"></i> <a href="#">About us</a>
                </li>
                <li>
                  <i class="ion-ios-arrow-right"></i> <a href="#">Services</a>
                </li>
                <li>
                  <i class="ion-ios-arrow-right"></i>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i class="ion-ios-arrow-right"></i>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Fred aeroport <br />
                Douala<br />
                Cameroon <br />
                <strong>Phone:</strong> 237 653-332-269<br />
                <strong>Email:</strong> chobrandone4@gmail.com<br />
              </p>

              <div class="social-links">
                <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" class="facebook"><i class="fab fa-facebook"></i></a>
                <a href="#" class="instagram"
                  ><i class="fab fa-instagram"></i
                ></a>
                <a href="#" class="google-plus"
                  ><i class="fab fa-google-plus"></i
                ></a>
                <a href="#" class="linkedin"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna veniam enim veniam illum dolore legam minim quorum culpa
                amet magna export quem marada parida nodela caramase seza.
              </p>
              <form action="" method="post">
                <input type="email" name="email" /><input
                  type="submit"
                  value="Subscribe"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright <strong>it.next</strong>. All Rights Reserved
        </div>
        <div class="credits">
          <!--
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=BizPage
        -->
          Designed by <a>Brandone</a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
#footer {
  background: #039ee3;
  padding: 0 0 30px 0;
  color: #eee;
  font-size: 14px;
}
.image img {
  width: 150px;
}
#footer .footer-top {
  background: #111;
  padding: 60px 0 30px 0;
}

#footer .footer-top .footer-info {
  margin-bottom: 30px;
}

#footer .footer-top .footer-info h3 {
  font-size: 34px;
  margin: 0 0 20px 0;
  padding: 2px 0 2px 10px;
  line-height: 1;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 3px;
  border-left: 4px solid #039ee3;
}

#footer .footer-top .footer-info p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: "Montserrat", sans-serif;
  color: #eee;
}

#footer .footer-top .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #333;
  color: #eee;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .footer-top .social-links a:hover {
  background: #039ee3;
  color: #fff;
}

#footer .footer-top h4 {
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  position: relative;
  padding-bottom: 12px;
}

#footer .footer-top h4::before,
#footer .footer-top h4::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
}

#footer .footer-top h4::before {
  right: 0;
  background: #555;
}

#footer .footer-top h4::after {
  background: #039ee3;
  width: 60px;
}

#footer .footer-top .footer-links {
  margin-bottom: 30px;
}

#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#footer .footer-top .footer-links ul i {
  padding-right: 8px;
  color: #ddd;
}

#footer .footer-top .footer-links ul li {
  border-bottom: 1px solid #333;
  padding: 10px 0;
}

#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}

#footer .footer-top .footer-links ul a {
  color: #eee;
}

#footer .footer-top .footer-links ul a:hover {
  color: #039ee3;
}

#footer .footer-top .footer-contact {
  margin-bottom: 30px;
}

#footer .footer-top .footer-contact p {
  line-height: 26px;
}

#footer .footer-top .footer-newsletter {
  margin-bottom: 30px;
}

#footer .footer-top .footer-newsletter input[type="email"] {
  border: 0;
  padding: 6px 8px;
  width: 65%;
}

#footer .footer-top .footer-newsletter input[type="submit"] {
  background: #039ee3;
  border: 0;
  width: 35%;
  padding: 6px 0;
  text-align: center;
  color: #fff;
  transition: 0.3s;
  cursor: pointer;
}

#footer .footer-top .footer-newsletter input[type="submit"]:hover {
  background: #039ee3;
}

#footer .copyright {
  text-align: center;
  padding-top: 30px;
}

#footer .credits {
  text-align: center;
  font-size: 13px;
  color: #ddd;
}
</style>