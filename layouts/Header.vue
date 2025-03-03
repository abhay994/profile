

<script setup>

// menu sticky 
const isSticky = ref(false);
const handleSticky = () => {
  if (window.scrollY > 80) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleSticky);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleSticky);
});


const openMenu = ref(false)
const toggleMenu = () => {
  openMenu.value = !openMenu.value
}
 

if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap");
}

</script>


<template>
  <header :class="`main-header ${isSticky ? 'fixed-header' : ''}`">
    <div class="header-upper">
      <div class="container">
        <div class="header-inner d-flex align-items-center">
          <!-- START LOGO DESIGN AREA -->
          <div class="logo-outer">
            <div class="logo">
              <NuxtLink to="/">
                <h4>Abhay Rastogi</h4>
                <!-- <img
                  src="~/assets/images/logos/logo.png"
                  alt="Logo"
                  title="Logo"
              /> -->
            </NuxtLink>
            </div>
          </div>
          <!-- / END LOGO DESIGN AREA -->
          <!-- START NAV DESIGN AREA -->
          <div class="nav-outer clearfix mx-auto">
            <!-- Main Menu -->
            <nav class="main-menu navbar-expand-lg">
              <div class="navbar-header">
                <div class="mobile-logo">
                  <NuxtLink to="/">
                    <h4>Abhay Rastogi</h4>
                    <!-- <img
                      src="~/assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    /> -->
                  </NuxtLink>
                </div>
                <!-- Toggle Button -->
                <button
                  type="button"
                  class="navbar-toggle"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse"
                >
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div class="navbar-collapse collapse">
                <ul class="navigation clearfix">
                  <li><NuxtLink class="nav-link-click" to="/">Home</NuxtLink></li>
                  <!-- <li><NuxtLink class="nav-link-click" to="/about">about</NuxtLink></li> -->
                  <li>
                    <NuxtLink class="nav-link-click" to="/projects">Projects</NuxtLink>
                  </li>
                  <!-- <li><NuxtLink class="nav-link-click" to="/blog">blog</NuxtLink></li> -->
                  <li>
                    <NuxtLink class="nav-link-click" to="/contact">Contact</NuxtLink>
                  </li>
                </ul>
              </div>
            </nav>
            <!-- / END NAV DESIGN AREA -->
          </div>
          <div class="about-social text-center">
            <ul>
              <!-- <li>
                <a href="https://www.facebook.com" target="_blank"><i class="ri-facebook-circle-fill"></i></a>
              </li> -->
              <!-- <li>
                <a href="https://www.twitter.com" target="_blank"><i class="ri-twitter-x-line"></i></a>
              </li> -->
              <li>
                <a href="https://www.linkedin.com/in/abhay-rastogi/" target="_blank"><i class="ri-linkedin-fill"></i></a>
              </li>
              <li>
                <a href="https://github.com/abhay994" target="_blank"><i class="ri-github-line"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

