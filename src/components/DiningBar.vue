<template>
    <div id="colorlib-dining-bar" class="colorlib-light-grey">
        <div class="container">
				<div class="row">
					<div class="col-md-12 text-center colorlib-heading">
						<span><i class="fa fa-star fa-lg mt-4" v-for="s in Number(5)"></i></span>
						<h2>Restaurante</h2>
						<p>We love to tell our successful far far away, behind the word mountains,</br> far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					</div>
				</div>
            <div class="row">
                <div class="diningbar-flex">
                    <div class="half animate-box">
                        <ul class="nav nav-tabs text-center" role="tablist">
                            <li role="presentation" class="active"><a href="#" aria-controls="mains" role="tab" data-toggle="tab">Menú</a></li>
                        </ul>
                    <!-- Tab panes -->
                    <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="mains">
                                <div class="row">
                                    <div class="col-md-12">
                                        <ul class="menu-dish">
                                    <li>
                                        <figure class="image"><img src="https://www.dinneratthezoo.com/wp-content/uploads/2018/01/steak-bites-3-500x500.jpg" alt=""></figure>
                                        <div class="text">
                                        <span class="price">$25.99</span>
                                        <h3>Grilled Pork</h3>
                                        <p class="cat">Meat / Potatoes / Rice</p>
                                        </div>
                                    </li>
                                    <li>
                                        <figure class="image"><img src="https://www.wickedspatula.com/wp-content/uploads/2015/02/wickedspatula-beef-chuck-eye-steak-recipe-just-like-ribeyes-1.jpg" alt=""></figure>
                                        <div class="text">
                                        <span class="price">$30.99</span>
                                        <h3>Tuna Roast Source</h3>
                                        <p class="cat">Tuna / Potatoes / Rice</p>
                                        </div>
                                    </li>
                                    <li>
                                        <figure class="image"><img src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Tenderloin-Steak-Diane_exps91317_SD142780D08_15_6bC_RMS-696x696.jpg" alt=""></figure>
                                        <div class="text">
                                        <span class="price">$40.00</span>
                                        <h3>Roast Beef (4 sticks)</h3>
                                        <p class="cat">Crab / Potatoes / Rice</p>
                                        </div>
                                    </li>
                                    <li>
                                        <figure class="image"><img src="https://www.cookingclassy.com/wp-content/uploads/2019/07/steak-marinade-12-500x500.jpg" alt=""></figure>
                                        <div class="text">
                                        <span class="price">$20.50</span>
                                        <h3>Salted Fried Chicken</h3>
                                        <p class="cat">Crab / Potatoes / Rice</p>
                                        </div>
                                    </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div><!-- end half -->
                <div class="half diningbar-img" style="background-image: url(https://demo.wpzoom.com/petit/files/2013/01/photodune-1917628-beef-steak-s.jpg);"></div><!-- end half -->
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang = "scss" scoped>


.diningbar-flex {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  width: 100%;
  background: #f96d00; }
  .diningbar-flex .half {
    width: 50%;
    padding: 2em; }
    @media screen and (max-width: 768px) {
      .diningbar-flex .half {
        width: 100%;
        padding: 1em; } }

@media screen and (max-width: 768px) {
  .diningbar-img {
    display: none; } }

.diningbar-img,
.amenities-img,
.blog-img {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative; }

.menu-dish {
  padding: 0;
  margin: 0; 
  background: #f96d00;}
  .menu-dish li {
    padding: 0;
    margin: 0;
    list-style: none;
    display: block;
    position: relative;
    padding: 10px;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s; }
    .menu-dish li:hover, .menu-dish li:focus, .menu-dish li.active {
      background: rgba(255, 255, 255, 0.1); }
    .menu-dish li .image, .menu-dish li .text {
      display: table-cell;
      vertical-align: top; }
    .menu-dish li .image {
      width: 70px; }
      .menu-dish li .image img {
        max-width: 100%;
        border-radius: 50%; }
    .menu-dish li .text {
      padding-left: 20px; }
      .menu-dish li .text h3 {
        margin: 10px 0 10px 0;
        font-size: 18px;
        color: #fff; }
        @media screen and (max-width: 768px) {
          .menu-dish li .text h3 {
            margin-top: 0px; } }
      .menu-dish li .text .cat {
        color: rgba(255, 255, 255, 0.8); }
      .menu-dish li .text .price {
        position: absolute;
        top: 20px;
        right: 10px;
        font-size: 24px;
        color: #fff;
        font-family: "Playfair Display", Times, serif; }
        @media screen and (max-width: 768px) {
          .menu-dish li .text .price {
            top: 0px;
            position: relative;
            display: block;
            margin-bottom: 0px; } }

.tab-pane {
  padding: 2em 0;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s; }

.nav-tabs {
  border: none;
  border-bottom: none;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s; }
  .nav-tabs li {
    font-size: 20px; }
    @media screen and (max-width: 768px) {
      .nav-tabs li {
        font-size: 12px; } }
    .nav-tabs li a {
      border: none !important;
      border-bottom: none !important;
      color: #ffa660 !important;
      background: transparent; }
      .nav-tabs li a:first-child {
        padding-left: 0; }
      .nav-tabs li a:hover, .nav-tabs li a:focus {
        background: transparent;
        border: 1px solid red; }
    .nav-tabs li.active a {
      border: none !important;
      border-bottom: none !important;
      color: #fff !important;
      background: transparent !important;
      border: 1px solid red; }

.amenities-flex {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  width: 100%; }
  .amenities-flex .amenities-img, .amenities-flex .desc {
    width: 50%;
    padding: 5em 4em; }
    @media screen and (max-width: 768px) {
      .amenities-flex .amenities-img, .amenities-flex .desc {
        padding: 1em; } }
  @media screen and (max-width: 768px) {
    .amenities-flex .amenities-img {
      width: 30%; } }
  .amenities-flex .desc {
    background: whitesmoke; }
    @media screen and (max-width: 768px) {
      .amenities-flex .desc {
        width: 70%; } }
    .amenities-flex .desc h2 {
      font-size: 24px; }
      .amenities-flex .desc h2 a {
        color: #000; }
        .amenities-flex .desc h2 a:hover {
          color: #4586FF; }
    .amenities-flex .desc .price {
      position: relative;
      font-family: "Playfair Display", Times, serif; }
      .amenities-flex .desc .price span {
        color: #000; }
      .amenities-flex .desc .price .currency {
        font-size: 30px;
        color: #4586FF; }
      .amenities-flex .desc .price .price-room {
        font-size: 50px;
        font-weight: 400;
        color: #4586FF; }
      .amenities-flex .desc .price .free {
        font-size: 40px;
        color: #F96D00; }

.about {
  margin-bottom: 30px; }

.contact-info-wrap {
  margin-bottom: 3em; }
  .contact-info-wrap p span {
    padding-right: 10px; }
    .contact-info-wrap p span i {
      font-size: 20px;
      color: #4586FF; }

.form-control {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  -ms-box-shadow: none;
  -o-box-shadow: none;
  box-shadow: none;
  border: none;
  font-size: 13px !important;
  font-weight: 300;
  -webkit-border-radius: 0px;
  -moz-border-radius: 0px;
  -ms-border-radius: 0px;
  border-radius: 0px; }
  .form-control:focus, .form-control:active {
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 2px solid rgba(0, 0, 0, 0.8); }

input[type="text"] {
  height: 50px; }

.form-group {
  margin-bottom: 30px; }
  .form-group .btn-modify {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 13px;
    padding: 10px 15px; }

#mains{
    background: #f96d00;
}
.tab-content{
    border: none;
}
</style>