<?php
/**
 * Plugin Name: CantoFramework
 * Plugin URI: https://www.cantothemes.com
 * Description: A framework for wordpress theme and plugins
 * Version: 1.0-alpha
 * Author: CantoThemes
 * Author URI: https://www.cantothemes.com
 */

define('CTF_PATH', plugin_dir_path( __FILE__ ));
define('CTF_URL', plugin_dir_url( __FILE__ ));

class CTF_Init
{
	
	function __construct()
	{
		require_once CTF_PATH .'core/fields/fields.class.php';
		require_once CTF_PATH .'core/helper_class/ctfhelp.class.php';
		require_once CTF_PATH .'core/helper_class/addon.class.php';
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
	
	public function print_window_js_var (){
		
		$ext_plugins = '';
		
		/**
		 * Filter the list of teenyMCE buttons (Text tab).
		 *
		 * @since 2.7.0
		 *
		 * @param array  $buttons   An array of teenyMCE buttons.
		 * @param string $editor_id Unique editor identifier, e.g. 'content'.
		 */
		$ctf_teeny_mce_buttons = apply_filters( 'teeny_mce_buttons', array('bold', 'italic', 'underline', 'blockquote', 'strikethrough', 'bullist', 'numlist', 'alignleft', 'aligncenter', 'alignright', 'undo', 'redo', 'link', 'unlink', 'fullscreen') );
		
		$mce_buttons = array( 'bold', 'italic', 'strikethrough', 'bullist', 'numlist', 'blockquote', 'hr', 'alignleft', 'aligncenter', 'alignright', 'link', 'unlink', 'wp_more', 'spellchecker' );
		
		if ( ! wp_is_mobile() ) {
			$mce_buttons[] = 'fullscreen';
		}

		$mce_buttons[] = 'wp_adv';
		
		
		/**
		 * Filter the first-row list of TinyMCE buttons (Visual tab).
		 *
		 * @since 2.0.0
		 *
		 * @param array  $buttons   First-row list of buttons.
		 * @param string $editor_id Unique editor identifier, e.g. 'content'.
		 */
		$mce_buttons = apply_filters( 'mce_buttons', $mce_buttons );
		
		$mce_buttons_2 = array( 'formatselect', 'underline', 'alignjustify', 'forecolor', 'pastetext', 'removeformat', 'charmap', 'outdent', 'indent', 'undo', 'redo' );

		if ( ! wp_is_mobile() ) {
			$mce_buttons_2[] = 'wp_help';
		}

		/**
		 * Filter the second-row list of TinyMCE buttons (Visual tab).
		 *
		 * @since 2.0.0
		 *
		 * @param array  $buttons   Second-row list of buttons.
		 * @param string $editor_id Unique editor identifier, e.g. 'content'.
		 */
		$mce_buttons_2 = apply_filters( 'mce_buttons_2', $mce_buttons_2 );

		/**
		 * Filter the third-row list of TinyMCE buttons (Visual tab).
		 *
		 * @since 2.0.0
		 *
		 * @param array  $buttons   Third-row list of buttons.
		 * @param string $editor_id Unique editor identifier, e.g. 'content'.
		 */
		$mce_buttons_3 = apply_filters( 'mce_buttons_3', array() );

		/**
		 * Filter the fourth-row list of TinyMCE buttons (Visual tab).
		 *
		 * @since 2.5.0
		 *
		 * @param array  $buttons   Fourth-row list of buttons.
		 * @param string $editor_id Unique editor identifier, e.g. 'content'.
		 */
		$mce_buttons_4 = apply_filters( 'mce_buttons_4', array() );
		
		
		
		
		
		
		
		$ctf_teeny_plugins = apply_filters( 'teeny_mce_plugins', array( 'colorpicker', 'lists', 'fullscreen', 'image', 'wordpress', 'wpeditimage', 'wplink' ) );
		
		
		/**
		 * Filter the list of TinyMCE external plugins.
		 *
		 * The filter takes an associative array of external plugins for
		 * TinyMCE in the form 'plugin_name' => 'url'.
		 *
		 * The url should be absolute, and should include the js filename
		 * to be loaded. For example:
		 * 'myplugin' => 'http://mysite.com/wp-content/plugins/myfolder/mce_plugin.js'.
		 *
		 * If the external plugin adds a button, it should be added with
		 * one of the 'mce_buttons' filters.
		 *
		 * @since 2.5.0
		 *
		 * @param array $external_plugins An array of external TinyMCE plugins.
		 */
		$mce_external_plugins = apply_filters( 'mce_external_plugins', array() );

		$plugins = array(
			'charmap',
			'colorpicker',
			'hr',
			'lists',
			'media',
			'paste',
			'tabfocus',
			'textcolor',
			'fullscreen',
			'wordpress',
			'wpautoresize',
			'wpeditimage',
			'wpemoji',
			'wpgallery',
			'wplink',
			'wpdialogs',
			'wptextpattern',
			'wpview',
			'wpembed',
		);

		$plugins[] = 'image';

		/**
		 * Filter the list of default TinyMCE plugins.
		 *
		 * The filter specifies which of the default plugins included
		 * in WordPress should be added to the TinyMCE instance.
		 *
		 * @since 3.3.0
		 *
		 * @param array $plugins An array of default TinyMCE plugins.
		 */
		$plugins = array_unique( apply_filters( 'tiny_mce_plugins', $plugins ) );

		if ( ( $key = array_search( 'spellchecker', $plugins ) ) !== false ) {
			// Remove 'spellchecker' from the internal plugins if added with 'tiny_mce_plugins' filter to prevent errors.
			// It can be added with 'mce_external_plugins'.
			unset( $plugins[$key] );
		}

		if ( ! empty( $mce_external_plugins ) ) {

			/**
			 * Filter the translations loaded for external TinyMCE 3.x plugins.
			 *
			 * The filter takes an associative array ('plugin_name' => 'path')
			 * where 'path' is the include path to the file.
			 *
			 * The language file should follow the same format as wp_mce_translation(),
			 * and should define a variable ($strings) that holds all translated strings.
			 *
			 * @since 2.5.0
			 *
			 * @param array $translations Translations for external TinyMCE plugins.
			 */
			$mce_external_languages = apply_filters( 'mce_external_languages', array() );

			$loaded_langs = array();
			$strings = '';

			if ( ! empty( $mce_external_languages ) ) {
				foreach ( $mce_external_languages as $name => $path ) {
					if ( @is_file( $path ) && @is_readable( $path ) ) {
						include_once( $path );
						$ext_plugins .= $strings . "\n";
						$loaded_langs[] = $name;
					}
				}
			}

			foreach ( $mce_external_plugins as $name => $url ) {
				if ( in_array( $name, $plugins, true ) ) {
					unset( $mce_external_plugins[ $name ] );
					continue;
				}

				$url = set_url_scheme( $url );
				$mce_external_plugins[ $name ] = $url;
				$plugurl = dirname( $url );
				$strings = '';

				// Try to load langs/[locale].js and langs/[locale]_dlg.js
				if ( ! in_array( $name, $loaded_langs, true ) ) {
					$path = str_replace( content_url(), '', $plugurl );
					$path = WP_CONTENT_DIR . $path . '/langs/';

					if ( function_exists('realpath') )
						$path = trailingslashit( realpath($path) );

					if ( @is_file( $path . $mce_locale . '.js' ) )
						$strings .= @file_get_contents( $path . $mce_locale . '.js' ) . "\n";

					if ( @is_file( $path . $mce_locale . '_dlg.js' ) )
						$strings .= @file_get_contents( $path . $mce_locale . '_dlg.js' ) . "\n";

					if ( 'en' != $mce_locale && empty( $strings ) ) {
						if ( @is_file( $path . 'en.js' ) ) {
							$str1 = @file_get_contents( $path . 'en.js' );
							$strings .= preg_replace( '/([\'"])en\./', '$1' . $mce_locale . '.', $str1, 1 ) . "\n";
						}

						if ( @is_file( $path . 'en_dlg.js' ) ) {
							$str2 = @file_get_contents( $path . 'en_dlg.js' );
							$strings .= preg_replace( '/([\'"])en\./', '$1' . $mce_locale . '.', $str2, 1 ) . "\n";
						}
					}

					if ( ! empty( $strings ) )
						$ext_plugins .= "\n" . $strings . "\n";
				}

				$ext_plugins .= 'tinymce.PluginManager.load("' . $name . '", "' . $url . '");' . "\n";
			}
		}
		
        ?>
        <script type="text/javascript">
            window.ctf_teeny_mce_buttons = {};
    	</script>
        <?php
    }
}


$framework_init = new CTF_Init();