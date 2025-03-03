
<template>
  <section id="contact" class="contact-area">
    <div class="container">
      <div class="container-inner">
        <div class="row">
          <!-- START CONTACT FORM DESIGN AREA -->
          <div class="col-lg-12">
            <ul class="extra-skills wow fadeInUp delay-0-2s pb-30">
              <li>
                <i class="ri-building-2-line"></i>Office:Jurain,Dhaka Bangladesh
              </li>
              <li><i class="ri-headphone-line"></i>Number:+1234321321</li>
              <li>
                <i class="ri-mail-open-line"></i>Email:websitename@mail.com
              </li>
            </ul>
            <div class="contact-form contact-form-area wow fadeInUp delay-0-4s">
              <form
                id="contactForm"
                class="contactForm"
                name="contactForm"
                @submit.prevent
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="form-control"
                        value=""
                        placeholder="Steve Milner" 
                        data-error="Please enter your Name"
                      />
                      <label for="name" class="for-icon"
                        ><i class="far fa-user"></i
                      ></label>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="form-control"
                        value=""
                        placeholder="hello@websitename.com" 
                        data-error="Please enter your Email"
                      />
                      <label for="email" class="for-icon"
                        ><i class="far fa-envelope"></i
                      ></label>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="message">Your Message</label>
                      <textarea
                        name="message"
                        id="message"
                        class="form-control"
                        rows="4"
                        placeholder="Write Your message" 
                        data-error="Please Write your Message"
                      ></textarea>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group mb-0">
                      <button type="submit" class="theme-btn">
                        Send Me Message <i class="ri-mail-line"></i>
                      </button>
                      <div id="msgSubmit" class="hidden"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- / END CONTACT FORM DESIGN AREA -->
        </div>
      </div>
    </div>
  </section>
</template>

 