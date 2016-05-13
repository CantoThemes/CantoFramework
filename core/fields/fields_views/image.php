        <#
        
          var addbtnHiddenClass = '';
          var hiddenClass = '';
          
          if ( _.isEmpty(data.value['url']) ) {
            hiddenClass = 'ctf-hidden';
          } else {
            addbtnHiddenClass = 'ctf-hidden';
          }

          var imgVal = '';
          if ( typeof data.value != 'undefined'){
            if( _.isEmpty(data.value['thumbnail']) ) {
              imgVal = data.value['url'];
            } else {
              imgVal = data.value['thumbnail'];
            }
          }

          
        #>
        <div class="ctf-input-field ctf-input-field-image clearfix">
          <input type="hidden" class="ctf-ii-data-field" value="{{ JSON.stringify(data.value) }}" {{{ data.link }}} >
          <div class="ctf-ifi-view-image">
            <# if ( ! _.isEmpty(imgVal) ) { #>
              <img class="" src="{{ imgVal }}" alt="" />
            <# } #>
          </div>
          <div class="ctf-ifi-btn-set">
            <button type="button" class="ctf-btn image-change-button {{ hiddenClass }}">Change Image</button>
            <button type="button" class="ctf-btn image-remove-button {{ hiddenClass }}">Remove Image</button>
          </div>
          
          <button type="button" class="ctf-btn image-upload-button {{ addbtnHiddenClass }}">Add Image</button>
          
        </div>
