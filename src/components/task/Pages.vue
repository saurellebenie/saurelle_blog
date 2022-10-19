<template>
    <div class="page-container">
        <h1>Login Page</h1>
        <form>
            <!--   con = Container  for items in the form-->
            <div class="con">

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
                    </div>

                    <!--        buttons -->
                    <!--      button LogIn -->
                    <button @click="HandleLogin()" class="log-in"> Log In </button>
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

        <h1>SingUp Page</h1>

        
        <div class="form-container sign-in-container">
            <form action="#">
                <input type="text" v-model="username" placeholder="Name" required />
                <input type="email" v-model="email" placeholder="Email" required />
                <input type="password" v-model="password" placeholder="Password" required />
                <button @click="handleSubmit()">Sign In</button>
            </form>
        </div>
    </div>
</template>
<script>
import Login from '../auth/Login.vue';
export default {
    components: { Login }
}
</script>
<style scoped>
.page-container {
    padding: 10px;
    margin: 0 auto;
}

form .con {
    widows: 90%;
    margin: 0 auto;
}


p {
    text-align: center;
}

/* //////////////////////////////////////////// */
/* //////////////////////////////////////////// */
.field-set {
    align-items: center;
}

.input_form {
    display: flex;
    padding-bottom: 5px;
    width: 100%;
    align-items: center;
    margin: 0 auto;
}

.input-item {
    background-color: #eee;
    color: #333;
    padding: 15px 9px 19px 0px;
    border-radius: 5px 0px 0px 5px;

}




/* inputs form  */
input[class="form-input"] {
    width: 80%;
    height: 50px;
    background-color: rgb(199, 197, 197);
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
    width: 80%;
    background-color: rgb(199, 197, 197);
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

    width: 80%;
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
    width: 35%;
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

/* sign up */

p,h1{
    font-size: 20px;
    font-weight: bold;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
   text-align: center;
}



.form-container span {
    font-size: 12px;
}

.form-container a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
}

.form-container button {
    border-radius: 20px;
    border: 1px solid #FF4B2B;
    background-color: #FF4B2B;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    margin: 1rem;
}

.form-container button:active {
    transform: scale(0.95);
}

.form-container button:focus {
    outline: none;
}

.form-container form {
    /* background-color: #FFFFFF; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 90%;
    text-align: center;
    margin-top: 2rem;
}

 .form-container input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
    outline: none;
}

.form-container {
    top: 0;
    height: 90%;
    transition: all 0.6s ease-in-out;
    margin: 0 auto;
}
.form-container .logo{
    display: flex;
    align-items: center;
    margin: 2rem;
}
.form-container .logo img{
    widows: 50px;
}
.sign-in-container {
    left: 0;
    width: 100%;

}

</style>