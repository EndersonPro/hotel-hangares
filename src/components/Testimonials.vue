<template>
		<div id="colorlib-testimony" class="colorlib-light-grey">
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center colorlib-heading">
						<span><i class="fa fa-star fa-lg mt-4" v-for="s in Number(5)"></i></span>
						<h2>Nuestros Clientes</h2>
						<p>We love to tell our successful far far away, behind the word mountains,</br> far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					</div>
				</div>
				<div class="row">
				<div class="col-md-4 animate-box">
					<div class="testimony text-center">
						<span class="img-user" style="background-image: url(https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);"></span>
						<span class="user">Brian Doe</span>
						<small>Satisfied Customer</small>
						<blockquote>
							<p></i> Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
						</blockquote>
					</div>
				</div>
				<div class="col-md-4 animate-box">
					<div class="testimony text-center">
						<span class="img-user" style="background-image: url(https://miro.medium.com/max/2560/1*gBQxShAkxBp_YPb14CN0Nw.jpeg);"></span>
						<span class="user">Nathalie Miller</span>
						<small>Satisfied Customer</small>
						<blockquote>
							<p></i> Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
						</blockquote>
					</div>
				</div>
				<div class="col-md-4 animate-box">
					<div class="testimony text-center">
						<span class="img-user" style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDquZFGlC3_9GPWIDf2Dqe3Vke7m6p9ii3Oau4mt2iyaYA18xL&s);"></span>
						<span class="user">Shara Jones</span>
						<small>Satisfied Customer</small>
						<blockquote>
							<p></i> Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
						</blockquote>
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


.testimony {
  position: relative;
  padding: 2em;
  background: #fff;
  -webkit-box-shadow: 0px 15px 18px -17px rgba(0, 0, 0, 0.07);
  -moz-box-shadow: 0px 15px 18px -17px rgba(0, 0, 0, 0.07);
  -ms-box-shadow: 0px 15px 18px -17px rgba(0, 0, 0, 0.07);
  -o-box-shadow: 0px 15px 18px -17px rgba(0, 0, 0, 0.07);
  box-shadow: 0px 15px 18px -17px rgba(0, 0, 0, 0.07); }
  @media screen and (max-width: 768px) {
    .testimony {
      margin-bottom: 70px; } }
  .testimony .img-user {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 120px;
    height: 120px;
    display: block;
    margin: 0 auto;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%; }
  .testimony .user {
    display: block;
    margin-top: 10px;
    font-size: 20px;
    margin-bottom: 10px; }
  .testimony small {
    display: block;
    margin-bottom: 20px;
    font-size: 14px;
    color: #999999; }
  .testimony blockquote {
    padding: 0;
    margin: 0 0 20px 0;
    border: none; }
    .testimony blockquote p {
      color: #000;
      font-size: 16px; }
</style>