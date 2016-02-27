	<#
		var nameAttr = '';

		if( typeof isAddon == 'undefined' ){
			nameAttr = 'name="ctf_checkbox_input_'+data.id+'"';
		}
	#>
	<div class="ctf-input-field ctf-input-field-checkbox-button ctf-input-field-font-style clearfix">
		<label>
			<input type="checkbox" class="ctf-fstl-bold"  {{{ data.link }}} {{{ nameAttr }}} <# if ( 'on' === data.value['bold'] ) { #>checked="checked"<# } #> > 
			<span class="ctf-input-checkbox-button"><i class="fa fa-bold"></i></span>
		</label>
		
		<label>
			<input type="checkbox" class="ctf-fstl-italic"  {{{ data.link }}} {{{ nameAttr }}} <# if ( 'on' === data.value['italic'] ) { #>checked="checked"<# } #> > 
			<span class="ctf-input-checkbox-button"><i class="fa fa-italic"></i></span>
		</label>
		<label>
			<input type="checkbox" class="ctf-fstl-underline"  {{{ data.link }}} {{{ nameAttr }}} <# if ( 'on' === data.value['underline'] ) { #>checked="checked"<# } #> > 
			<span class="ctf-input-checkbox-button"><i class="fa fa-underline"></i></span>
		</label>
		
		<label>
			<input type="checkbox" class="ctf-fstl-strikethrough"  {{{ data.link }}} {{{ nameAttr }}} <# if ( 'on' === data.value['strikethrough'] ) { #>checked="checked"<# } #> > 
			<span class="ctf-input-checkbox-button"><i class="fa fa-strikethrough"></i></span>
		</label>
	</div>