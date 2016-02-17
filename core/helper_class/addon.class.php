<?php

class CTF_Addon
{
	public $all_fields = array();
	
    function __construct()
	{
		// Set Fields Name
		$this->set_fields_name();
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