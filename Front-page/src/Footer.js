
const Footer = () => {
	return (
		// <!-- Remove the container if you want to extend the Footer to full width. -->
		<div class="footer-top">
		  <footer class="text-center text-white" style="background-color: purple">
			<div class="container">
			  <section class="mt-5">
				<div class="row text-center d-flex justify-content-center pt-5">
				  <div class="col-md-2">
					<h6 class="text-uppercase font-weight-bold">
					  <a href="#!" class="text-white">About us</a>
					</h6>
				  </div>
				  <div class="col-md-2">
					<h6 class="text-uppercase font-weight-bold">
					  <a href="#!" class="text-white">Products</a>
					</h6>
				  </div>
				  <div class="col-md-2">
					<h6 class="text-uppercase font-weight-bold">
					  <a href="#!" class="text-white">Help</a>
					</h6>
				  </div>
				  <div class="col-md-2">
					<h6 class="text-uppercase font-weight-bold">
					  <a href="#!" class="text-white">Contact</a>
					</h6>
				  </div>
				</div>
			  </section>
			  <hr class="my-5" />
			  <section class="mb-5" style="margin-top: 0;">
				<div class="row d-flex justify-content-center">
				  <div class="col-lg-8">
					<p>
					  Facing any health issue? Well don't worry. Log In to our website and get one free consultancy with a doctor without travelling.
					</p>
				  </div>
				</div>
			  </section>
			  <section class="text-center mb-5">
				<a href="" class="text-white me-4">
				  <i class="fab fa-facebook-f"></i>
				</a>
				<a href="" class="text-white me-4">
				  <i class="fab fa-twitter"></i>
				</a>
				<a href="" class="text-white me-4">
				  <i class="fab fa-google"></i>
				</a>
				<a href="" class="text-white me-4">
				  <i class="fab fa-instagram"></i>
				</a>
				<a href="" class="text-white me-4">
				  <i class="fab fa-linkedin"></i>
				</a>
				<a href="" class="text-white me-4">
				  <i class="fab fa-github"></i>
				</a>
			  </section>
			</div>
			<div
				 class="text-center p-3"
				 style="background-color: rgba(0, 0, 0, 0.2)"
				 >
			  © 2020 Copyright:
			  <a class="text-white" href="#"
				 >Padoc</a
				>
			</div>
		  </footer>
		</div>
	);
}

export default Footer;
