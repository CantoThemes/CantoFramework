	<div class="ctf-input-field ctf-input-field-checkbox-image clearfix">
		<#
			var allValues = data.value.split("|");
		#>
		<# for ( key in data.choices ) { #>
			<label>
				<input type="checkbox" value="{{ key }}" name="ctf_radio_input_{{{ data.id }}}" <# if ( _.contains(allValues, key) ) { #>checked="checked"<# } #> > 
				<img src="{{ data.choices[ key ] }}" alt="{{ key }}" class="ctf-input-checkbox-img">
			</label>
		<# } #>
	</div>