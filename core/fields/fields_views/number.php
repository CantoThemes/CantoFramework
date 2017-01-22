        <#

        var miniAttr = '';
        if ( !_.isUndefined(data.choices) && !_.isUndefined(data.choices[ 'min' ]) ){
        	miniAttr = 'min="'+data.choices[ 'min' ]+'"';
        }

        var maxAttr = '';
        if ( !_.isUndefined(data.choices) && !_.isUndefined(data.choices[ 'max' ]) ){
        	maxAttr = 'max="'+data.choices[ 'max' ]+'"';
        }

        var stepAttr = '';
        if ( !_.isUndefined(data.choices) && !_.isUndefined(data.choices[ 'step' ]) ){
        	stepAttr = 'step="'+data.choices[ 'step' ]+'"';
        }

        if( ! _.isEmpty(data.value) ){
            value = 'value="'+data.value+'"';
        }
        #>
        <div class="ctf-input-field ctf-input-field-number">
          <input type="number" {{{ value }}} {{{ miniAttr }}} {{{ maxAttr }}} {{{ stepAttr }}} {{{ data.link }}}>
        </div>
