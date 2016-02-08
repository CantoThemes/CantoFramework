	<div class="ctf-input-field ctf-input-field-radio-button ctf-input-field-text-align  clearfix">

		<label>
			<input type="radio" value="left" name="ctf_radio_input_{{{ data.id }}}_ta" <# if ( 'left' === data.value ) { #>checked="checked"<# } #> > 
			<span class="ctf-input-radio-button"><i class="fa fa-align-left"></i></span>
		</label>
		
		<label>
			<input type="radio" value="center" name="ctf_radio_input_{{{ data.id }}}_ta" <# if ( 'center' === data.value ) { #>checked="checked"<# } #> > 
			<span class="ctf-input-radio-button"><i class="fa fa-align-center"></i></span>
		</label>
		
		<label>
			<input type="radio" value="right" name="ctf_radio_input_{{{ data.id }}}_ta" <# if ( 'right' === data.value ) { #>checked="checked"<# } #> > 
			<span class="ctf-input-radio-button"><i class="fa fa-align-right"></i></span>
		</label>
		
		<label>
			<input type="radio" value="justify" name="ctf_radio_input_{{{ data.id }}}_ta" <# if ( 'justify' === data.value ) { #>checked="checked"<# } #> > 
			<span class="ctf-input-radio-button"><i class="fa fa-align-justify"></i></span>
		</label>

	</div>