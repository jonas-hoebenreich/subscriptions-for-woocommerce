(function( $ ) {
    'use strict';

    $(document).ready(function() {
        function mwb_sfw_show_subscription_settings_tab(){
            if( $('#_mwb_sfw_product').prop('checked') ) {
                
                $(document).find('.mwb_sfw_product_options').show();
                $(document).find('.mwb_sfw_product_options').removeClass('active');
            }
            else{
                
             $(document).find('.mwb_sfw_product_options').hide();
             $(document).find('#mwb_sfw_product_target_section').hide();
             $(document).find('.general_tab').addClass('active');
             $(document).find('#general_product_data').show();
             
            }
        }
        mwb_sfw_show_subscription_settings_tab();
        $('#_mwb_sfw_product').on('change', function(){
            mwb_sfw_show_subscription_settings_tab();
        });
        
         /*Subscription interval set*/
         $('#mwb_sfw_subscription_interval').on('change', function() {
            var current_selection = $(this).val();
            var expiry_interval = $('#mwb_sfw_subscription_expiry_interval');
            if ( current_selection == 'day' ) {
                 expiry_interval.empty();
                 expiry_interval.append($('<option></option>').attr('value','day').text( sfw_product_param.day ) );
    
            }
            else if ( current_selection == 'week' ) {
                 expiry_interval.empty();
                 expiry_interval.append($('<option></option>').attr('value','week').text( sfw_product_param.week ) );
               
            }
            else if( current_selection == 'month' ) {
                expiry_interval.empty();
                expiry_interval.append($('<option></option>').attr('value','month').text( sfw_product_param.month ) );
                
            }
            else if( current_selection == 'year' ) {
                expiry_interval.empty();
                expiry_interval.append($('<option></option>').attr('value','year').text( sfw_product_param.year ) );
            }
        });

        
        /*Expiry interval validation*/
        $(document).on('submit','#post', function(e) {
       
            var subscription_number = $('#mwb_sfw_subscription_number').val();
            var subscription_expiry = $('#mwb_sfw_subscription_expiry_number').val();
            if ( subscription_expiry != '' ) {
                if ( subscription_expiry < subscription_number ) {
                    alert( sfw_product_param.expiry_notice );
                    jQuery('#publish').siblings('span').removeClass('is-active');
                    $('#publish').removeClass('disabled');
                    e.preventDefault();
                }
                var subscription_interval = $('#mwb_sfw_subscription_expiry_interval').val();
                if ( subscription_interval == 'day' ) {
                    if ( subscription_expiry > 90 ) {
                        alert( sfw_product_param.expiry_days_notice );
                        jQuery('#publish').siblings('span').removeClass('is-active');
                        $('#publish').removeClass('disabled');
                        e.preventDefault();
                    }
                }
                else if( subscription_interval == 'week' ) {
                    if ( subscription_expiry > 52 ) {
                        alert( sfw_product_param.expiry_week_notice );
                        jQuery('#publish').siblings('span').removeClass('is-active');
                        $('#publish').removeClass('disabled');
                        e.preventDefault();
                    }
                }
                else if( subscription_interval == 'month' ) {
                    if ( subscription_expiry > 24 ) {
                        alert( sfw_product_param.expiry_month_notice );
                        jQuery('#publish').siblings('span').removeClass('is-active');
                        $('#publish').removeClass('disabled');
                        e.preventDefault();
                    }
                }
                else if( subscription_interval == 'year' ) {
                    if ( subscription_expiry > 5 ) {
                        alert( sfw_product_param.expiry_year_notice );
                        jQuery('#publish').siblings('span').removeClass('is-active');
                        $('#publish').removeClass('disabled');
                        e.preventDefault();
                    }
                }
            }

            /*free trial validation*/
            var subscription_free_trial_number = $('#mwb_sfw_subscription_free_trial_number').val();
            var subscription_free_trial_interval = $('#mwb_sfw_subscription_free_trial_interval').val();
             if ( subscription_free_trial_number != '' ) {
                
                if ( subscription_free_trial_interval == 'day' ) {
                    if ( subscription_free_trial_number > 90 ) {
                        alert( sfw_product_param.trial_days_notice );
                        jQuery('#publish').siblings('span').removeClass('is-active');
                        $('#publish').removeClass('disabled');
                        e.preventDefault();
                    }
                }
                else if( subscription_free_trial_interval == 'week' ) {
                    if ( subscription_free_trial_number > 52 ) {
                        alert( sfw_product_param.trial_week_notice );
                        jQuery('#publish').siblings('span').removeClass('is-active');
                        $('#publish').removeClass('disabled');
                        e.preventDefault();
                    }
                }
                else if( subscription_free_trial_interval == 'month' ) {
                    if ( subscription_free_trial_number > 24 ) {
                        alert( sfw_product_param.trial_month_notice );
                        jQuery('#publish').siblings('span').removeClass('is-active');
                        $('#publish').removeClass('disabled');
                        e.preventDefault();
                    }
                }
                else if( subscription_free_trial_interval == 'year' ) {
                    if ( subscription_free_trial_number > 5 ) {
                        alert( sfw_product_param.trial_year_notice );
                        jQuery('#publish').siblings('span').removeClass('is-active');
                        $('#publish').removeClass('disabled');
                        e.preventDefault();
                    }
                }
            }
            
        });

        // Product type specific options.
        $( 'select#product-type' ).change( function() {

            var select_val = $( this ).val();
           
            if ( 'variable' === select_val ) {
                $( 'input#_mwb_sfw_product' ).prop( 'checked', false );
                
            } else if ( 'grouped' === select_val ) {
                $( 'input#_mwb_sfw_product' ).prop( 'checked', false );
                
            } else if ( 'external' === select_val ) {
                $( 'input#_mwb_sfw_product' ).prop( 'checked', false );
            }
        });
    });
})( jQuery );