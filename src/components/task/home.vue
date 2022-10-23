<template>

  <div :class="{ 'onScroll': !view.topOfPage}" class="nav">
    <nav class="navbar">
      <!-- LOGO -->
      <div class="logo"> GoBlog+</div>
      <!-- NAVIGATION MENU -->
      <ul class="nav-links">
        <!-- USING CHECKBOX HACK -->
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776;</label>
        <!-- NAVIGATION MENUS -->
        <div class="menu">
          <li><a class="active" href="/">Home</a></li>
          <li><a href="/Signup">Storie</a></li>
          <li><a class="signup" href="/Signup">Post</a></li>

          <li><a href="">Writte</a></li>
          <button class="header-btn"><a href="/Login">Sign up</a></button>
        </div>
      </ul>
    </nav>
  </div>

  <!-- hero -->
  <div class="hero">
    <div class="hero-blog">
      <h1>Web development</h1>
      <!-- <p>Share web development skils</p> -->
      <div><button class="hero-btn">Start reading</button></div>
    </div>
  </div>

  <!-- featured -->
  <div class="container-Featured">
    <h1>Featured</h1>
    <div class="blog">

      <div class="card">
        <router-link to="" class="blog-container">

          <div class="blog-header flex">
            <div class="profile-pic">
              <img src="../../assets/hero.png" alt="">
            </div>
            <div class="blog-author--no-cover">
              <h3>Russ Beye</h3>
            </div>
          </div>

          <div class="blog-body">
            <div class="blog-title">
              <h2><a href="#">This Post Has No Cover Image</a></h2>
            </div>
            <div class="blog-summary">
              <p>Here is an example of a post without a cover image. You don't always have to have a cover image. In
                fact.
              </p>
            </div>
            <div class="footer flex">
              <div class="like">
                <span class="material-symbols-outlined">
                  thumb_up
                </span>
                <span>20</span>
              </div>
              <div class="comment">
                <span class="material-symbols-outlined">
                  maps_ugc
                </span>
                <span>3</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="card">
        <router-link to="" class="blog-container">

          <div class="blog-header flex">
            <div class="profile-pic">
              <img src="../../assets/hero.png" alt="">
            </div>
            <div class="blog-author--no-cover">
              <h3>Russ Beye</h3>
            </div>
          </div>

          <div class="blog-body">
            <div class="blog-title">
              <h2><a href="#">This Post Has No Cover Image</a></h2>
            </div>
            <div class="blog-summary">
              <p>Here is an example of a post without a cover image. You don't always have to have a cover image. In
                fact.
              </p>
            </div>
            <div class="footer flex">
              <div class="like">
                <span class="material-symbols-outlined">
                  thumb_up
                </span>
                <span>20</span>
              </div>
              <div class="comment">
                <span class="material-symbols-outlined">
                  maps_ugc
                </span>
                <span>3</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="card">
        <router-link to="" class="blog-container">

          <div class="blog-header flex">
            <div class="profile-pic">
              <img src="../../assets/hero.png" alt="">
            </div>
            <div class="blog-author--no-cover">
              <h3>Russ Beye</h3>
            </div>
          </div>

          <div class="blog-body">
            <div class="blog-title">
              <h2><a href="#">This Post Has No Cover Image</a></h2>
            </div>
            <div class="blog-summary">
              <p>Here is an example of a post without a cover image. You don't always have to have a cover image. In
                fact.
              </p>
            </div>
            <div class="footer flex">
              <div class="like">
                <span class="material-symbols-outlined">
                  thumb_up
                </span>
                <span>20</span>
              </div>
              <div class="comment">
                <span class="material-symbols-outlined">
                  maps_ugc
                </span>
                <span>3</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <div class="pumpkin"><img
          src="../../assets/kisspng-javascript-web-development-logo-script-clipart-5adc4c1ac4eb87.9915338015243868428066.png"
          alt="">
      </div>
    </div>

  </div>
  
  
  
  
  <div class="main">
    <div class="story">

      <div class="container">
        <div class="left">
          <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  All story</h2>
                <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test
                  assumptions and connect with the needs of your audience early and often.</p>
              </div>
              <div class="grid gap-8 lg:grid-cols-2">
                <article
                  class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex justify-between items-center mb-5 text-gray-500">
                    <span
                      class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">

                      Tutorial
                    </span>
                    <span class="text-sm">14 days ago</span>
                  </div>
                  <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">How to
                      quickly deploy a static website</a></h2>
                  <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to
                    bootstrap
                    lots
                    of websites and are becoming the basis for a variety of tools that even influence both web
                    designers
                    and
                    developers influence both web designers and developers.</p>
                  <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-4">
                      <img class="w-7 h-7 rounded-full" src="../../assets/hero.png" alt="Jese Leos avatar" />
                      <span class="font-medium dark:text-white">
                        Jese Leos
                      </span>
                    </div>
                    <a href="#"
                      class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                      Read more
                    </a>
                  </div>
                </article>
                <article
                  class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex justify-between items-center mb-5 text-gray-500">
                    <span
                      class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <i class="fa-brands fa-vuejs"></i>
                      Vuejs
                    </span>
                    <span class="text-sm">14 days ago</span>
                  </div>
                  <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Our
                      first
                      project with vue</a></h2>
                  <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to
                    bootstrap
                    lots
                    of websites and are becoming the basis for a variety of tools that even influence both web
                    designers
                    and
                    developers influence both web designers and developers.</p>
                  <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-4">
                      <img class="w-7 h-7 rounded-full" src="../../assets/hero.png" alt="Jese Leos avatar" />
                      <span class="font-medium dark:text-white">
                        Bonnie Green
                      </span>
                    </div>
                    <a href="#"
                      class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                      Read more
                      <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
        <div class="insect"><img
            src="../../assets/transparent-visual-studio-icon-microsoft-icon-5fc35da9b904d2.6104210716066390177578.png"
            alt=""></div>
        <div class="right">
          <div class="relative">

            <div class="topics animate__animated animate__flipInY">

              <h1 class="h2">Topics</h1>

              <a href="#" class="topic-btn">
                <span class="material-symbols-outlined">
                  database
                </span>

                <p>Database</p>
              </a>

              <a href="#" class="topic-btn">
                <span class="material-symbols-outlined">
                  laptop_mac
                </span>
                <p>Front-end development</p>
              </a>

              <a href="#" class="topic-btn">
                <span class="material-symbols-outlined">
                  rocket_launch
                </span>
                <p>Web Performance</p>
              </a>

            </div>
            <h1>Tags</h1>
            <div class="wrapper animate__animated animate__flipInY">

              <button class="hashtag"> <a href="#">#mongodb</a> </button>
              <button class="hashtag"> <a href="#">#nodejs</a></button>
              <button class="hashtag"> <a href="#">#vuejs</a></button>
              <button class="hashtag"> <a href="#">#mobility</a></button>
              <button class="hashtag"> <a href="#">#javascript</a></button>
              <button class="hashtag"> <a href="#">#mysql</a></button>
              <button class="hashtag"> <a href="#">#htlm</a></button>
              <button class="hashtag"> <a href="#">#css</a></button>

            </div>

            <div class="contact">

              <div class="wrapper  animate__animated animate__flipInY">

                <p>
                  Do you want to learn more about how We can help your company overcome problems? Let us have a
                  conversation.
                </p>

                <div class="social-container">
                  <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                  <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>

              </div>

            </div>

            <!-- footer in right  -->
            <div class="wrap">
              <span> <a href="#">Help</a></span>
              <span> <a href="#">Status</a></span>
              <span> <a href="#">About</a></span>
              <span> <a href="#">Blog</a></span>
              <span> <a href="#">Carreers</a></span>
              <span> <a href="#">Privacy</a></span>
            </div>



          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <p class="copyright">
      &copy; Copyright 2022 <a href="#">Swdb</a>
    </p>
  </footer>


</template>

<script>
export default {
  data() {
    return {
      // date: Date.now(),
      view: {
        topOfPage: true
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true
      }
    },

  },
  mounted() {
    // this.date= new Date(date.now());
  },
};
</script>

<style scoped>
.footer{
  justify-content: space-between;
  padding: 10px;
}
.footer .comment,
.footer .like{
  align-items: center;
  display: flex;
  cursor: pointer;
}
.footer span{
  color: #333;
  padding: 2px;
}
</style>