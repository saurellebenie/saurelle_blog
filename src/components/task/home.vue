<template>

  <div :class="{ 'onScroll': !view.topOfPage }" class="nav">
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
          <button class="header-btn"><a href="/Login"> Login</a></button>
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
    <h2 class="mb-4 text-3xl lg:text-4xl font-extrabold text-gray-900 :text-white text-center">
      Featured</h2>
    <div class="blog flex-wrap">

      <div class="card">
        <router-link to="" class="blog-container">

          <div class="blog-header flex">
            <div class="profile-pic">
              <img src="../../assets/hero.png" alt="">
            </div>
            <div class="blog-author--no-cover">
              <span class="font-medium :text-white">Russ Beye</span>
            </div>
          </div>

          <div class="blog-body">
            <div class="blog-title">
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 :text-white"><a href="#">This Post Has No
                  Cover Image</a></h2>
            </div>
            <div class="blog-summary">
              <p class="mb-5 font-light text-gray-500 :text-gray-400">Here is an example of a post without a cover
                image. You don't always have to have a cover image. In
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
              <span class="font-medium :text-white">Russ Beye</span>
            </div>
          </div>

          <div class="blog-body">
            <div class="blog-title">
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 :text-white"><a href="#">This Post Has No
                  Cover Image</a></h2>
            </div>
            <div class="blog-summary">
              <p class="mb-5 font-light text-gray-500 :text-gray-400">Here is an example of a post without a cover
                image. You don't always have to have a cover image. In
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
              <span class="font-medium :text-white">Russ Beye</span>
            </div>
          </div>

          <div class="blog-body">
            <div class="blog-title">
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 :text-white"><a href="#">This Post Has No
                  Cover Image</a></h2>
            </div>
            <div class="blog-summary">
              <p class="mb-5 font-light text-gray-500 :text-gray-400">Here is an example of a post without a cover
                image. You don't always have to have a cover image. In
                fact.
              </p>
            </div>
            <div class="footer flex">
              <div class="like">
                <span class="material-symbols-outlined">
                  thumb_up
                </span>
                <span class="">20</span>
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
          <section class=":bg-gray-900">
            <div class=" mx-auto lg:py-10 lg:px-6">
              <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 :text-white">
                  All story</h2>
              </div>
              <div class="grid" v-for="Post in Posts" :key="Post.id">
                <article class="mb-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md :bg-gray-800 :border-gray-700">
                  <div class="flex justify-between items-center mb-5 text-gray-500">

                    <span class="text-sm">{{ Post.createdAt }}</span>
                  </div>
                  <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 :text-white"><a href="#">{{ Post.desc
                  }}</a></h2>
                  <p class="mb-5 font-light text-gray-500 :text-gray-400">{{ Post.desc }}</p>
                  <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-4">
                      <img class="w-7 h-7 rounded-full" src="../../assets/hero.png" alt="Jese Leos avatar" />
                      <span class="font-medium :text-white">
                        {{ Post.author }}
                      </span>
                    </div>
                    <a href="#"
                      class="inline-flex items-center font-medium text-primary-600 :text-primary-500 hover:underline">
                      Read more
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

              <h2 class="mb-4 text-2xl lg:text-2xl tracking-tight font-extrabold text-gray-900 :text-white">
                Topics</h2>

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
            <h2 class="mb-4 text-2xl lg:text-2xl tracking-tight font-extrabold text-gray-900 :text-white">
              Tags</h2>
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
import TutorialDataService from '../../Service/helpers.js'
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
    showTutorials() {
      TutorialDataService.getAllpost()
        .then(response => {
          this.Posts = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.showTutorials();
    },

  },
  mounted() {
    // this.date= new Date(date.now());
    this.showTutorials();
  },
};
</script>

<style scoped>
.footer {
  justify-content: space-between;
  padding: 10px;
}

.footer .comment,
.footer .like {
  align-items: center;
  display: flex;
  cursor: pointer;
}

.footer span {
  color: #333;
  padding: 2px;
}

.container-story{
  justify-content: space-between;
}
</style>