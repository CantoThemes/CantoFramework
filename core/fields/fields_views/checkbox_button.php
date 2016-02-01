	<div class="ctf-input-field ctf-input-field-checkbox-button clearfix">
		<#
			var allValues = data.value.split("|");
		#>
		<# for ( key in data.choices ) { #>
			<label>
				<input type="checkbox" value="{{ key }}" name="ctf_radio_input_{{{ data.id }}}" <# if ( _.contains(allValues, key) ) { #>checked="checked"<# } #> > 
				<span class="ctf-input-checkbox-button">{{ data.choices[ key ] }}</span>
			</label>
		<# } #>
	</div>