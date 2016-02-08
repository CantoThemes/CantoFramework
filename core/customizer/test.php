<?php

$options = array(
	array(
		'id'			 => 'test_panel',
		'priority'       => 10,
		'capability'     => 'edit_theme_options',
		'title'          => 'Test Panel',
		'description'    => 'Teat Panel Description',
		'sections' => array(
			array(
				'id'			 => 'test_section',
				'priority'       => 10,
				'title'          => 'Test Section',
				'description'    => 'Teat Section Description',
				'active_callback' => '',
				'options' => array(
					array(
						'setting' => array(
							'id' => 'test_option',
							'default' => 'Text Feild',
							'type' => 'theme_mod',
						),
						'control' => array(
							'label'    => __( 'Text Control', 'mytheme' ),
							'subtitle'    => __( 'Lorem ipsum dolor sit amet', 'mytheme' ),
							'type'     => 'text'
						),
					),
					array(
						'setting' => array(
							'id' => 'test_option_color',
							'default' => '#ff00ff',
							'type' => 'theme_mod',
						),
						'control' => array(
							'label'    => __( 'Color Control', 'mytheme' ),
							'subtitle'    => __( 'Lorem ipsum dolor sit amet', 'mytheme' ),
							'type'     => 'color'
						),
					),
					array(
						'setting' => array(
							'id' => 'test_option_rgba_color',
							// 'default' => 'rgba(0,0,0,0.5)',
							'type' => 'theme_mod',
						),
						'control' => array(
							'label'    => __( 'RGBA Color Control', 'mytheme' ),
							'subtitle'    => __( 'Lorem ipsum dolor sit amet', 'mytheme' ),
							'type'     => 'color_rgba'
						),
					),
					array(
						'setting' => array(
							'id' => 'test_option_text_multi',
							'default' => array(
								'Multi-Text Feild 1',
								'Multi-Text Feild 2',
								'Multi-Text Feild 3',
							),
							'type' => 'theme_mod',
							'sanitize_callback' => 'sanitize_multi_text',
						),
						'control' => array(
							'label'    => __( 'Multi-Text Control', 'mytheme' ),
							'subtitle'    => __( 'Lorem ipsum dolor sit amet', 'mytheme' ),
							'type'     => 'text_multi'
						),
					),
					array(
						'setting' => array(
							'id' => 'test_option_textarea',
							'default' => 'Textarea Feild',
							'type' => 'theme_mod',
						),
						'control' => array(
							'label'    => __( 'Textarea Control', 'mytheme' ),
							'subtitle'    => __( 'Lorem ipsum dolor sit amet', 'mytheme' ),
							'type'     => 'textarea'
						),
					),
					array(
						'setting' => array(
							'id' => 'test_option_select',
							'default' => 'test3',
							'type' => 'theme_mod',
						),
						'control' => array(
							'label'    => __( 'Select Control', 'mytheme' ),
							'subtitle'    => __( 'Lorem ipsum dolor sit amet', 'mytheme' ),
							'description'    => __( 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id fecit cognoscerem vetuit inertissimae sapientiamque terrore at discedere culpa.', 'mytheme' ),
							'type'     => 'select',
							'choices' => array(
								'test1' => 'Test 1',
								'test2' => 'Test 2',
								'test3' => 'Test 3',
								'test4' => 'Test 4',
							)
						),
					),
					array(
						'setting' => array(
							'id' => 'test_option_radio',
							'default' => 'test3',
							'type' => 'theme_mod',
						),
						'control' => array(
							'label'    => __( 'Radio Control', 'mytheme' ),
							'subtitle'    => __( 'Lorem ipsum dolor sit amet', 'mytheme' ),
							'type'     => 'radio',
							'choices' => array(
								'test1' => 'Test 1',
								'test2' => 'Test 2',
								'test3' => 'Test 3',
								'test4' => 'Test 4',
							)
						),
					),
					array(
						'setting' => array(
							'id' => 'test_option_radio_image',
							'default' => 'test3',
							'type' => 'theme_mod',
						),
						'control' => array(
							'label'    => __( 'Radio Image Control', 'mytheme' ),
							'subtitle'    => __( 'Lorem ipsum dolor sit amet', 'mytheme' ),
							'type'     => 'radio_image',
							'choices' => array(
								'test1' => get_home_url().'/wp-admin//images/align-left-2x.png',
								'test2' => get_home_url().'/wp-admin//images/align-center-2x.png',
								'test3' => get_home_url().'/wp-admin//images/align-right-2x.png',
							)
						),
					),
					array(
						'setting' => array(
							'id' => 'test_option_radio_button',
							'default' => 'test3',
							'type' => 'theme_mod',
						),
						'control' => array(
							'label'    => __( 'Radio Button Control', 'mytheme' ),
							'subtitle'    => __( 'Lorem ipsum dolor sit amet', 'mytheme' ),
							'type'     => 'radio_button',
							'choices' => array(
								'test1' => 'Test 1',
								'test2' => 'Test 2',
								'test3' => 'Test 3',
							)
						),
					),
					array(
						'setting' => array(
							'id' => 'test_option_checkbox',
							'default' => 'test3',
							'type' => 'theme_mod',
						),
						'control' => array(
							'label'    => __( 'Checkbox Control', 'mytheme' ),
							'subtitle'    => __( 'Lorem ipsum dolor sit amet', 'mytheme' ),
							'type'     => 'checkbox',
							'choices' => array(
								'test1' => 'Test 1',
								'test2' => 'Test 2',
								'test3' => 'Test 3',
								'test4' => 'Test 4',
							)
						),
					),
					array(
						'setting' => array(
							'id' => 'test_option_checkbox_image',
							'default' => 'test3',
							'type' => 'theme_mod',
						),
						'control' => array(
							'label'    => __( 'Checkbox Image Control', 'mytheme' ),
							'subtitle'    => __( 'Lorem ipsum dolor sit amet', 'mytheme' ),
							'type'     => 'checkbox_image',
							'choices' => array(
								'test1' => get_home_url().'/wp-admin//images/align-left-2x.png',
								'test2' => get_home_url().'/wp-admin//images/align-center-2x.png',
								'test3' => get_home_url().'/wp-admin//images/align-right-2x.png',
							)
						),
					),
					array(
						'setting' => array(
							'id' => 'test_option_checkbox_button',
							'default' => 'test3',
							'type' => 'theme_mod',
						),
						'control' => array(
							'label'    => __( 'Checkbox Button Control', 'mytheme' ),
							'subtitle'    => __( 'Lorem ipsum dolor sit amet', 'mytheme' ),
							'type'     => 'checkbox_button',
							'choices' => array(
								'test1' => 'Test 1',
								'test2' => 'Test 2',
								'test3' => 'Test 3',
							)
						),
					),
					array(
						'setting' => array(
							'id' => 'test_option_typo',
							'default' => array(
								'font-family' => 'Open Sans',
								'font-weight' => '300',
								'font-size' => '24px',
								'line-height' => '40px',
								'letter-spacing' => '2px',
								'word-spacing' => '5px',
							),
							'type' => 'theme_mod',
						),
						'control' => array(
							'label'    => __( 'Google Font Control', 'mytheme' ),
							'subtitle'    => __( 'Lorem ipsum dolor sit amet', 'mytheme' ),
							'type'     => 'google_font',
							'choices' => array(
								'font-family' => 1,
								'font-weight' => 1,
								'font-size' => 1,
								'line-height' => 0,
								// 'letter-spacing' => 1,
								// 'word-spacing' => 1,
							)
						),
					),
					array(
						'setting' => array(
							'id' => 'test_option_email',
							'default' => 'test@test.com',
							'type' => 'theme_mod',
						),
						'control' => array(
							'label'    => __( 'Email Control', 'mytheme' ),
							'subtitle'    => __( 'Lorem ipsum dolor sit amet', 'mytheme' ),
							'type'     => 'email'
						),
					),
					array(
						'setting' => array(
							'id' => 'test_option_number',
							'default' => '25',
							'type' => 'theme_mod',
						),
						'control' => array(
							'label'    => __( 'Number Control', 'mytheme' ),
							'subtitle'    => __( 'Lorem ipsum dolor sit amet', 'mytheme' ),
							'type'     => 'number',
							'choices' => array(
								'min' => 0,
								'max' => 40,
								'step' => 0.5
							)
						),
					),
					array(
						'setting' => array(
							'id' => 'test_option_dimension',
							'default' => '25px',
							'type' => 'theme_mod',
						),
						'control' => array(
							'label'    => __( 'Dimension Control', 'mytheme' ),
							'subtitle'    => __( 'Lorem ipsum dolor sit amet', 'mytheme' ),
							'type'     => 'dimension',
							'choices' => array(
								'min' => 0,
								'max' => 40,
								'step' => 1,
								'units' => array (
									'px',
									'%',
									'em'
								)
							)
						),
					),

					array(
						'setting' => array(
							'id' => 'test_option_range',
							'default' => '25',
							'type' => 'theme_mod',
						),
						'control' => array(
							'label'    => __( 'Range Control', 'mytheme' ),
							'subtitle'    => __( 'Lorem ipsum dolor sit amet', 'mytheme' ),
							'type'     => 'range',
							'choices' => array(
								'min' => 0,
								'max' => 50,
								'step' => 0.5
							)
						),
					),
					
				),
			)
		)
	)
);

$ctfc = new CTF_Customizer(array('opt_name' => 'testctf' ), $options);


/*add_action( 'customize_register', 'test_panel' );

function test_panel( $wp_customize )
{
	$wp_customize->add_panel( 'empty_test_panel', array(
		'priority'       => 10,
		'capability'     => 'edit_theme_options',
		'title'          => 'Test Panel 2',
		'description'    => 'Teat Panel 2 Description',
	) );
}*/