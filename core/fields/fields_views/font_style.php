	<div class="ctf-input-field ctf-input-field-checkbox-button ctf-input-field-font-style clearfix">
		<label>
			<input type="checkbox" class="ctf-fstl-bold" name="ctf_radio_input_{{{ data.id }}}_tstl" <# if ( 'on' === data.value['bold'] ) { #>checked="checked"<# } #> > 
			<span class="ctf-input-checkbox-button"><i class="fa fa-bold"></i></span>
		</label>
		
		<label>
			<input type="checkbox" class="ctf-fstl-italic" name="ctf_radio_input_{{{ data.id }}}_tstl" <# if ( 'on' === data.value['italic'] ) { #>checked="checked"<# } #> > 
			<span class="ctf-input-checkbox-button"><i class="fa fa-italic"></i></span>
		</label>
		<label>
			<input type="checkbox" class="ctf-fstl-underline" name="ctf_radio_input_{{{ data.id }}}_tstl" <# if ( 'on' === data.value['underline'] ) { #>checked="checked"<# } #> > 
			<span class="ctf-input-checkbox-button"><i class="fa fa-underline"></i></span>
		</label>
		
		<label>
			<input type="checkbox" class="ctf-fstl-strikethrough" name="ctf_radio_input_{{{ data.id }}}_tstl" <# if ( 'on' === data.value['strikethrough'] ) { #>checked="checked"<# } #> > 
			<span class="ctf-input-checkbox-button"><i class="fa fa-strikethrough"></i></span>
		</label>
	</div>