<?php
/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link  https://wpswing.com/
 * @since 1.0.0
 *
 * @package    Subscriptions_For_Woocommerce
 * @subpackage Subscriptions_For_Woocommerce/admin/partials
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit(); // Exit if accessed directly.
}
global $sfw_mwb_sfw_obj;
$sfw_default_tabs = $sfw_mwb_sfw_obj->mwb_sfw_plug_default_tabs();
$sfw_tab_key = '';
?>
<header>
	<?php
	// desc - This hook is used for trial.
	do_action( 'mwb_sfw_settings_saved_notice' );
	?>
	<div class="mwb-header-container mwb-bg-white mwb-r-8">
		<h1 class="mwb-header-title"><?php echo esc_attr( 'WP Swings' ); ?></h1>
	</div>
</header>
<main class="mwb-main mwb-bg-white mwb-r-8">
	<section class="mwb-section">
		<div>
			<?php
				// desc - This hook is used for trial.
			do_action( 'mwb_sfw_before_common_settings_form' );
				// if submenu is directly clicked on woocommerce.
			$sfw_genaral_settings = apply_filters(
				'sfw_home_settings_array',
				array(
					array(
						'title' => __( 'Enable Tracking', 'subscriptions-for-woocommerce' ),
						'type'  => 'radio-switch',
						'id'    => 'mwb_sfw_enable_tracking',
						'value' => get_option( 'mwb_sfw_enable_tracking' ),
						'class' => 'sfw-radio-switch-class',
						'options' => array(
							'yes' => __( 'YES', 'subscriptions-for-woocommerce' ),
							'no' => __( 'NO', 'subscriptions-for-woocommerce' ),
						),
					),
					array(
						'type'  => 'button',
						'id'    => 'sfw_track_button',
						'button_text' => __( 'Save', 'subscriptions-for-woocommerce' ),
						'class' => 'sfw-button-class',
					),
				)
			);
			?>
			<form action="" method="POST" class="mwb-sfw-gen-section-form">
				<div class="sfw-secion-wrap">
					<?php
					$sfw_general_html = $sfw_mwb_sfw_obj->mwb_sfw_plug_generate_html( $sfw_genaral_settings );
					echo esc_html( $sfw_general_html );
					wp_nonce_field( 'mwb-sfw-general-nonce', 'mwb-sfw-general-nonce-field' );
					?>
				</div>
			</form>
			<?php
			do_action( 'mwb_sfw_before_common_settings_form' );
			$all_plugins = get_plugins();
			?>
		</div>
	</section>
	<style type="text/css">
		.cards {
			   display: flex;
			   flex-wrap: wrap;
			   padding: 20px 40px;
		}
		.card {
			flex: 1 0 518px;
			box-sizing: border-box;
			margin: 1rem 3.25em;
			text-align: center;
		}

	</style>
	<div class="centered">
		<section class="cards">
			<?php foreach ( get_plugins() as $key => $value ) : ?>
				<?php if ( 'WP Swings' === $value['Author'] ) : ?>
					<article class="card">
						<div class="container">
							<h4><b><?php echo esc_html( $value['Name'] ); ?></b></h4> 
							<p><?php echo esc_html( $value['Version'] ); ?></p> 
							<p><?php echo esc_html( $value['Description'] ); ?></p>
						</div>
					</article>
				<?php endif; ?>
			<?php endforeach; ?>
		</section>
	</div>
