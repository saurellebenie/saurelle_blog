<template>

    <div class="container" id="container">

        <div class="form-container sign-in-container">
            <form action="#">
                <!-- LOGO -->
                <div class="logo"> Swdb <img src="../../assets/logo.png" alt=""></div>
                <h1>Sign in</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" v-model="username" placeholder="Name" required />
                <input type="email" v-model="email" placeholder="Email" required />
                <input type="password" v-model="password" placeholder="Password" required />
                <button @click="handleSubmit()">Sign In</button>
            </form>
        </div>

    </div>


</template>

<script>
import axios from 'axios';
export default {
    setup() {

    },


    data() {
        return {
            username: '',
            email: '',
            password: '',

        }
    },
    methods: {
        handleSubmit() {
            let username = this.username;
            let email = this.email;
            let password = this.password;


            console.log(username, email, password);
            localStorage.setItem('username', this.username)
            //Validate password field length
            this.passwordError = this.password.length > 6 ?
                '' : 'Password should be more than 6 characters long!';

            // const serverEndpoint = "https://kingscorp.xyz/api/v1/app/appRegister";
            // const payload = {
            //     username: username,
            //     email: email,
            //     password: password,
            //     role: role,
            //     terms: terms
            // };
            // const response = axios.post(serverEndpoint, payload);
            // localStorage.setItem("user", JSON.stringify(response.data.data))

            // console.log(response);
            this.$router.push('/Login')
            //   import axios from "axios";
            // export default {
            //   name: "Signup",
            //   computed: {},
            //   methods: {
            //     async signIn() {
            //       let username = this.username;
            //       let email = this.email;
            //       let password = this.password;
            //       let firstName = this.firstName;
            //       let lastName = this.lastName;
            //       console.log(username, email, password, firstName, lastName);

            //     const serverEndpoint = "https://kingscorp.xyz/api/v1/app/appRegister";
            //     const payload = {
            //       username:username,
            //       email:email,
            //       password:password,
            //       firstName:firstName,
            //       lastName:lastName
            //     };
            //     const response =  await axios.post(serverEndpoint,payload);
            //     localStorage.setItem("user", JSON.stringify(response.data.data))

            //     this.$router.push('/home')

            //     }
            //   },
            //   data() {
            //     return {
            //       username: "",
            //       email: "",
            //       password: "",
            //       firstName: "",
            //       lastName: "",
            //     };
            //   },
            // };
        }
    }
}


</script>

<style scoped>
    p,h1{
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
}



span {
    font-size: 12px;
}

a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
}

button {
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

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: none;
}

button.ghost {
    background-color: transparent;
    border-color: #FFFFFF;
}

form {
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
    margin-top: 2rem;
}

input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
    outline: none;
}

.container {
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    width: 500px;
    height: 500px;
    margin: 0 auto;
    margin-top: 2rem;
}

.form-container {
    position: absolute;
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


@media (max-width: 768px) {
    .container{
        width: 100%;
    }
    form{
        background-color: none;
        box-shadow: none;
    }
}
</style>