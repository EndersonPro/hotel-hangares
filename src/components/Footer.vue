<template>
    <div>
		<div id="colorlib-footer" role="contentinfo">
			<div class="container">
				<div class="row row-pb-md">
					<div class="col-md-3 colorlib-widget">
						<h4>Los Hangares</h4>
						<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
						<p>
							<ul class="colorlib-social-icons">
								<li><a href="#"><i class="fa fa-twitter fa-lg mt-4"></i></a></li>
								<li><a href="#"><i class="fa fa-facebook fa-lg mt-4"></i></a></li>
								<li><a href="#"><i class="fa fa-linkedin fa-lg mt-4"></i></a></li>
								<li><a href="#"><i class="fa fa-google-plus fa-lg mt-4"></i></a></li>
							</ul>
						</p>
					</div>
					<div class="col-md-3 colorlib-widget">
						<h4>Quick Links</h4>
						<p>
							<ul class="colorlib-footer-links">
								<li><a href="#">Accomodation</a></li>
								<li><a href="#">Dining &amp; Bar</a></li>
								<li><a href="#">Restaurants</a></li>
								<li><a href="#">Beach &amp; Resorts</a></li>
							</ul>
						</p>
					</div>
					<div class="col-md-3">
						<h4>Recents Blog Post</h4>
						<ul class="colorlib-footer-links">
							<li><a href="#">The Ultimate Packing List For Female Travelers</a></li>
							<li><a href="#">How These 5 People Found The Path to Their Dream Trip</a></li>
							<li><a href="#">A Definitive Guide to the Best Dining and Drinking Venues in the City</a></li>
						</ul>
					</div>

					<div class="col-md-3 col-md-push-1">
						<h4>Contact Information</h4>
						<ul class="colorlib-footer-links">
							<li>291 South 21th Street, <br> Suite 721 New York NY 10016</li>
							<li><a href="#">+ 1235 2355 98</a></li>
							<li><a href="#">info@yoursite.com</a></li>
							<li><a href="#">loshangares.com</a></li>
						</ul>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 text-center"><br><br><br>
						<p>
							<small class="block"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                            Los Hangares Copyright &copy; 2019 All rights reserved 
                            <!-- | This template is made with <i class="icon-heart3" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></small> 
						</p>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

#colorlib-footer {
  background: #302939;
  color: rgba(255, 255, 255, 0.5) !important; }
  #colorlib-footer .colorlib-footer-links {
    padding: 0;
    margin: 0; }
    @media screen and (max-width: 768px) {
      #colorlib-footer .colorlib-footer-links {
        margin-bottom: 30px; } }
    #colorlib-footer .colorlib-footer-links li {
      padding: 0;
      margin: 0 0 10px 0;
      list-style: none;
      display: block; }
      #colorlib-footer .colorlib-footer-links li a {
        color: rgba(255, 255, 255, 0.6);
        text-decoration: none; }
        #colorlib-footer .colorlib-footer-links li a:hover {
          text-decoration: underline; }
  #colorlib-footer .colorlib-social-icons li a {
    padding-left: 10px;
    padding-right: 10px; }
    #colorlib-footer .colorlib-social-icons li a:first-child {
      padding-left: 0; }
  #colorlib-footer h4 {
    margin-bottom: 30px;
    font-size: 20px;
    color: #fff; }

#map {
  width: 100%;
  height: 500px;
  position: relative; }
  @media screen and (max-width: 768px) {
    #map {
      height: 200px; } }

#colorlib-offcanvas {
  position: absolute;
  z-index: 1901;
  width: 270px;
  background: black;
  top: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 75px 40px 40px 40px;
  overflow-y: auto;
  display: none;
  -moz-transform: translateX(270px);
  -webkit-transform: translateX(270px);
  -ms-transform: translateX(270px);
  -o-transform: translateX(270px);
  transform: translateX(270px);
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s; }
  @media screen and (max-width: 768px) {
    #colorlib-offcanvas {
      display: block; } }
  .offcanvas #colorlib-offcanvas {
    -moz-transform: translateX(0px);
    -webkit-transform: translateX(0px);
    -ms-transform: translateX(0px);
    -o-transform: translateX(0px);
    transform: translateX(0px); }
  #colorlib-offcanvas a {
    color: rgba(255, 255, 255, 0.5); }
    #colorlib-offcanvas a:hover {
      color: rgba(255, 255, 255, 0.8); }
  #colorlib-offcanvas ul {
    padding: 0;
    margin: 0; }
    #colorlib-offcanvas ul li {
      padding: 0;
      margin: 0;
      list-style: none; }
      #colorlib-offcanvas ul li > ul {
        padding-left: 20px;
        display: none; }
      #colorlib-offcanvas ul li.offcanvas-has-dropdown > a {
        display: block;
        position: relative; }
        #colorlib-offcanvas ul li.offcanvas-has-dropdown > a:after {
          position: absolute;
          right: 0px;
          font-family: 'icomoon';
          speak: none;
          font-style: normal;
          font-weight: normal;
          font-variant: normal;
          text-transform: none;
          line-height: 1;
          /* Better Font Rendering =========== */
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          content: "\e0c5";
          font-size: 20px;
          color: rgba(255, 255, 255, 0.2);
          -webkit-transition: 0.5s;
          -o-transition: 0.5s;
          transition: 0.5s; }
      #colorlib-offcanvas ul li.offcanvas-has-dropdown.active a:after {
        -webkit-transform: rotate(-180deg);
        -moz-transform: rotate(-180deg);
        -ms-transform: rotate(-180deg);
        -o-transform: rotate(-180deg);
        transform: rotate(-180deg); }

.colorlib-social-icons {
  margin: 0;
  padding: 0; }
  .colorlib-social-icons li {
    margin: 0;
    padding: 0;
    list-style: none;
    display: -moz-inline-stack;
    display: inline-block;
    zoom: 1;
    *display: inline; }
    .colorlib-social-icons li a {
      display: -moz-inline-stack;
      display: inline-block;
      zoom: 1;
      *display: inline;
      color: #4586FF;
      padding-left: 10px;
      padding-right: 10px; }
      .colorlib-social-icons li a i {
        font-size: 20px; }
</style>