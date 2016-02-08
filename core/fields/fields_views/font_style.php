	<div class="ctf-input-field ctf-input-field-radio-button clearfix">
		<label>
			<input type="checkbox" value="left" name="ctf_radio_input_{{{ data.id }}}_tstl" <# if ( 'left' === data.value ) { #>checked="checked"<# } #> > 
			<span class="ctf-input-radio-button"><i class="fa fa-bold"></i></span>
		</label>
		
		<label>
			<input type="checkbox" value="center" name="ctf_radio_input_{{{ data.id }}}_tstl" <# if ( 'center' === data.value ) { #>checked="checked"<# } #> > 
			<span class="ctf-input-radio-button"><i class="fa fa-italic"></i></span>
		</label>
	</div>
	<div class="ctf-input-field ctf-input-field-radio-button clearfix">

		<label>
			<input type="radio" value="left" name="ctf_radio_input_{{{ data.id }}}_td" <# if ( 'left' === data.value ) { #>checked="checked"<# } #> > 
			<span class="ctf-input-radio-button"><i class="fa fa-underline"></i></span>
		</label>
		
		<label>
			<input type="radio" value="center" name="ctf_radio_input_{{{ data.id }}}_td" <# if ( 'center' === data.value ) { #>checked="checked"<# } #> > 
			<span class="ctf-input-radio-button"><i class="fa fa-strikethrough"></i></span>
		</label>

    </div>