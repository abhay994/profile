
<template>
  <section class="blog-category section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <!-- SINGLE BLOG POST DETAILS DESIGN AREA -->
          <div
            class="single-blog-post-details wow fadeInDown"
            data-wow-delay="0.2s"
          >
            <img
              src="~/assets/images/blog/blog1.jpg"
              class="img-responsive"
              alt=""
            />
            <h2>Create a Landing Page That Performs Great</h2>
            <div class="post-date">
              <span><i class="ri-calendar-fill"></i> 02,Feb 2024</span>
              <span
                ><i class="ri-file-copy-2-fill"></i> website development</span
              >
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
            <blockquote>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat.
            </blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
            <h2>Tags</h2>
            <div class="tag">
              <a href="#">Web design</a>
              <a href="#">Web Development</a>
              <a href="#">Accounting</a>
            </div>
            <div class="next-previews-button-design">
              <a class="pull-left" href="#"
                ><i class="fa fa-chevron-left"></i> Previous post</a
              >
              <a class="pull-right" href="#"
                >Next post <i class="fa fa-chevron-right"></i
              ></a>
            </div>
          </div>
          <!-- / END BLOG POST DESIGN AREA -->
          <div class="post-comments-area">
            <h2>Comments</h2>
            <div class="single-comment">
              <img src="~/assets/images/blog/author.jpg" alt="" />
              <h5>Admin - June, 2024</h5>
              <p>
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                semper libero, sit amet adipi scing sem neque sed ipsum. Nam
                quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                Maecenas nec odio et ante tincidunt tempus.
              </p>
              <a href="#"><i class="ri-reply-line"></i> Reply</a>
            </div>
            <div class="single-comment">
              <img src="~/assets/images/blog/author.jpg" alt="" />
              <h5>Admin - Aug, 2026</h5>
              <p>
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                semper libero, sit amet adipi scing sem neque sed ipsum. Nam
                quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                Maecenas nec odio et ante tincidunt tempus.
              </p>
              <a href="#"><i class="ri-reply-line"></i> Reply</a>
            </div>
            <div class="comment-form-area">
              <div class="row">
                <div class="form-group col-md-6">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="* Name"
                  />
                </div>
                <div class="form-group col-md-6">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="* Email"
                  />
                </div>
                <div class="form-group col-md-12">
                  <textarea
                    rows="6"
                    name="message"
                    class="form-control"
                    placeholder="* Comment"
                  ></textarea>
                </div>
                <div class="col-md-12">
                  <button>Submit Comment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- START BLOG SIDEBAR DESIGN AREA -->
        <div class="col-lg-4">
          <div class="single-blog-sidebar-area">
            <div class="single-side-bar">
              <h2>Search</h2>
              <input type="text" class="form-control" placeholder="Search" />
              <button>Search</button>
            </div>
            <div class="single-side-bar">
              <h2>about me</h2>
              <img src="~/assets/images/blog/author.jpg" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div class="single-side-bar">
              <h2>Catagory lists</h2>
              <ul>
                <li>
                  <a href="#"> Business planning <span>(5)</span></a>
                </li>
                <li>
                  <a href="#"> CMS Web Templates <span>(3)</span></a>
                </li>
                <li>
                  <a href="#"> Html Templates <span>(6)</span></a>
                </li>
                <li>
                  <a href="#"> Graphics Design <span>(4)</span></a>
                </li>
                <li>
                  <a href="#"> WordPress <span>(8)</span></a>
                </li>
              </ul>
            </div>
            <div class="single-side-bar">
              <h2>Tags</h2>
              <div class="tag">
                <a href="#">Web design</a>
                <a href="#">Web Development</a>
                <a href="#">Accounting</a>
                <a href="#">Taxation</a>
                <a href="#">Retirement</a>
                <a href="#">Financial planning</a>
              </div>
            </div>
          </div>
        </div>
        <!-- / EMD BLOG SIDEBAR DESIGN AREA -->
      </div>
    </div>
  </section>
</template>

 