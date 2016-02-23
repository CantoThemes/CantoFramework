
window.CTF_Core = window.CTF_Core || {};

(function( exports, $ ){

    CTF_Core.colorPicker = function( obj  ){

        var callback = {},
            colorInput = obj.find('input.ctf-color-field');

        callback.change = function ( event, ui ) {};

        colorInput.wpColorPicker({
            change: callback.change
        });

        return callback;
    };

    CTF_Core.rgbaColorPicker = function( obj  ){


        var callback = {},
            colorInput = obj.find('input.ctf-rgba-color-field'),
            value = colorInput.val().replace(/\s+/g, '');

        callback.change = function ( event, ui ) {};

        if ( typeof Color !== "undefined" ) {
            Color.prototype.toString = function(remove_alpha) {
                if (remove_alpha == 'no-alpha') {
                    return this.toCSS('rgba', '1').replace(/\s+/g, '');
                }
                if (this._alpha < 1) {
                    return this.toCSS('rgba', this._alpha).replace(/\s+/g, '');
                }
                var hex = parseInt(this._color, 10).toString(16);
                if (this.error) return '';
                if (hex.length < 6) {
                    for (var i = 6 - hex.length - 1; i >= 0; i--) {
                        hex = '0' + hex;
                    }
                }
                return '#' + hex;
            }

            colorInput.wpColorPicker({ // change some things with the color picker
                clear: function(event, ui) {
                    // TODO reset Alpha Slider to 100
                    colorInput.val('');
                    // control.setting.set( '' );
                },
                change: function(event, ui) {
                    // send ajax request to wp.customizer to enable Save & Publish button
                    var _new_value = colorInput.val();

                    // control.setting.set( _new_value );
                    // change the background color of our transparency container whenever a color is updated
                    var $transparency = colorInput.parents('.wp-picker-container:first').find('.transparency');
                    // we only want to show the color at 100% alpha
                    $transparency.css('backgroundColor', ui.color.toString('no-alpha'));
                },
            });


            $('<div class="ctf-alpha-container"><div class="ctf-alpha-container-inner"><div class="slider-alpha"></div><div class="transparency"></div></div></div>').appendTo(colorInput.parents('.wp-picker-container'));

            var alphaSlider = colorInput.parents('.wp-picker-container:first').find('.slider-alpha');

            // if in format RGBA - grab A channel value
            if (value.match(/rgba\(\d+\,\d+\,\d+\,([^\)]+)\)/)) {
                var alpha_val = parseFloat(value.match(/rgba\(\d+\,\d+\,\d+\,([^\)]+)\)/)[1]) * 100;
                var alpha_val = parseInt(alpha_val);
            } else {
                var alpha_val = 100;
            }
            alphaSlider.slider({
                slide: function(event, ui) {
                    $(this).find('.ui-slider-handle').html('<span class="ctf-rgba-val-pop">'+(ui.value / 100)+'</span>'); // show value on slider handle
                    // send ajax request to wp.customizer to enable Save & Publish button
                    var _new_value = colorInput.val();
                    // control.setting.set( _new_value );
                },
                create: function(event, ui) {
                    var v = $(this).slider('value'),
                        bgColor = colorInput.parents('.wp-picker-container:first').find('.transparency'),
                        iris = colorInput.data('a8cIris');
                    bgColor.css('backgroundColor', iris._color.toString('no-alpha'));

                    $(this).find('.ui-slider-handle').html('<span class="ctf-rgba-val-pop">'+(v / 100)+'</span>');
                },
                value: alpha_val,
                range: "max",
                step: 1,
                min: 1,
                max: 100
            }); // slider
            alphaSlider.slider().on('slidechange', function(event, ui) {
                var new_alpha_val = parseFloat(ui.value),
                    iris = colorInput.data('a8cIris'),
                    color_picker = colorInput.data('wpWpColorPicker');
                iris._color._alpha = new_alpha_val / 100.0;
                colorInput.val(iris._color.toString());
                color_picker.toggler.css({
                    backgroundColor: colorInput.val()
                });
                // fix relationship between alpha slider and the 'side slider not updating.
                var get_val = colorInput.val();
                $(colorInput).wpColorPicker('color', get_val);
            });
            
            
            colorInput.data('wpWpColorPicker').button.on( 'click', function() {
                
                if($(this).hasClass( 'wp-picker-default' )){
                    var iris = colorInput.data('a8cIris');

                    alphaSlider.slider( "value", iris._color._alpha*100 );
                    alphaSlider.find('.ui-slider-handle').html('<span class="ctf-rgba-val-pop">'+(iris._color._alpha)+'</span>');
                }
            });
        }

        return callback;
    };

    CTF_Core.numberInput = function ( obj ) {
        var numberInput = obj.find( 'input' ),
            inputStep = numberInput.attr('step');

        if (!inputStep) {
            inputStep = 1
        }

        $( numberInput ).spinner({
            step: inputStep
        });
    };

    CTF_Core.iconInput = function ( obj ) {
        var control = this,
            iconPicker = obj.find('.ct-iconpicker'),
            iconHolerIcon = obj.find( '.ct-iconpicker .ct-ip-holder .ct-ip-icon' ),
            iconPickerPopup = obj.find( '.ct-iconpicker .ct-ip-popup' ),
            inputField = obj.find('.ct-icon-value'),
            iconHolderI = obj.find('.ct-ip-icon i'),
            iconPickerPopupUl = obj.find('.ct-iconpicker .ct-ip-popup ul'),
            inputSearch = iconPickerPopup.find('input.ct-ip-search-input');


        iconHolerIcon.on('click', function(){
            iconPickerPopup.slideToggle();
            
            inputSearch.val('');
            inputSearch.trigger('change');
        });
        
        iconPickerPopup.on('change keyup paste', 'input.ct-ip-search-input', function (e) {
            var searchVal = $(this).val();
            
            if( _.isEmpty(searchVal) ){
                iconPickerPopupUl.find('li').removeClass('ctf-hidden');
            } else {
                iconPickerPopupUl.find('li').addClass('ctf-hidden');
            
                var found = iconPickerPopupUl.find('li a[data-tooltip*="'+searchVal.toLowerCase()+'"]');
                found.parent('li').removeClass('ctf-hidden');
            }
        });
        
        iconPickerPopup.on('click', 'a', function (e) {
            e.preventDefault();
            
            var iconClass = $(this).data('icon');
            
            iconHolderI.attr('class', '');
            iconHolderI.addClass(iconClass);
            inputField.val(iconClass);
            
            iconPickerPopup.find('.ctf-selected').removeClass('ctf-selected');
            
            $(this).addClass('ctf-selected');
            
            control.setting.set( iconClass );
        });
        
        $(document).mouseup(function (e){
            if ( ( ! iconPicker.is(e.target) && iconPicker.has(e.target).length === 0 ) ){
                iconPickerPopup.slideUp();
                
                inputSearch.val('');
                inputSearch.trigger('change');
            }
        });
    };


    CTF_Core.selectInput = function ( obj ) {
        var selectInput = obj.find( 'select' );

        $( selectInput ).selectize();
    };


    CTF_Core.textMultiInput = function ( obj ) {
        var inputItemsContainer = obj.find('.ctf-mt-input-container'),
            inputItemsTmpl = obj.find('.ctf-mt-tmpl'),
            inputItemAddNew = obj.find('.ctf-mt-add-new');

        inputItemAddNew.on('click', function (e) {
            e.preventDefault();
            var newInput = $(inputItemsTmpl.clone());
            newInput.removeClass('ctf-hidden');
            newInput.removeClass('ctf-mt-tmpl');
            newInput.find('input[type="text"]').attr('name', $(this).data('name'));
            inputItemsContainer.append(newInput);
            
        });

        inputItemsContainer.on( 'click', '.ctf-mt-input-delete', function(e) {
            e.preventDefault();

            var thisContainer = $(this).parent('.ctf-mt-input-item');

            thisContainer.remove();

        });
    };

    CTF_Core.dimensionInput = function ( obj ) {
        var numberInput = obj.find( 'input' ),
            selectUnit = obj.find( 'select' ),
            inputStep = numberInput.attr('step');

        if (!inputStep) {
            inputStep = 1;
        }

        $( numberInput ).spinner({
            step: inputStep
        });


        $( selectUnit ).selectize();
    };

    CTF_Core.rangeInput = function ( obj ) {
        var rangeInput = obj.find('input[type="range"]'),
            textInput = obj.find('input[type="number"]'),
            inputStep = textInput.attr('step');

        if (!inputStep) {
            inputStep = 1;
        }

        $( textInput ).spinner({
            step: inputStep
        });

        obj.on( 'change keyup paste', 'input[type="number"]', function() {
            rangeInput.val(textInput.val());
        });

        obj.on( 'click', '.ui-spinner-button', function() {
            rangeInput.val(textInput.val());
        });

        obj.on( 'change keyup', 'input[type="range"]', function() {
            textInput.val($( this ).val());
        });
    };
    
    
    CTF_Core.imageInput = function ( obj ) {
        var control = this,
			addBtn = obj.find('.image-upload-button'),
			removeBtn = obj.find('.image-remove-button'),
			changeBtn = obj.find('.image-change-button'),
			ImageView = obj.find('.ctf-ifi-view-image'),
			inputData = obj.find('.ctf-ii-data-field'),
			frame,
			allVals = {};
			
		// Create a new media frame
		frame = wp.media({
			title: 'Select or Upload Media Of Your Chosen Persuasion',
			button: {
				text: 'Use this Image'
			},
			library: {
				type: 'image'
			},
			multiple: false  // Set to true to allow multiple files to be selected
		});
		
		// When an image is selected in the media frame...
	    frame.on( 'select', function() {
	      
			// Get media attachment details from the frame state
			var attachment = frame.state().get('selection').first().toJSON();
			
			ImageView.find('img').remove();
			ImageView.append('<img class="ctf-ifi-vimg" src="'+attachment.sizes.thumbnail.url+'" alt="'+attachment.alt+'" />');
			
			allVals = {};
			
            allVals['thumbnail'] = attachment.sizes.thumbnail.url;
			allVals['url'] = attachment.url;
			allVals['id'] = attachment.id;
			allVals['title'] = attachment.title;
			allVals['alt'] = attachment.alt;
			allVals['width'] = attachment.width;
			allVals['height'] = attachment.height;
			
			addBtn.addClass('ctf-hidden');
			
			removeBtn.removeClass('ctf-hidden');
			changeBtn.removeClass('ctf-hidden');
			
			inputData.val(JSON.stringify(allVals));
			
			

	    });
		
		addBtn.on( 'click', function() {

			frame.open();
		});
		
		changeBtn.on( 'click', function() {

			frame.open();
		});
		
		removeBtn.on( 'click', function() {
			ImageView.find('img').remove();
			
			allVals = {};
			
			addBtn.removeClass('ctf-hidden');
		      
		    removeBtn.addClass('ctf-hidden');
		    changeBtn.addClass('ctf-hidden');
			
		});
    };
    
    CTF_Core.googleFontInput = function ( obj ) {
        var ffInput = obj.find('.ctf-gf-ff-input'),
			fwInput = obj.find('.ctf-gf-fw-input'),
			fzValueInput = obj.find('.ctf-gf-fz-value-input'),
			fzUnitInput = obj.find('.ctf-gf-fz-unit-input'),
			lhValueInput = obj.find('.ctf-gf-lh-value-input'),
			lhUnitInput = obj.find('.ctf-gf-lh-unit-input'),
			lsValueInput = obj.find('.ctf-gf-ls-value-input'),
			lsUnitInput = obj.find('.ctf-gf-ls-unit-input'),
			wsValueInput = obj.find('.ctf-gf-ws-value-input'),
			wsUnitInput = obj.find('.ctf-gf-ws-unit-input'),
			inputValInput = obj.find('.ctf-gf-input-val'),
			allNewVals = {};


		$( ffInput ).selectize();
		$( fwInput ).selectize();

		$( fzUnitInput ).selectize();
		$( lhUnitInput ).selectize();
		$( lsUnitInput ).selectize();
		$( wsUnitInput ).selectize();

		$( fzValueInput ).spinner();
		$( lhValueInput ).spinner();
		$( lsValueInput ).spinner();
		$( wsValueInput ).spinner();
		
		if (ffInput.size()) {
			allNewVals['font-family'] = ffInput.val();
		}

		if (fwInput.size()) {
			allNewVals['font-weight'] = fwInput.val();
		}

		if (fzValueInput.size()) {
			allNewVals['font-size'] = fzValueInput.val()+fzUnitInput.val();
		}

		if (lhValueInput.size()) {
			allNewVals['line-height'] = lhValueInput.val()+lhUnitInput.val();
		}

		if (lsValueInput.size()) {
			allNewVals['letter-spacing'] = lsValueInput.val()+lsUnitInput.val();
		}

		if (wsValueInput.size()) {
			allNewVals['word-spacing'] = wsValueInput.val()+wsUnitInput.val();
		}



		// console.log();

		ffInput.on( 'change', function() {
			var fwInputVal = fwInput.val(),
				fwArray = ctf_google_fonts[ffInput.val()], /* global ctf_google_fonts */
				fwNewOption = '';

			// control.renderContent()

			if ( ! _.isEmpty( fwArray ) ) {
				_.each(fwArray, function ( value, key, list ) {
					var selected = '';
					if (fwInputVal == value) {
						selected = 'selected';
					};
					fwNewOption += '<option value="'+value+'" '+selected+'>'+value+'</option>';
				});

				

				var refreshData = $(fwInput).data('selectize');

				refreshData.destroy();
				
				fwInput.html(fwNewOption);

				$( fwInput ).selectize();

			}
			
			allNewVals['font-family'] = ffInput.val();
			
			inputValInput.val( JSON.stringify(allNewVals) );
		});
		
		obj.on( 'change keyup paste', 'input[type="number"]', function() {
			if (ffInput.size()) {
				allNewVals['font-family'] = ffInput.val();
			}

			if (fwInput.size()) {
				allNewVals['font-weight'] = fwInput.val();
			}

			if (fzValueInput.size()) {
				allNewVals['font-size'] = fzValueInput.val()+fzUnitInput.val();
			}

			if (lhValueInput.size()) {
				allNewVals['line-height'] = lhValueInput.val()+lhUnitInput.val();
			}

			if (lsValueInput.size()) {
				allNewVals['letter-spacing'] = lsValueInput.val()+lsUnitInput.val();
			}

			if (wsValueInput.size()) {
				allNewVals['word-spacing'] = wsValueInput.val()+wsUnitInput.val();
			}
            inputValInput.val( JSON.stringify(allNewVals) );
		});

		obj.on( 'click', '.ui-spinner-button', function() {
			if (ffInput.size()) {
				allNewVals['font-family'] = ffInput.val();
			}

			if (fwInput.size()) {
				allNewVals['font-weight'] = fwInput.val();
			}

			if (fzValueInput.size()) {
				allNewVals['font-size'] = fzValueInput.val()+fzUnitInput.val();
			}

			if (lhValueInput.size()) {
				allNewVals['line-height'] = lhValueInput.val()+lhUnitInput.val();
			}

			if (lsValueInput.size()) {
				allNewVals['letter-spacing'] = lsValueInput.val()+lsUnitInput.val();
			}

			if (wsValueInput.size()) {
				allNewVals['word-spacing'] = wsValueInput.val()+wsUnitInput.val();
			}

            inputValInput.val( JSON.stringify(allNewVals) );
		});

		obj.on( 'change', 'select:not(.ctf-gf-ff-input)', function() {
			if (ffInput.size()) {
				allNewVals['font-family'] = ffInput.val();
			}

			if (fwInput.size()) {
				allNewVals['font-weight'] = fwInput.val();
			}

			if (fzValueInput.size()) {
				allNewVals['font-size'] = fzValueInput.val()+fzUnitInput.val();
			}

			if (lhValueInput.size()) {
				allNewVals['line-height'] = lhValueInput.val()+lhUnitInput.val();
			}

			if (lsValueInput.size()) {
				allNewVals['letter-spacing'] = lsValueInput.val()+lsUnitInput.val();
			}

			if (wsValueInput.size()) {
				allNewVals['word-spacing'] = wsValueInput.val()+wsUnitInput.val();
			}
			
			inputValInput.val( JSON.stringify(allNewVals) );
		});
    };
    
})( wp, jQuery );