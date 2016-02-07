        <div class="ctf-input-field ctf-input-field-google-font">
        	<div class="ctf-if-gf-text-align clearfix">
        		<div class="ctf-input-field-radio-button clearfix">
        			<label>
						<input type="radio" value="left" name="ctf_radio_input_{{{ data.id }}}_text_align" {{{ data.link }}} <# if ( 'left' === data.value['font-weight'] ) { #>checked="checked"<# } #> > 
						<span class="ctf-input-radio-button"><i class="fa fa-align-left"></i></span>
					</label>
					<label>
						<input type="radio" value="center" name="ctf_radio_input_{{{ data.id }}}_text_align" {{{ data.link }}} <# if ( 'center' === data.value['font-weight'] ) { #>checked="checked"<# } #> > 
						<span class="ctf-input-radio-button"><i class="fa fa-align-center"></i></span>
					</label>
					<label>
						<input type="radio" value="right" name="ctf_radio_input_{{{ data.id }}}_text_align" {{{ data.link }}} <# if ( 'right' === data.value['font-weight'] ) { #>checked="checked"<# } #> > 
						<span class="ctf-input-radio-button"><i class="fa fa-align-right"></i></span>
					</label>
					<label>
						<input type="radio" value="justify" name="ctf_radio_input_{{{ data.id }}}_text_align" {{{ data.link }}} <# if ( 'justify' === data.value['font-weight'] ) { #>checked="checked"<# } #> > 
						<span class="ctf-input-radio-button"><i class="fa fa-align-justify"></i></span>
					</label>
        		</div>
        	</div>
			<div class="ctf-if-gf-font-family">
				<label>Font Family</label>
				<# console.log(data.value); #>
				<select class="ctf-gf-ff-input">
					<# for ( key in ctf_google_fonts ) { #>
						<option value="{{ key }}"<# if ( key === data.value['font-family'] ) { #>selected<# } #>>{{ key }}</option>
					<# } #>
				</select>
			</div>
			<div class="ctf-if-gf-font-weight">
				<# var fontWeights = ctf_google_fonts[data.value['font-family']]; #>
				<select class="ctf-gf-fw-input">
					<# for ( key in fontWeights ) { #>
						<option value="{{ fontWeights[ key ] }}"<# if ( fontWeights[ key ] === data.value['font-weight'] ) { #>selected<# } #>>{{ fontWeights[ key ] }}</option>
					<# } #>
				</select>
			</div>
			<div class="ctf-if-gf-font-size"></div>
			<div class="ctf-if-gf-line-height"></div>

			<div class="ctf-if-gf-text-decoration"></div>
			<div class="ctf-if-gf-font-style"></div>
			<div class="ctf-if-gf-letter-spacing"></div>
			<div class="ctf-if-gf-word-spacing"></div>
        </div>
