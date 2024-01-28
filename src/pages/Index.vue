<template>
  <Layout>
<div style="overflow-x:hidden" class="container">

  <div style="color:#3a5768" class="row mt-10 ">
          <div class="col-12 scol-sm-12 col-lg-5 col-md-5 ">
         <h1 style="color:#3a5768!important;fontSize:3rem;fontWeight:700" class="mt-5 titleheading">{{homePage.homeTitle}}</h1>
         <!-- <h1 style="color:#3a5768!important;fontSize:3rem;fontWeight:700" class="mt-5"></h1> -->
      
         <!-- <h5 style="fontWeight:400" class="mt-5">Talash is a leading multiple service provider company catering to your 360 needs with quality guaranteed.</h5> 
         -->
         <h5 style="fontWeight:400;;color:#3a5768!important" class="mt-2 mb-4 titleheading">{{homePage.homeDesc }}
        </h5>
         <!-- <h6 style="fontWeight:300" class="mt-5 mb-10">CCCCCCCCCCCCCCCCCCCCCCCC</h6> -->
          </div>
          <div class="col-12 scol-sm-12 col-lg-7 col-md-7 ">
<g-image class="mt-4 about" style="width:100%;" src="https://assets-global.website-files.com/622faf89982b1a82750a4f2b/63172e5b7aecead750bb8af9_order%20fulfillment%20management%20-%20header.png" />  
          </div>
          </div>
          <!-- <div style="height: 180px;"></div> -->
      
    <div style="color:#3a5768" class="row mt-15">
      <h1 class="mt-7 fullHeadingMob ml-5 col-12" style="marign:auto;width:100%;fontWeight:300!important;color:#3a5768!important;">Total Fulfilment takes all the frustration out of
  <br><span class="col-12 fullHeadingMob " style="margin-left:200px;fontWeight:700!important;color:#3a5768!important;"> your order fulfilment operation.</span></h1>
          <h6 class="mt-2 mb-4 " style="width:100%;fontWeight:300" >
          
          </h6>
          </div>
          <div  class="row">
            <div class="  col-lg-1 col-md-1 "></div>
            <div class="card mr-4 col-12 col-md-3 col-lg-3" style="width: 15rem;">
              <img class="card-img-top " style="width:100px;margin:auto" src="https://cdn-icons-png.flaticon.com/512/2250/2250406.png" alt="Card image cap">
              <div class="card-body">
                <p class="card-text text-center" style="textAlign:center;width:100%;fontWeight:700!important;color:#3a5768!important;">{{homePage.homeCardOneTitle}}</p>
                <p class="card-text text-center" style="textAlign:center;width:100%;fontWeight:100!important;color:#3a5768!important;">{{ homePage.homeCardOneDesc }}</p>
              </div>
            </div>
            <div class="card mr-4 col-12 col-md-3 col-lg-3" style="width: 15rem;">
              <img class="card-img-top " style="width:100px;margin:auto" src="https://cdn2.iconfinder.com/data/icons/delivery-42/64/order-processing-ship-parcel-packing-512.png" alt="Card image cap">
              <div class="card-body">
                <p class="card-text text-center" style="textAlign:center;width:100%;fontWeight:700!important;color:#3a5768!important;">{{homePage.homeCardTwoTitle}}</p>
                <p class="card-text text-center" style="textAlign:center;width:100%;fontWeight:100!important;color:#3a5768!important;">{{ homePage.homeCardTwoDesc }}</p>
              </div>
            </div>
            <div class="card mr-4 col-12 col-md-3 col-lg-3" style="width: 15rem;">
              <img class="card-img-top " style="width:100px;margin:auto" src="https://cdn2.iconfinder.com/data/icons/ecommerce-back-office-system-filled-outline/64/ready-to-ship-stock-check-inventory-goods-qc-512.png" alt="Card image cap">
              <div class="card-body">
                <p class="card-text text-center" style="textAlign:center;width:100%;fontWeight:700!important;color:#3a5768!important;">{{ homePage.homeCardThreeTitle }}
           </p>
                <p class="card-text text-center" style="textAlign:center;width:100%;fontWeight:100!important;color:#3a5768!important;">{{ homePage.homeCardThreeDesc }}
                </p>
              </div>
            </div>
            <div class="row mt-16 mb-15  pb-10">
              <div class="col-12 scol-sm-12 col-lg-6 col-md-6">
  <!-- <g-image class="mt-4 " style="width:80%;" src="https://previews.123rf.com/images/dobric/dobric1507/dobric150700019/43616819-collection-des-travailleurs-de-la-construction-architecte-peintre-ma%C3%A7on-%C3%A9lectricien-vitrier.jpg" />    -->
   <!-- <g-image src="https://media.istockphoto.com/photos/carpenter-taking-measurement-picture-id481628382?b=1&k=20&m=481628382&s=612x612&w=0&h=ZDTN6D6e4i8B52pJHfiUdX6Pi7QPc46dCVXhmRV7E1I="/> -->
              <g-image  style="width:95%;height:100%" class="whychoose" src="https://www.frozenfoodeurope.com/wp-content/uploads/2019/03/Logistics-678x381.jpg?x35408" />
                </div>            
                      
                <div style="fontWeight:700!important;color:#3a5768!important;" class=" col-12 scol-sm-12 col-lg-6 col-md-6">
                  <h4 class="mt-5 whychoose" style="fontWeight:700!important;color:#3a5768!important;">{{homePage.homeThirdCompTitle}}</h4>
              <h6 style="fontWeight:400" class="whychoose">{{homePage.homeThirdCompDesc}}</h6>
              <div style="fontWeight:700" class=" mt-6 app_detail"><span><v-icon class="mr-4">mdi-check</v-icon></span>{{ homePage.homeThirdCompChecklistOne }}
              </div>             
              <div style="fontWeight:700" class="mt-6 app_detail"><span><v-icon class="mr-4">mdi-check</v-icon></span>{{ homePage.homeThirdCompChecklistTwo }}</div>
              <div style="fontWeight:700" class="mt-6 app_detail"><span><v-icon class="mr-4">mdi-check</v-icon></span> {{ homePage.homeThirdCompChecklistThree }} </div>
              <div style="fontWeight:700" class="mt-6 app_detail"><span><v-icon class="mr-4">mdi-check</v-icon></span> {{ homePage.homeThirdCompChecklistFour }}
              </div>             
              <div style="fontWeight:700" class="mt-6 mb-12 app_detail"><span><v-icon class="mr-4">mdi-check</v-icon></span> {{ homePage.homeThirdCompChecklistFive }}</div>
 
            </div>
                           <!-- <div style="fontWeight:700" class="mt-6 app_detail"><span><v-icon class="mr-4">mdi-check</v-icon></span> Inventory management tools.                .</div> -->
                
              <!-- <div style="fontWeight:700" class="mt-6"><span><v-icon class="mr-4">mdi-check</v-icon></span>Vetted and background-checked in house staff</div> -->
              <!-- <div style="fontWeight:700" class="mt-6"><span><v-icon class="mr-4">mdi-check</v-icon></span>Connects you to Verified and Trained Technicians.</div> -->
              <!-- <div style="fontWeight:700" class="mt-6 app_detail"><span><v-icon class="mr-4">mdi-check</v-icon></span>High-Tech and Most Advanced Equipment</div> -->
              <!-- <div style="fontWeight:700" class="mt-6 app_detail"><span><v-icon class="mr-4">mdi-check</v-icon></span>Quality Control and Safety.</div> -->
              <!-- <div style="fontWeight:700" class="mt-6 app_detail pb-10"><span><v-icon class="mr-4">mdi-check</v-icon></span>Provides High-quality, Reliability and Safety.</div> -->
              <!-- </div> -->
            </div>
            <div style="color:#3a5768" class="row mt-10 ">
              <div class="col-12 scol-sm-12 col-lg-4 col-md-4 ">
             <h2 style="color:#3a5768!important;fontWeight:700" class="mt-5 titleheading">{{ homePage.homeFourCompTitle }}
            </h2>
          
             <h5 style="fontWeight:400;;color:#3a5768!important" class="mt-2 titleheading">
              {{ homePage.homeFourCompDesc }}
            </h5>
             <!-- <h6 style="fontWeight:300" class="mt-5 mb-10">CCCCCCCCCCCCCCCCCCCCCCCC</h6> -->
              </div>
              <div class="col-12 scol-sm-12 col-lg-8 col-md-8 ">
                <div class="row">
                  <div class="col-5 col-lg-5 col-md-5 mt-10">
    <g-image class="about titleheading" style="width:100%;border-radius: 10px;" src="https://www.efulfillmentservice.com/wp-content/uploads/2015/03/Aisle-Shot-2.jpg" />  
  </div>
  <div class="col-lg-7 col-md-7 col-sm-6 col-6  image_margin">
    <g-image class="about " style="width:100%;border-radius: 10px;" src="https://www.shipbob.com/wp-content/uploads/2019/12/fulfillment-center-shipbob.jpg" />  
  </div>
  </div>        
  <div class="row">
    <div class="col-1"></div>
    <div class="col-5 mt-10">
<g-image class="about" style="width:100%;border-radius: 10px;" src="https://img.freepik.com/free-photo/smiling-warehouse-worker-moving-boxes-shelf_342744-1476.jpg?w=740&t=st=1701094696~exp=1701095296~hmac=4758dfede06947e4a5e693fe5016e48df4094b862bda5f32021ac48151fba473" />  
</div>
<div class="col-5">
<g-image class="about" style="width:100%;border-radius: 10px;" src="https://img.freepik.com/premium-photo/forklifts-transport-goods-warehousesai-technology-generated-image_1112-11875.jpg?size=626&ext=jpg" />  
</div>
</div>        
  </div>
  
              </div>
            
              <div style="color:#3a5768;marginTop:100px!important" class="row mt-12">
                <h2   style="textAlign:center;width:100%;fontWeight:700!important;color:#3a5768!important;">{{ homePage.homeFiveCompTitle }}
                </h2>
              <h6 class="mt-2 mb-4 titleheading" style="textAlign:center;width:100%;fontWeight:300" >{{homePage.homeFiveCompDesc}}</h6>
              </div>
           

            <!-- <b-card
    title="We receive and store your products"
    img-src="https://cdn-icons-png.flaticon.com/512/2250/2250406.png"
    img-alt="Image"
      tag="article"
      img-width="20px"
    style="background-Color:white; "
    class="mb-2 text-center"
  >
    <b-card-text class="text-center">
      Over 12,000 pallet spaces in a secure controlled fulfilment warehouse environment.
    </b-card-text>

  </b-card> -->
            <!-- <a href="/cleaning-services" style="color:black;text-decoration:none;margin:10px;marginRight:25px!important" class="col-3 col-sm-3 col-lg-1 col-md-1"> -->
             <!-- <v-icon size="60">mdi-broom</v-icon> -->  
          <!-- <g-image style="height:68px;width:68px;;" src="https://cdn.iconscout.com/icon/free/png-256/cleaning-2846561-2366071.png"/> -->

           <!-- <h6 style="fontWeight:400;marginTop:10px">Cleaning</h6> -->
           <!-- </a> -->
           <!-- <a href="/plumber-services" style="color:black;text-decoration:none;margin:10px;marginRight:25px!important" class="service_icon col-3 col-sm-3 col-lg-1 col-md-1"> -->
             <!-- <v-icon size="60">mdi-tools</v-icon> -->
          <!-- <g-image style="height:68px;width:68px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2wCbeBPPIJDW440cMClS2hhD7RhgDRMs1g&usqp=CAU"/> -->
          
           <!-- <h6 style="fontWeight:400;marginTop:10px;paddingLeft:5px">Plumber</h6> -->
           <!-- </a> -->
        
          </div>
          <div style="color:#3a5768!important;fontWeight:700!important" class="row mb-10 mt-7">
             <!-- <v-stepper mobile>
    <v-stepper-header>
      <template v-for="(item, i) in items" :key="i">
        <v-divider v-if="i"></v-divider>

        <v-stepper-item v-bind="item"></v-stepper-item>
      </template>
    </v-stepper-header>
  </v-stepper> -->
            <div class="row">
               <div class="col-6">
                <h4 style="text-align: right;color:#3a5768!important;fontWeight:700!important">{{homePage.homeFiveSubCompOneLeftTitle}}</h4>
                <h6 style="text-align: right;">{{homePage.homeFiveSubCompOneLeftDesc}}</h6>
               </div>
               <div class="col-6">
                <h4 style="color:#3a5768!important;fontWeight:700!important">{{homePage.homeFiveSubCompTwoRightTitle}}</h4>
                <h6>{{homePage.homeFiveSubCompTwoRightDesc}}</h6>
               </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <h4 style="text-align: right;color:#3a5768!important;fontWeight:700!important">{{homePage.homeFiveSubCompThreeLeftTitle}}</h4>
                  <h6 style="text-align: right;">{{homePage.homeFiveSubCompThreeLeftDesc}}</h6>
                 </div>
                 <div class="col-6">
                  <h4 style="color:#3a5768!important;fontWeight:700!important">{{homePage.homeFiveSubCompFourRightTitle}}</h4>
                  <h6>{{homePage.homeFiveSubCompFourRightDesc}}</h6>
                 </div>
               </div>
               <div class="row">
                <div class="col-6">
                  <h4 style="text-align: right;color:#3a5768!important;fontWeight:700!important">{{homePage.homeFiveSubCompFiveLeftTitle}}</h4>
                  <h6 style="text-align: right;">{{homePage.homeFiveSubCompFiveLeftDesc}}</h6>
                 </div>
                <div class="col-6">
                  <h4 style="color:#3a5768!important;fontWeight:700!important">{{homePage.homeFiveSubCompSixRightTitle}}</h4>
                  <h6>{{homePage.homeFiveSubCompSixRightDesc }}
                  </h6>
                 </div>
               </div>
               <div class="row">
                <div class="col-6">
                  <h4 style="text-align: right;color:#3a5768!important;fontWeight:700!important">{{homePage.homeFiveSubCompSevenLeftTitle}}</h4>
                  <h6 style="text-align: right;">
                    {{ homePage.homeFiveSubCompSevenLeftDesc }}
                  </h6>
                 </div>
                <div class="col-6">
                  <h4 style="color:#3a5768!important;fontWeight:700!important">{{homePage.homeFiveSubCompEightRightTitle}}</h4>
                  <h6>{{ homePage.homeFiveSubCompEightRightDesc }}
                  </h6>
                 </div>
               </div>

          </div>
          <div style="color:#3a5768;marginTop:100px!important" class="row mt-12">
            <!-- <h1   style="textAlign:center;width:100%;fontWeight:700!important;color:#3a5768!important;">Order Fulfilment Services</h1> -->
                
          </div>
  <Footer />
    </div>
  </Layout>
</template>

<script>
import Footer from "./Footer.vue";
import axios from 'axios'
export default {
   components: {
      Footer
    },data(){
      return{homePage:[]}},
    mounted(){
      axios.get('https://api.storyblok.com/v2/cdn/stories/homefirst?version=draft&token=a0JvifJUK2XuIzV1Lhblvwtt&cv=1704612574').then(
   data=>{
     console.log(data.data.story)
        this.homePage= data.data.story.content.body[0]
   
   }).catch(error=>{
    console.log(error);
});
    },
  metaInfo: {
    title: 'Fullfilment'
  }
}
</script>
<style scoped >
@media(max-width:470px){
   .fullHeadingMob {
margin-left: 0px !important;
font-size: 27px;
  }
  .app_detail{
    font-size: 13px;
  }
  .whychoose{
  margin-left: 13px;
  margin-right: 10px;
  }
  .titleheading{
    margin-left: 13px !important;
    margin-right: 13px !important;
  }
  .image_margin{
   margin-right: 2px!important;

  }
}
</style>