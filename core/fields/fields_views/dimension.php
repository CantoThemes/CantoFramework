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

        var number = parseFloat( data.value );
        var unit = data.value.replace( parseFloat( data.value ), '' );

        var units = ['px', '%', 'em'];
        if( ! _.isEmpty(data.choices['units']) ){
          units = data.choices['units'];
        }
        #>
        <div class="ctf-input-field ctf-input-field-dimension">
          <div class="ctf-input-dimension-number">
            <input type="number" value="{{ number }}" {{{ miniAttr }}} {{{ maxAttr }}} {{{ stepAttr }}} {{{ data.link }}}>
          </div>
          <div class="ctf-input-dimension-select">
            <select>
              <# for ( key in units ) { #>
                <option value="{{ units[ key ] }}"<# if ( units[ key ] === unit ) { #>selected<# } #>>{{ units[ key ] }}</option>
              <# } #>
            </select>
          </div>
          
          
        </div>
