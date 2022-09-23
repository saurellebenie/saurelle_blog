<template>

  <div class="nav">
    <nav class="navbar">
      <!-- LOGO -->
      <div class="logo"> Swdb <img src="../../assets/logo.png" alt=""></div>
      <!-- NAVIGATION MENU -->
      <ul class="nav-links">
        <!-- USING CHECKBOX HACK -->
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776;</label>
        <!-- NAVIGATION MENUS -->
        <div class="menu">
          <li><a href="/Signup">Storie</a></li>
          <li><a class="signup" href="/Signup">Post</a></li>
          
          <li><a href="">Writte</a></li>
          <li><a href="/Login">Sign up</a></li>
          <li><button class="header-btn"><a href="#">Get started</a></button></li>
        </div>
      </ul>
    </nav>
  </div>
  <div class="hero">
    <div class="hero-blog">
      <h1>Web-dev</h1>
      <p>Share web development skils</p>
      <div><button class="hero-btn">Start reading</button></div>
    </div>
  </div>

  <div class="container-Featured">
    <h1>Featured</h1>
    <div class="blog">

      <div class="card">
        <div class="number">01</div>
        <div class="post-comment">
          <div class="profile-pic"><img src="../../assets/hero.png" alt="">name of the person</div>
          <p class="title"> <a href="">Client-Side vs. Server-Side Routing</a> </p>
          <div class="date">{{ date }}</div>
        </div>
      </div>
      <div class="card">
        <div class="number">02</div>
        <div class="post-comment">
          <div class="profile-pic"><img src="../../assets/hero.png" alt="">name of the person</div>
          <p class="title"> <a href="">Client-Side vs. Server-Side Routing</a> </p>
          <div class="date">{{ date }}</div>
        </div>
      </div>
      <div class="card">
        <div class="number">03</div>
        <div class="post-comment">
          <div class="profile-pic"><img src="../../assets/hero.png" alt="">name of the person</div>
          <p class="title"> <a href="">Client-Side vs. Server-Side Routing</a> </p>
          <div class="date">{{ date }}</div>
        </div>
      </div>
      <div class="card">
        <div class="number">04</div>
        <div class="post-comment">
          <div class="profile-pic"><img src="../../assets/hero.png" alt="">name of the person</div>
          <p class="title"> <a href="">Client-Side vs. Server-Side Routing</a> </p>
          <div class="date">{{ date }}</div>
        </div>
      </div>
      <div class="card">
        <div class="number">05</div>
        <div class="post-comment">
          <div class="profile-pic"><img src="../../assets/hero.png" alt="">name of the person</div>
          <p class="title"> <a href="">Client-Side vs. Server-Side Routing</a> </p>
          <div class="date">{{ date }}</div>
        </div>
      </div>
      <div class="card">
        <div class="number">06</div>
        <div class="post-comment">
          <div class="profile-pic"><img src="../../assets/hero.png" alt="">name of the person</div>
          <p class="title"> <a href="">Client-Side vs. Server-Side Routing</a> </p>
          <div class="date">{{ date }}</div>
        </div>
      </div>
      <div class="pumpkin"><img
          src="../../assets/kisspng-javascript-web-development-logo-script-clipart-5adc4c1ac4eb87.9915338015243868428066.png"
          alt=""></div>

    </div>
  </div>
  <div class="main">
    <div class="story">
      <h1>All story</h1>
      <div class="container">
        <div class="left">
          <div class="card animate__animated animate__flipInX">
            <div class="post-comment">
              <div class="profile-pic"><img src="../../assets/hero.png" alt="">name of the person</div>
              <h4 class="title"> <a href="">Client-Side vs. Server-Side Routing</a></h4>
              <p>Routing on the server side means the server sending a response based</p>
              <div class="date">{{ date }} <a href="#"><span class="material-symbols-outlined">
                    bookmark
                  </span></a> </div>
            </div>
            <div><img class="comment_pic"
                src="../../assets/kisspng-vue-js-javascript-framework-front-and-back-ends-gi-technical-5ac9109ea75f87.5300044715231264306856.png"
                alt="">
            </div>
          </div>
          <div class="card animate__animated animate__flipInX">
            <div class="post-comment">
              <div class="profile-pic"><img src="../../assets/hero.png" alt="">name of the person</div>
              <h4 class="title"> <a href="">Client-Side vs. Server-Side Routing</a></h4>
              <p>Routing on the server side means the server sending a response based</p>
              <div class="date">{{ date }} <a href="#"><span class="material-symbols-outlined">
                    bookmark
                  </span></a> </div>
            </div>
            <div><img class="comment_pic"
                src="../../assets/kisspng-vue-js-javascript-framework-front-and-back-ends-gi-technical-5ac9109ea75f87.5300044715231264306856.png"
                alt="">
            </div>
          </div>
          <div class="card animate__animated animate__flipInX">
            <div class="post-comment">
              <div class="profile-pic"><img src="../../assets/hero.png" alt="">name of the person</div>
              <h4 class="title"> <a href="">Client-Side vs. Server-Side Routing</a></h4>
              <p>Routing on the server side means the server sending a response based</p>
              <div class="date">{{ date }} <a href="#"><span class="material-symbols-outlined">
                    bookmark
                  </span></a> </div>
            </div>
            <div><img class="comment_pic"
                src="../../assets/kisspng-vue-js-javascript-framework-front-and-back-ends-gi-technical-5ac9109ea75f87.5300044715231264306856.png"
                alt="">
            </div>
          </div>
          <div class="card animate__animated animate__flipInX">
            <div class="post-comment">
              <div class="profile-pic"><img src="../../assets/hero.png" alt="">name of the person</div>
              <h4 class="title"> <a href="">Client-Side vs. Server-Side Routing</a></h4>
              <p>Routing on the server side means the server sending a response based</p>
              <div class="date">{{ date }} <a href="#"><span class="material-symbols-outlined">
                    bookmark
                  </span></a> </div>
            </div>
            <div><img class="comment_pic"
                src="../../assets/kisspng-vue-js-javascript-framework-front-and-back-ends-gi-technical-5ac9109ea75f87.5300044715231264306856.png"
                alt="">
            </div>
          </div>
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
                  Do you want to learn more about how I can help your company overcome problems? Let us have a
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
      date: Date.now(),
    }
  }
};
</script>