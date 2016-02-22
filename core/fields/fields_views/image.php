        <#
        
          var addbtnHiddenClass = '';
          var hiddenClass = '';
          
          if ( _.isEmpty(data.value['url']) ) {
            hiddenClass = 'ctf-hidden';
          } else {
            addbtnHiddenClass = 'ctf-hidden';
          }

          
        #>
        <div class="ctf-input-field ctf-input-field-image clearfix">
          <input type="hidden" class="ctf-ii-data-field" value="{{ JSON.stringify(data.value) }}" {{{ data.link }}} >
          <div class="ctf-ifi-view-image">
            <# if ( ! _.isEmpty(data.value['url']) ) { #>
              <img class="" src="{{ data.value['url'] }}" alt="" />
            <# } #>
          </div>
          <div class="ctf-ifi-btn-set">
            <button type="button" class="button image-change-button {{ hiddenClass }}">Change Image</button>
            <button type="button" class="button image-remove-button {{ hiddenClass }}">Remove Image</button>
          </div>
          
          <button type="button" class="button image-upload-button {{ addbtnHiddenClass }}">Add Image</button>
          
        </div>
