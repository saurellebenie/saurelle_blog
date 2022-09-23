<template>
    
    <div class="overlay">
        <!-- LOGN IN FORM by Omar Dsoky -->
        <form>
            <!--   con = Container  for items in the form-->
            <div class="con">
                <!--     Start  header Content  -->
                <header class="head-form">
                    <h2>Log In</h2>
                    <!--     A welcome message or an explanation of the login form -->
                    <p>login here using your username and password</p>
                </header>
                <!--     End  header Content  -->
                <br>
                <div class="field-set">

                    <div class="input_form">
                        <!--   user name -->
                        <!--   user name Input-->
                        <input class="form-input" id="txt-input" type="text" placeholder="@UserName" required>
                    </div>

                    <!--   Password -->
                    <div class="input_form">

                        <!--   Password Input-->
                        <input class="form-input" type="password" placeholder="Password" id="pwd" name="password"
                            required>

                        <!--      Show/hide password  -->
                        <span>
                            <i class="fa fa-eye" aria-hidden="true" type="button" id="eye"></i>
                        </span>
                    </div>

                    <!--        buttons -->
                    <!--      button LogIn -->
                    <button @click="HandleLogin()" class="log-in"> Log In </button>
                    <p>OR</p>
                </div>

                <!--   other buttons -->
                <div class="other">
                    <!--      Forgot Password button-->
                    <button class="btn submits frgt-pass">Forgot Password</button>
                    <!--     Sign Up button -->
                    <button class="btn submits sign-up" @click="HandleSignup()">Sign Up
                        <!--         Sign Up font icon -->
                        <i class="fa fa-user-plus" aria-hidden="true"></i>
                    </button>
                    <!--      End Other the Division -->
                </div>

                <!--   End Conrainer  -->
            </div>

            <!-- End Form -->
        </form>
    </div>

</template>

<script>
export default {
    setup() {
        
    },
    methods: {
        HandleSignup(){
            this.$router.push('/Signup')
        },
        HandleLogin(){
            this.$router.push('Dashboard')
        }
    },
}
</script>
<style scoped>
h2 {
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 1rem;
}
p{
    text-align: center;
}
form {
    width: 450px;
    min-height: 500px;
    height: auto;
    border-radius: 5px;
    margin: 2% auto;
    box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
    padding: 2%;
    background-color: #fff;
}

/* form Container */
form .con {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0 auto;
}

/* the header form form */
header {
    margin: 2% auto 10% auto;
    text-align: center;
}

/* Login title form form */
header h2 {
    font-size: 250%;
    font-family: 'Playfair Display', serif;
    color: #3e403f;
}

/*  A welcome message or an explanation of the login form */
header p {
    letter-spacing: 0.05em;
}



/* //////////////////////////////////////////// */
/* //////////////////////////////////////////// */
.field-set {
    align-items: center;
}

.input_form {
    display: flex;
    padding-bottom: 5px;
    width: 280px;
    align-items: center;
}

.input-item {
    background-color: #eee;
    color: #333;
    padding: 15px 9px 19px 0px;
    border-radius: 5px 0px 0px 5px;

}



/* Show/hide password Font Icon */
#eye {
    background-color: #eee;
    color: #333;

    margin: 5.9px 0 0 0;
    margin-left: -20px;
    padding: 15px 9px 19px 0px;
    border-radius: 0px 5px 5px 0px;

    float: right;
    position: relative;
    right: 1%;
    top: -.2%;
    z-index: 5;

    cursor: pointer;
}

/* inputs form  */
input[class="form-input"] {
    width: 280px;
    height: 50px;
    background-color: #eee;
    margin-top: 2%;
    padding: 15px;

    font-size: 16px;
    font-family: 'Abel', sans-serif;
    color: #5E6472;

    outline: none;
    border: none;

    border-radius: 0px 5px 5px 0px;


}

input[id="txt-input"] {
    width: 280px;
    background-color: #eee;
}

/* focus  */
input:focus {
    transform: translateX(-1px);
    border-radius: 5px;
}

/* //////////////////////////////////////////// */
/* //////////////////////////////////////////// */

/* input[type="text"] {min-width: 250px;} */
/* buttons  */
button {
    display: inline-block;
    color: #252537;

    width: 280px;
    height: 50px;

    padding: 0 20px;
    background: #fff;
    border-radius: 5px;

    outline: none;
    border: none;

    cursor: pointer;
    text-align: center;
    transition: all 0.2s linear;

    margin: 7% auto;
    letter-spacing: 0.05em;
}

.log-in {
    background: rgba(0, 0, 0, 0.6);
}

/* Submits */
.submits {
    width: 48%;
    display: inline-block;

    margin-left: 2%;
}

/*       Forgot Password button FAF3DD  */
.frgt-pass {
    background: transparent;
}

/*     Sign Up button  */
.sign-up {
    background-color: #FF4B2B;
    color: #fff;
}


/* buttons hover */
button:hover {
    transform: translatey(3px);
    box-shadow: none;
}

/* buttons hover Animation */
button:hover {
    animation: ani9 0.4s ease-in-out infinite alternate;
}

@keyframes ani9 {
    0% {
        transform: translateY(3px);
    }

    100% {
        transform: translateY(5px);
    }
}
</style>
   