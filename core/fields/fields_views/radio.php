	<div class="ctf-input-field ctf-input-field-radio">
		<# for ( key in data.choices ) { #>
			<label>
				<input type="radio" value="{{ key }}" name="ctf_radio_input_{{{ data.id }}}" {{{ data.link }}} <# if ( key === data.value ) { #>checked="checked"<# } #> > 
				<span class="ctf-input-radio-box"></span>
				<span class="ctf-input-radio-title">{{ data.choices[ key ] }}</span>
			</label>
		<# } #>
	</div>