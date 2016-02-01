	<div class="ctf-input-field ctf-input-field-radio-image clearfix">
		<# for ( key in data.choices ) { #>
			<label>
				<input type="radio" value="{{ key }}" name="ctf_radio_input_{{{ data.id }}}" {{{ data.link }}} <# if ( key === data.value ) { #>checked="checked"<# } #> > 
				<img src="{{ data.choices[ key ] }}" alt="{{ key }}" class="ctf-input-radio-img">
			</label>
		<# } #>
	</div>