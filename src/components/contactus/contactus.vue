<template >
  <div>
          <section id="contact" class="section-bg wow fadeInUp">
        <div class="container">
          <div class="section-header">
            <h3>Contact Us</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
          </div>

          <div class="row contact-info">
            <div class="col-md-4">
              <div class="contact-address">
             <i class="fas fa-map-marker-alt"></i>
                <h3>Address</h3>
                <address>Douala Fred aeroprt</address>
              </div>
            </div>

            <div class="col-md-4">
              <div class="contact-phone">
               <i class="fas fa-phone-alt"></i>
                <h3>Phone Number</h3>
                <p><a href="tel:+237653332269">+237 653332269</a></p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="contact-email">
               <i class="fas fa-envelope"></i>
                <h3>Email</h3>
                <p><a href="chobrandone4@gmail.com">chobrandone4@gmail.com</a></p>
              </div>
            </div>
          </div>

          <div class="form">
            <div id="sendmessage">Your message has been sent. Thank you!</div>
            <div id="errormessage"></div>
            <form action="" method="post" role="form" class="contactForm">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div class="validation"></div>
                </div>
                <div class="form-group col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                  <div class="validation"></div>
                </div>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 8 chars of subject"
                />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  name="message"
                  rows="5"
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
                ></textarea>
                <div class="validation"></div>
              </div>
              <div class="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
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
  
#contact {
    padding: 60px 0;
}

#contact .contact-info {
    margin-bottom: 20px;
    text-align: center;
}

#contact .contact-info i {
    font-size: 48px;
    display: inline-block;
    margin-bottom: 10px;
    color: #039ee3;
}

#contact .contact-info address,
#contact .contact-info p {
    margin-bottom: 0;
    color: #000;
}
.section-header h3::before {
    content: '';
    position: absolute;
    display: block;
    width: 120px;
    height: 1px;
    background: #ddd;
    bottom: 1px;
    left: calc(50% - 60px);
}
.section-header h3::after {
    content: '';
    position: absolute;
    display: block;
    width: 40px;
    height: 3px;
    background: #039ee3;
    bottom: 0;
    left: calc(50% - 20px);
}
.section-header h3 {
    font-size: 32px;
    color: #111;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    position: relative;
    padding-bottom: 15px;
}
#contact .contact-info h3 {
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: bold;
    text-transform: uppercase;
    color: #999;
}

#contact .contact-info a {
    color: #000;
}

#contact .contact-info a:hover {
    color: #039ee3;
}

#contact .contact-address,
#contact .contact-phone,
#contact .contact-email {
    margin-bottom: 20px;
}

#contact .form #sendmessage {
    color: #039ee3;
    border: 1px solid #039ee3;
    display: none;
    text-align: center;
    padding: 15px;
    font-weight: 600;
    margin-bottom: 15px;
}

#contact .form #errormessage {
    color: red;
    display: none;
    border: 1px solid red;
    text-align: center;
    padding: 15px;
    font-weight: 600;
    margin-bottom: 15px;
}

#contact .form #sendmessage.show,
#contact .form #errormessage.show,
#contact .form .show {
    display: block;
}

#contact .form .validation {
    color: red;
    display: none;
    margin: 0 0 20px;
    font-weight: 400;
    font-size: 13px;
}

#contact .form input,
#contact .form textarea {
    padding: 10px 14px;
    border-radius: 0;
    box-shadow: none;
    font-size: 15px;
}

#contact .form button[type="submit"] {
    background: #039ee3;
    border: 0;
    padding: 10px 30px;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}

#contact .form button[type="submit"]:hover {
    background: #039ee3;
}
@media (min-width: 768px) {
    #contact .contact-address,
    #contact .contact-phone,
    #contact .contact-email {
        padding: 20px 0;
    }
    #contact .contact-phone {
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
    }
}

</style>