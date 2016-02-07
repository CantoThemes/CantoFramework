<?php

/**
 * Plugin Name: CantoFramework
 */

define('CTF_PATH', plugin_dir_path( __FILE__ ));
define('CTF_URL', plugin_dir_url( __FILE__ ));

class CTF_Init
{
	
	function __construct()
	{
		require_once CTF_PATH .'core/fields/fields.class.php';
		require_once CTF_PATH .'core/helper_class/ctfhelp.class.php';
		require_once CTF_PATH .'core/helper_class/sanitize.php';

		$this->include_customizer_class();
		$this->test();
	}


	public function include_customizer_class()
	{
		require_once CTF_PATH .'core/customizer/ctf_customizer.class.php';
	}


	public function test()
	{
		require_once CTF_PATH .'core/customizer/test.php';
	}
}


$framework_init = new CTF_Init();