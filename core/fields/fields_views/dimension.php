        <#
        var miniAttr = '';
        if (! _.isUndefined(data.choices[ 'min' ]) ){
        	miniAttr = 'min="'+data.choices[ 'min' ]+'"';
        }

        var maxAttr = '';
        if (! _.isUndefined(data.choices[ 'max' ]) ){
        	maxAttr = 'max="'+data.choices[ 'max' ]+'"';
        }

        var stepAttr = '';
        if (! _.isUndefined(data.choices[ 'step' ]) ){
        	stepAttr = 'data-step="'+data.choices[ 'step' ]+'"';
        }
        #>
        <div class="ctf-input-field ctf-input-field-number">
          <input type="number" value="{{ data.value['value'] }}" {{{ miniAttr }}} {{{ maxAttr }}} {{{ stepAttr }}} {{{ data.link }}}>
          <select>
      			<# for ( key in data.choices['units'] ) { #>
      				<option value="{{ key }}"<# if ( key === data.value['unit'] ) { #>selected<# } #>>{{ data.choices['units'][ key ] }}</option>
      			<# } #>
      		</select>
        </div>
