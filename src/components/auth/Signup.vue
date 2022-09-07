<template>

    <div class="signup">
        <!-- LOGO -->
        <div class="logo"> Swdb <img src="../assets/logo.png" alt=""></div>
        <form>
            <label>username :</label>
            <input type="username" v-model="username" required>

            <label>Email :</label>
            <input type="email" v-model="email" required>

            <label>Password :</label>
            <input type="password" v-model="password" required>
            <div v-if="passwordError" class="error">{{ passwordError }} </div>

            <label>Role :</label>
            <select v-model="role">
                <option value="designer">Frontend Developer</option>
                <option value="developer">Backend Developer</option>
            </select>

            <div>
                <input type="checkbox" v-model="terms" required >
                <label>Please accept terms and conditions</label>
            </div>
            <div class="btton">
                <button @click="handleSubmit()" class="submit" type="submit">Sign up here</button>
            </div>
        </form>

    </div>

</template>

<script>
import axios from 'axios';
export default {

    data() {
        return {
            username: '',
            email: '',
            password: '',
            role: 'fulstack',
            terms: false,
            passwordError: ''
        }
    },
    methods: {

        handleSubmit() {
            let username = this.username;
            let email = this.email;
            let password = this.password;
            let role = this.role;
            let terms = this.terms;

            console.log(email, password, role, terms);
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
            this.$router.push('/Dashboard')
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
.signup .logo {
    align-items: center;
    width: 10%;
    margin: 0 auto;
    font-size: 2rem;
    font-weight: var(--font-bold-400);
    color: hsl(218, 23%, 23%);
    display: flex;
    margin-top: 2rem;
}

form {
    max-width: 600px;
    margin: 30px auto;
    background: #fff;
    text-align: left;
    padding: 20px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    text-transform: uppercase;
}

input,
select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: bordre-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0;
    position: relative;
    top: 2px;
}

.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    cursor: pointer;
    background: #eee;
}

.submit {
    background: rgb(7, 24, 7);
    border: 0;
    padding: 10px 20px;
    color: white;
    border-radius: 20px;
}

.submit {
    text-align: center;
}

.error {
    color: #ff0000;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>
   