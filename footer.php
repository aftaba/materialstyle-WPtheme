<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Material_Style
 */

?>

	</div><!-- #content -->

	<footer>
        <div class="footer-top footer-inner bg-blue-grey-900">
          <div class="container">
              <div class="row">
                <div class="col-12 col-sm-6 col-md-4">
                    <h4 class="heading">LOCATION</h4>
                    <address>Mindfire Solutions<br>
                        6th & 7th Floors, Assotech One<br>
                        C-20/1/1A, Sector 62<br>
                        Noida - 201309, India</address>
                      <hr class="mb-2 mt-2">
                      <address>
                        Mindfire Solutions <br>
                        10th Floor, DLF Cybercity,<br>
                        Infocity Area,<br>
                        Bhubaneswar - 751024, Odisha, India.
                      </address>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                    <h4 class="heading">SERVICES</h4>
                    <ul>
                        <li><a href="#">Digital Commerce Solutions</a></li>
                        <li><a href="#">Omnichannel ecommerce Solutions</a></li>
                        <li><a href="#">Cloud Computing & Bigdata Analytics</a></li>
                        <li><a href="#">Optimization</a></li>
                        <li><a href="#">Growth Acceleration</a></li>
                        <li><a href="#">App developement</a></li>
                    </ul>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                    <h4 class="heading">CONNECT</h4>
                    <!-- Text field with floating label -->
                    <form>
                        <div class="form-group">
                            <div class="ms-text-field-wrapper">
                                <label for="name" class="floating-label">Name</label>
                                <input id="name" type="text" value="" class="form-control ms-text-field" autocomplete="off">
                            </div>
                        </div>
                        <div class="form-group">
                                <div class="ms-text-field-wrapper">
                                    <label for="email" class="floating-label">Email</label>
                                    <input id="email" type="email" value="" class="form-control ms-text-field" autocomplete="off">
                                </div>
                        </div>
                        <button type="button" class="btn btn-ms btn-flat btn-outline-indigo ripple">Submit<span class="ink animate"></span></button>
                    </form>
                    
                </div>
              </div>
          </div>  
        </div>
        <div class="footer-bottom bg-grey-900">
            <div class="container">
                <div class="row text-center">
                    <div class="site-info">
					<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'material-style' ) ); ?>">
						<?php
						/* translators: %s: CMS name, i.e. WordPress. */
						printf( esc_html__( 'Proudly powered by %s', 'material-style' ), 'WordPress' );
						?>
					</a>
					<span class="sep"> | </span>
						<?php
						/* translators: 1: Theme name, 2: Theme author. */
						printf( esc_html__( 'Theme: %1$s by %2$s.', 'material-style' ), 'Material Style', '<a href="https://materialstyle.io/wp-theme/material-style">MaterialStyle.io</a>' );
						?>
				</div>
                </div>
            </div>  
        </div>
   </footer>

<?php wp_footer(); ?>

</body>
</html>
