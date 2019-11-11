<template>
  <div id="colorlib-services">
    <b-container>
      <div class="row">
        <div class="col-md-3 animate-box text-center">
          <div class="services">
            <span class="icon">
              <i class="fa fa-user fa-lg mt-4"></i>
            </span>
            <h3>24/7 Front Desk</h3>
            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
          </div>
        </div>
        <div class="col-md-3 animate-box text-center">
          <div class="services">
            <span class="icon">
              <i class="fa fa-wifi fa-lg mt-4"></i>
            </span>
            <h3>WI-FI</h3>
            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
          </div>
        </div>
        <div class="col-md-3 animate-box text-center">
          <div class="services">
            <span class="icon">
              <i class="fa fa-car fa-lg mt-4"></i>
            </span>
            <h3>Transfer Services</h3>
            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
          </div>
        </div>
        <div class="col-md-3 animate-box text-center">
          <div class="services">
            <span class="icon">
              <i class="fa fa-beer fa-lg mt-4"></i>
            </span>
            <h3>Restaurant &amp; Bar</h3>
            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
          </div>
        </div>
      </div>
    </b-container>			
  </div> 
</template>
<script>
export default {
    name:"Services",
    data(){
        return{
          
        }
    },
    methods:{

    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
.colorlib-services {
  padding: 1em !important; }
  @media screen and (max-width: 768px) {
    .colorlib-services {
      padding: .5em !important; } }

.bg-primary-color {
  background: #4586FF; }
  .bg-primary-color p {
    color: #fff !important; }

.services .icon {
  margin: 0 auto;
  margin-bottom: 20px;
  background: #f7f7f7;
  width: 120px;
  height: 120px;
  display: table;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%; }
  .services .icon i {
    display: table-cell;
    vertical-align: middle;
    height: 120px;
    font-size: 60px;
    color: #4586FF; }

</style>