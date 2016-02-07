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
        	stepAttr = 'step="'+data.choices[ 'step' ]+'"';
        }
        #>
        <div class="ctf-input-field ctf-input-field-range">
          <div class="ctf-if-range-cont">
          	<input type="range" value="{{ data.value }}" {{{ miniAttr }}} {{{ maxAttr }}} {{{ stepAttr }}} >
          </div>
          <div class="ctf-if-txt-cont">
          	<input type="number" value="{{ data.value }}" {{{ miniAttr }}} {{{ maxAttr }}} {{{ stepAttr }}} >
          </div>
        </div>
