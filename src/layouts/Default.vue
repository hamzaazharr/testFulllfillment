<template>
   <v-app>
     <div>

      <div id="myNav" style="overflow: hidden!important" class="overlay">
        <!-- Button to close the overlay navigation -->
        <a href="javascript:void(0)"  class="closebtn" style="marginTop:50px" @click="closeNav()"
          >&times;</a
        >
  
        <!-- Overlay content -->
        <div  class="overlay-content">
          <div style="overflow: hidden!important;padding:0px" class="contained">
            <div  class="login-sec fontfamily">
              <!-- <h2 style="color:#3a5768!important;padding:0px!important" class="fontfamily ">Welcome to Fullfillment Company</h2> -->
            
              <form @submit.prevent="login()" v-show="loginVisibility"  class="login-signup-form">
                <h4 style="color:#3a5768!important">Sign In</h4>

                <a @click="gotoSignUp()" style="color:blue!important;font-size: medium;"  class="fontfamily mt-4 mb-4">Not registered yet?
              </a>
                <div class="field-wrapper">
                  <input
                    type="email"
                    class="form-field mt-6  reg-log-field"
                    v-model="email"
                    placeholder="Email"
                    style="width:400px!important;margin:auto"
                   required="'required'"
                              
                  />
                  <div class="mt-4"></div>
                  <input
                  type="password"
                  class="form-field mt-6  reg-log-field"
                  placeholder="Password"
                 required="'required'"
                 v-model="password"
                  style="width:400px;margin:auto"          
                />
                </div>
                <div id="recaptcha-container" class="mt-5 mb-4" style="background-color:#1b1a1a;width:300px;margin:auto;">
              </div>
                <button type="submit"  class="login-btn mt-6 mb-4 btn btn-lg btn-dark">
                  Login
                </button>
              </form>
              <form v-show="signUpVisibility"  @submit.prevent="signup()" class="login-signup-form">
                 <h4 style="color:#3a5768!important">Sign Up</h4>
                <a @click="gotoLogin()" style="color:blue!important;font-size: medium;"  class="fontfamily mt-4 mb-4">Already registered!
              </a>
                <div class="field-wrapper">
                  <input
                    type="text"
                    class="form-field mt-6  reg-log-field"
                    id="userNameSignUp"
                    placeholder="Username"
                    style="width:400px!important;margin:auto"
                   required="'required'"
                   v-model="usernameSignUp"           
                  />
                  <div class="mt-4"></div>

                  <input
                  type="email"
                  id="emailSignUp"
                  class="form-field mt-6  reg-log-field"
                  v-model="emailSignUp"
                  placeholder="Email"
                  style="width:400px!important;margin:auto!important"
                 required="'required'"
                            
                />
                  <div class="mt-4"></div>

                  <input
                  type="password"
                  class="form-field mt-6  reg-log-field"
                  placeholder="Password"
                 required="'required'"
                  style="width:400px;margin:auto"          
                v-model="passwordSignUp"
                  />
                </div>
                <div id="recaptcha-container" class="mt-5 mb-4" style="background-color:#1b1a1a;width:300px;margin:auto;">
              </div>
                <button type="submit"  class="login-btn mt-6 mb-4 btn btn-lg btn-dark">
                  Create your account
                </button>
              </form>
              <div class="styled-separator"><span>or</span></div>
              <div  style="overflow: hidden!important" class="login-content mt-6">
                <span
                style="color:#3a5768!important" 
                  >Here you can see
                  <a style="color:blue!important" href="/terms-conditions" class="color-primary login-content"
                    >Terms &amp; Conditions</a
                  ></span
                ><br /><span
                style="color:#3a5768!important" 
                  >Visit our
                  <a style="color:blue!important" href="/privacy-policy" class="color-primary login-content"
                    >Privacy Policy</a
                  ></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      		<div class="container-fluid">
            
			<nav class="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
		    <div class="container">
		    	<a class="navbar-brand" href="/">Fullfillment</a>
		      <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
		        <span class="fa fa-bars"></span> Menu
		      </button> -->
          <b-navbar-toggle target="nav-collapse">Menu</b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class=" fontfamil text pdleft">
		      <!-- <div class="collapse navbar-collapse" id="ftco-nav"> -->
		        <ul class="navbar-nav  mr-md-3">
		        	<li class="nav-item "><a href="/" class="nav-link">Home</a></li>
		        	<li class="nav-item"><a href="/about" class="nav-link">About Us</a></li>
		        	<li class="nav-item"><a href="#" class="nav-link">Shop</a></li>
		        	<li class="nav-item"><a href="#" class="nav-link">Products</a></li>
		          <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
		          <li @click="logout" v-if="userLoggedIn" style="cursor:pointer" class="dropdown loginBtn nav-item d-md-flex align-items-center">
                Logout
                <v-icon class="float-right" color="#228B22" >mdi-logout</v-icon>
              </li>
              <li @click="openNav" style="cursor:pointer" class="dropdown nav-item d-md-flex loginBtn align-items-center" v-else>
                Login
                <v-icon   class="float-right" color="#228B22" >mdi-login</v-icon>

              </li>
		        </ul>
            </b-navbar-nav>
            </b-collapse>
		      </div>
		    <!-- </div> -->
		  </nav>
    <!-- END nav -->
  
  </div>
     </div>
    <slot/>
   
    </v-app>
</template>
<script>
import firebase from 'firebase/compat/app'
import  'firebase/compat/firestore'
import { auth } from '~/main.js';


export default {
  created(){
    auth.onAuthStateChanged((user) => {
  if (user) {
    this.userLoggedIn=true;
    console.log('User is logged in:', user);
    // You can perform actions for a logged-in user here
  } else {
    console.log('No user is logged in');
    // You can perform actions for a user who is not logged in here
  }
});
  },
  data(){
return{
  loginVisibility:true,
  signUpVisibility:false,emailSignUp:null,usernameSignUp:null,passwordSignUp:null,
  email:null,password:null,userLoggedIn:false
}
  },
methods:{
  authToast(message) {
          this.$bvToast.toast(message, {
            title: 'FullFillment',
            variant: "primary",
            solid: true
          })
        },
  logout(){
    auth.signOut()
        .then(() => {
          this.userLoggedIn=false;
          this.authToast('User logged out successfully!');
          console.log('User logged out successfully!');
          // You can perform additional actions after logout if needed
        })
        .catch((error) => {
          console.error('Error logging out:', error.message);
        });
  },
  login(){
    auth.signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.closeNav();
          this.authToast('User logged in successfully!');
          // alert("User logged in successfully!");
          console.log('User logged in successfully!');
        this.email="";this.password="";
        })
        .catch((error) => {
          this.authToast('invalid Email/Password.');       
          console.error('Error logging in:', error.message);
        });
  },
  signup(){
    auth.createUserWithEmailAndPassword(this.emailSignUp, this.passwordSignUp)
        .then(() => {
          firebase.firestore().collection('users').add({
     username: this.usernameSignUp,
        email: this.emailSignUp        
        });
          console.log('User registered successfully!');
          this.authToast('User registered successfully!');
          this.signUpVisibility=false;this.loginVisibility=true
          this.usernameSignUp="";this.emailSignUp="";this.passwordSignUp="";
        })
        .catch((error) => {
          this.authToast('Something went wrong registering user!');
          console.error('Error registering user:', error.message);
        });
  },
 gotoLogin(){
  this.signUpVisibility=false;this.loginVisibility=true
 },
  gotoSignUp(){
    this.signUpVisibility=true;this.loginVisibility=false
  },
  openNav() {
    this.$root.$emit('bv::toggle::collapse', 'nav-collapse'); 
      document.getElementById("myNav").style.width = "100%";
    },
    closeNav() {
      document.getElementById("myNav").style.width = "0%";
    },
}  
}
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap');
.login-content{
  font-size: 16px!important;
}

  .btnmain {

    background-color: #3a5768 ;
    color: rgb(8, 8, 8);
    border-radius: 5px;
    text-align: center;
    position: fixed;
    bottom:50%;
    right: 0px;
  }
.login-btn{
    width: 390px!important;
    background-color: black;
    border-radius: 20px!important;
    margin:auto;
  }

.form-field {
    display: block;
    width: 100%;
    height: 45px;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 10px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    background: #f4f4f4;
    font-size: .8rem;
    border: none;
}
.form-field.reg-log-field {
    height: 60px;
    background: #f9f8f8;
    border-radius: 100px;
    text-align: center;
    font-size: 20px;
    width: 400px!important;
    margin: auto!important;
}
/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: white; /* Black fallback color */
  background-color: white; /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
   /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}

/* The navigation links inside the overlay */
.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover,
.overlay a:focus {
  color: black;
text-decoration: none;
}

/* Position the close button (top right corner) */
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}
.closebtn:hover{
color: blue!important;
}
@media (max-width: 768px) {

.form-field{
    width: 390px!important;
  
    width: 100% !important;;
  }
 .logimg {
    margin-left: 10px !important;
  }
  .login-btn{
    width: 390px!important;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 20px!important;
    background-color: black;
  }
}
@media (max-width: 767px) {
  ul.navbar-nav {
    display: flex;
    flex-direction: column;
    align-items: center; 
  }

  ul.navbar-nav li {
    margin: 10px 0;
  }
  .loginBtn{
    color:#818181
  }
  
}
@media (min-width:993px){
  .markdetail{
  margin-left: 100px;
}
}
@media (max-width: 900px) {
.logimg {
    margin-left: 30px !important;
  }
}
@media (max-width: 440px) {
  .logimg {
    margin-left: 2px !important;
  }
}
@media (max-width: 399px) {
  .login-btn{
    width: 290px!important;
  }
}
/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}


.cardChip{
  width:200px;height:100px;background-Color:white;margin-Right:15px;
  font-size: 17px;
  font-weight: 500;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  cursor: pointer;
  
  /* border-start-end-radius: 10px; */
  /* border-end-start-radius: 10px; */
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
  
}
.fontfamil{
  font-family: Poppins,sans-serif !important;
  font-weight: 500 !important;
  font-size: 16px !important;
}
/* .fontfamil{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

} */
@media (max-width: 592px) {
  /* .autocomp{
      width: 140px !important;
  } */
  .btnside {
    padding-left: 0px;
  }
}
@media (max-width: 485px) {
  .autocomp {
    width: 320px !important;
  }
  .btnside {
    padding-left: 0px;
    margin-right: 15px;
  }
}
@media (max-width: 392px) {
  .btnside {
    padding-left: 0px;
  }
}
@media (max-width: 424px) {
  .autocomp {
    width: 270px !important;
  }
}
@media (max-width: 394px) {
  .autocomp {
    width: 220px !important;
  }
  .btnside {
    padding-left: 0px;
    margin-right: 15px;
  }
}
@media (max-width: 768px) {
  .imgmain > div {
    bottom: 78% !important;
  }
  .tfont {
    font-size: 27px;
  }
  .btnside {
    margin-top: -155px;
  }
}
.list {
  min-height: 160px;
  height: 160px;
  line-height: 110px;
  text-align: center;
  background-color: #ffff;
  margin-right: 15px;
}
.item {
  width: 100px;
}
.wrapper {
  max-height: 120px;
  border: 1px solid #ffff;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
}
.wrapper ::-webkit-scrollbar {
  width: 0;
  display: none;
}
.wrapper .item {
  min-height: 110px;
  height: 110px;
  line-height: 110px;
  text-align: center;
  background-color: #ffff;
  margin-right: 7px;
}
.theme--light.v-application {
  background-color: transparent;
}

.home-links a {
  margin-right: 1rem;
}
.nav_bar {
  box-shadow: none;
  outline: none !important;
  border: none;
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #4c5162;
  /* overflow-y: hidden; */
}
.v-menu__content {
  overflow-y: hidden;
}
.imgmain > img {
  position: fixed;
  right: 0px;
  bottom: 172px;
  height: 130px;
  width: 152px;
  float: right;
  /* border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.377); */
}
.imgmain > div {
  position: fixed;
  right: 7%;
  bottom: 93%;

  height: 30px;
  width: 95px;
  float: right;
  font-weight: bold;
  padding-top: 5px;
}
/* .imglap > img {
  right: 0px;
  bottom: 135px;
  height: 230px;
  width: 162px;
  float: right;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.377);
} */
/* .imgmain:hover {
    background-image: url(img/laptop-short.gif);
    background-repeat: no-repeat;
    background-size: 200px;
    background-position: 0px;
    background-position-y: 0px;
    position: fixed;
    right: 180px;
    bottom: 60px;
    height: 230px;
    width: 192px;
    float: right;
    border-radius: 20px;
    background-color: rgba(197, 195, 195, 0.377);
  } */
.yellow-btn {
  background-color: #dec79b;
  color: rgb(8, 8, 8);
  border-radius: 5px;
  text-align: center;
}
</style>
