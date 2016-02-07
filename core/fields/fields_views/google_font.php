        <div class="ctf-input-field ctf-input-field-google-font">
        	<div class="ctf-if-gf-text-align clearfix">
        		<div class="ctf-input-field-radio-button clearfix">
        			<label>
						<input type="radio" value="left" name="ctf_radio_input_{{{ data.id }}}_text_align" <# if ( 'left' === data.value['text-align'] ) { #>checked="checked"<# } #> > 
						<span class="ctf-input-radio-button"><i class="fa fa-align-left"></i></span>
					</label>
					<label>
						<input type="radio" value="center" name="ctf_radio_input_{{{ data.id }}}_text_align" <# if ( 'center' === data.value['text-align'] ) { #>checked="checked"<# } #> > 
						<span class="ctf-input-radio-button"><i class="fa fa-align-center"></i></span>
					</label>
					<label>
						<input type="radio" value="right" name="ctf_radio_input_{{{ data.id }}}_text_align" <# if ( 'right' === data.value['text-align'] ) { #>checked="checked"<# } #> > 
						<span class="ctf-input-radio-button"><i class="fa fa-align-right"></i></span>
					</label>
					<label>
						<input type="radio" value="justify" name="ctf_radio_input_{{{ data.id }}}_text_align" <# if ( 'justify' === data.value['text-align'] ) { #>checked="checked"<# } #> > 
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
				<label>Font Family</label>
				<select class="ctf-gf-fw-input">
					<# for ( key in fontWeights ) { #>
						<option value="{{ fontWeights[ key ] }}"<# if ( fontWeights[ key ] === data.value['font-weight'] ) { #>selected<# } #>>{{ fontWeights[ key ] }}</option>
					<# } #>
				</select>
			</div>
			<div class="ctf-if-gf-font-size ctf-input-field-dimension">
				<#
				var fzNumber = parseFloat( data.value['font-size'] );
        		var fzUnit = data.value['font-size'].replace( parseFloat( data.value['font-size'] ), '' );
        		
        		var units = ['px', '%', 'em'];
		        if( ! _.isEmpty(data.choices['units']) ){
		        	units = data.choices['units'];
		        }
				#>
				<label>Font Family</label>
				<div class="ctf-input-dimension-number">
					<input type="number" value="{{ fzNumber }}" min="0" class="ctf-gf-fz-value-input">
				</div>
				<div class="ctf-input-dimension-select">
					<select class="ctf-gf-fz-unit-input">
						<# for ( key in units ) { #>
						<option value="{{ units[ key ] }}"<# if ( units[ key ] === fzUnit ) { #>selected<# } #>>{{ units[ key ] }}</option>
						<# } #>
					</select>
				</div>
			</div>
			<div class="ctf-if-gf-line-height ctf-input-field-dimension">
				<#
				var lhNumber = parseFloat( data.value['line-height'] );
        		var lhUnit = data.value['font-size'].replace( parseFloat( data.value['line-height'] ), '' );
        		
        		var units = ['px', '%', 'em'];
		        if( ! _.isEmpty(data.choices['units']) ){
		        	units = data.choices['units'];
		        }
				#>
				<label>Font Family</label>
				<div class="ctf-input-dimension-number">
					<input type="number" value="{{ lhNumber }}" min="0" class="ctf-gf-lh-value-input">
				</div>
				<div class="ctf-input-dimension-select">
					<select class="ctf-gf-lh-unit-input">
						<# for ( key in units ) { #>
						<option value="{{ units[ key ] }}"<# if ( units[ key ] === lhUnit ) { #>selected<# } #>>{{ units[ key ] }}</option>
						<# } #>
					</select>
				</div>
			</div>

			<div class="ctf-if-gf-text-decoration">
				<label>Font Family</label>
			</div>
			<div class="ctf-if-gf-font-style">
				<label>Font Family</label>
			</div>
			<div class="ctf-if-gf-letter-spacing ctf-input-field-dimension">
				<#
				var lsNumber = parseFloat( data.value['letter-spacing'] );
        		var lsUnit = data.value['font-size'].replace( parseFloat( data.value['letter-spacing'] ), '' );
        		
        		var units = ['px', '%', 'em'];
		        if( ! _.isEmpty(data.choices['units']) ){
		        	units = data.choices['units'];
		        }
				#>
				<label>Font Family</label>
				<div class="ctf-input-dimension-number">
					<input type="number" value="{{ lsNumber }}" min="0" class="ctf-gf-ls-value-input">
				</div>
				<div class="ctf-input-dimension-select">
					<select class="ctf-gf-ls-unit-input">
						<# for ( key in units ) { #>
						<option value="{{ units[ key ] }}"<# if ( units[ key ] === lsUnit ) { #>selected<# } #>>{{ units[ key ] }}</option>
						<# } #>
					</select>
				</div>
			</div>
			<div class="ctf-if-gf-word-spacing ctf-input-field-dimension">
				<#
				var wsNumber = parseFloat( data.value['word-spacing'] );
        		var wsUnit = data.value['font-size'].replace( parseFloat( data.value['word-spacing'] ), '' );
        		
        		var units = ['px', '%', 'em'];
		        if( ! _.isEmpty(data.choices['units']) ){
		        	units = data.choices['units'];
		        }
				#>
				<label>Font Family</label>
				<div class="ctf-input-dimension-number">
					<input type="number" value="{{ wsNumber }}" min="0" class="ctf-gf-ws-value-input">
				</div>
				<div class="ctf-input-dimension-select">
					<select class="ctf-gf-ws-unit-input">
						<# for ( key in units ) { #>
						<option value="{{ units[ key ] }}"<# if ( units[ key ] === wsUnit ) { #>selected<# } #>>{{ units[ key ] }}</option>
						<# } #>
					</select>
				</div>
			</div>
        </div>
