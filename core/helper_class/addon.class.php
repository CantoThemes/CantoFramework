<?php

class CTF_Addon
{
	public $all_fields = array();
	
    function __construct()
	{
		// Set Fields Name
		$this->set_fields_name();

		add_action( 'admin_enqueue_scripts', array($this,'load_admin_js') );
		add_action( 'admin_enqueue_scripts', array($this,'load_admin_css') );
	}

	function load_admin_js(){
		wp_enqueue_script( 'wp-color-picker' );
		wp_enqueue_script( 'jquery-ui-spinner' );
        wp_enqueue_script( 'ctf-core-script', CTF_URL . 'assets/js/main.js', array('jquery', 'underscore'), '1.0', true );
    }

    function load_admin_css(){
    	wp_enqueue_style( 'ctf-roboto-font', '//fonts.googleapis.com/css?family=Roboto:400,900italic,900,700italic,700,500italic,500,400italic,300italic,300,100italic,100' );
    	wp_enqueue_style( 'wp-color-picker' );
        wp_enqueue_style( 'ctf-core-style', CTF_URL.'assets/css/main.css' );
    }
	
	public function add_js_tmlp_to_admin_footer(){
		add_action('admin_footer', array($this,'print_js_templates'));
	}
	
	public function print_js_templates(){
	    $fields = $this->get_fields_name();
	    
	    foreach($fields as $field){
	    	$filed_obj = new CTF_Field($field);
	    	
	    	$filed_obj->print_js_template();
	    }
	}
	
	public function get_fields_name(){
	    return $this->all_fields;
	}
	
	public function set_fields_name(){
	    $this->all_fields = CTF_Help::get_all_fields_name();
	}
	
	public static function get_instance(){
		return $this;
	}
}