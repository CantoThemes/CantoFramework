/**
 * KIRKI CONTROL: TEXT
 */

(function( exports, $ ){

	var api = exports.customize;
	api.controlConstructor.ctf_text = api.Control.extend( {
		ready: function() {
			var control = this;
			// console.log(this);
			this.container.on( 'change keyup paste', 'input', function() {
				control.setting.set( jQuery( this ).val() );
			});
		}
	});

	api.controlConstructor.ctf_textarea = api.Control.extend( {
		ready: function() {
			var control = this;
			// console.log(this);
			this.container.on( 'change keyup paste', 'textarea', function() {
				control.setting.set( jQuery( this ).val() );
			});
		}
	});

	api.controlConstructor.ctf_email = api.Control.extend( {
		ready: function() {
			var control = this;
			// console.log(this);
			this.container.on( 'change keyup paste', 'input', function() {
				control.setting.set( jQuery( this ).val() );
			});
		}
	});

	api.controlConstructor.ctf_number = api.Control.extend( {
		ready: function() {
			var control = this;
			
			var numberInput = this.container.find( 'input' ),
				inputStep = numberInput.attr('step');

			if (!inputStep) {
				inputStep = 1
			}

			$( numberInput ).spinner({
				step: inputStep,
				/*spin: function( event, ui ) {
					numberInput.trigger('change');
				}*/
			});

			this.container.on( 'change keyup paste', 'input', function() {
				control.setting.set( jQuery( this ).val() );
			});

			this.container.on( 'click', '.ui-spinner-button', function() {
				control.setting.set( numberInput.val() );
			});
		}
	});

	api.controlConstructor.ctf_url = api.Control.extend( {
		ready: function() {
			var control = this;

			this.container.on( 'change keyup paste', 'input', function() {
				control.setting.set( jQuery( this ).val() );
			});
		}
	});

	api.controlConstructor.ctf_select = api.Control.extend( {
		ready: function() {
			var control = this;
			
			var selectInput = this.container.find( 'select' );

			$( selectInput ).selectize();

			this.container.on( 'change', 'select', function() {
				control.setting.set( jQuery( this ).val() );
			});
		}
	});

	api.controlConstructor.ctf_radio = api.Control.extend( {
		ready: function() {
			var control = this;
			// console.log(this);
			this.container.on( 'change', 'input', function() {
				control.setting.set( jQuery( this ).val() );
			});
		}
	});

	api.controlConstructor.ctf_radio_image = api.Control.extend( {
		ready: function() {
			var control = this;
			// console.log(this);
			this.container.on( 'change', 'input', function() {
				control.setting.set( jQuery( this ).val() );
			});
		}
	});

	api.controlConstructor.ctf_radio_button = api.Control.extend( {
		ready: function() {
			var control = this;
			// console.log(this);
			this.container.on( 'change', 'input', function() {
				control.setting.set( jQuery( this ).val() );
			});
		}
	});
	
	api.controlConstructor.ctf_text_align = api.Control.extend( {
		ready: function() {
			var control = this;
			// console.log(this);
			this.container.on( 'change', 'input', function() {
				control.setting.set( jQuery( this ).val() );
			});
		}
	});


	api.controlConstructor.ctf_checkbox = api.Control.extend( {
		ready: function() {
			var control = this,
				mainContainer = this.container;
			// console.log(this);
			this.container.on( 'change', 'input[type="checkbox"]', function() {
				
				var allVal = '';
				mainContainer.find('input[type="checkbox"]:checked').each(function (i) {
					if (i) {
						allVal += '|';
					}
					allVal += $(this).val();
				});
				control.setting.set( allVal );
			});
		}
	});

	api.controlConstructor.ctf_checkbox_image = api.Control.extend( {
		ready: function() {
			var control = this,
				mainContainer = this.container;
			// console.log(this);
			this.container.on( 'change', 'input[type="checkbox"]', function() {
				
				var allVal = '';
				mainContainer.find('input[type="checkbox"]:checked').each(function (i) {
					if (i) {
						allVal += '|';
					}
					allVal += $(this).val();
				});
				control.setting.set( allVal );
			});
		}
	});

	api.controlConstructor.ctf_checkbox_button = api.Control.extend( {
		ready: function() {
			var control = this,
				mainContainer = this.container;
			// console.log(this);
			this.container.on( 'change', 'input[type="checkbox"]', function() {
				
				var allVal = '';
				mainContainer.find('input[type="checkbox"]:checked').each(function (i) {
					if (i) {
						allVal += '|';
					}
					allVal += $(this).val();
				});
				control.setting.set( allVal );
			});
		}
	});

	// Multi Text Controll
	api.controlConstructor.ctf_text_multi = api.Control.extend( {
		ready: function() {
			var control = this,
				mainContainer = this.container,
				inputItemsContainer = mainContainer.find('.ctf-mt-input-container'),
				inputItemsTmpl = mainContainer.find('.ctf-mt-tmpl'),
				inputItemAddNew = mainContainer.find('.ctf-mt-add-new'),
				inputForEvent = mainContainer.find('.ctf-mt-input-container input[type="text"]');

			inputItemAddNew.on('click', function (e) {
				e.preventDefault();
				var newInput = $(inputItemsTmpl.clone());
				newInput.removeClass('ctf-hidden');
				newInput.removeClass('ctf-mt-tmpl');
				inputItemsContainer.append(newInput);

				mainContainer.trigger('change');
				
			});

			this.container.on( 'click', '.ctf-mt-input-container .ctf-mt-input-delete', function(e) {
				e.preventDefault();

				var thisContainer = $(this).parent('.ctf-mt-input-item');

				thisContainer.remove();

				mainContainer.trigger('change');

			});

			this.container.on( 'change keyup paste', '.ctf-mt-input-container input[type="text"]', function() {
				
				mainContainer.trigger('change');

			});

			this.container.on( 'change', function() {
				
				var allVal = [];
				mainContainer.find('.ctf-mt-input-container input[type="text"]').each(function (i) {
					allVal.push($(this).val());
				});
				control.setting.set( allVal );

			});
		}
	});

	api.controlConstructor.ctf_color = api.Control.extend( {
		ready: function() {
			var control = this,
				colorInput = control.container.find('input.ctf-color-field');
			
			colorInput.wpColorPicker({
				change: function(event, ui) {
					control.setting.set( colorInput.val() );
				}
			});
		}
	});

	api.controlConstructor.ctf_color_rgba = api.Control.extend( {
		ready: function() {
			var control = this,
				colorInput = control.container.find('input.ctf-rgba-color-field'),
				value = colorInput.val().replace(/\s+/g, '');


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
						control.setting.set( '' );
					},
					change: function(event, ui) {
						// send ajax request to wp.customizer to enable Save & Publish button
						var _new_value = colorInput.val();

						control.setting.set( _new_value );
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
						control.setting.set( _new_value );
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
						alphaSlider.find('.ui-slider-handle').text(iris._color._alpha*100);
					}
				});
			}
		}
	});
	
	api.controlConstructor.ctf_dimension = api.Control.extend( {
		ready: function() {
			var control = this;
			
			var numberInput = this.container.find( 'input' ),
				selectUnit = this.container.find( 'select' ),
				inputStep = numberInput.attr('step'),
				newValue = {};

			if (!inputStep) {
				inputStep = 1;
			}

			$( numberInput ).spinner({
				step: inputStep
			});

			this.container.on( 'change keyup paste', 'input', function() {
				control.setting.set( numberInput.val()+selectUnit.val() );
			});

			this.container.on( 'click', '.ui-spinner-button', function() {
				control.setting.set( numberInput.val()+selectUnit.val() );
			});


			$( selectUnit ).selectize();

			this.container.on( 'change', 'select', function() {
				control.setting.set( numberInput.val()+selectUnit.val() );
			});
		}
	});


	api.controlConstructor.ctf_range = api.Control.extend( {
		ready: function() {
			var control = this,
				rangeInput = this.container.find('input[type="range"]'),
				textInput = this.container.find('input[type="number"]'),
				inputStep = textInput.attr('step');

			if (!inputStep) {
				inputStep = 1;
			}

			$( textInput ).spinner({
				step: inputStep
			});

			this.container.on( 'change keyup paste', 'input[type="number"]', function() {
				rangeInput.val(textInput.val());
				control.setting.set( textInput.val() );
			});

			this.container.on( 'click', '.ui-spinner-button', function() {
				rangeInput.val(textInput.val());
				control.setting.set( textInput.val() );
			});

			this.container.on( 'change keyup', 'input[type="range"]', function() {
				textInput.val($( this ).val());
				control.setting.set( $( this ).val() );
			});
		}
	});

	api.controlConstructor.ctf_google_font = api.Control.extend( {
		ready: function() {
			var control = this,
				allNewVals = {},
				ffInput = control.container.find('.ctf-gf-ff-input'),
				fwInput = control.container.find('.ctf-gf-fw-input'),
				fzValueInput = control.container.find('.ctf-gf-fz-value-input'),
				fzUnitInput = control.container.find('.ctf-gf-fz-unit-input'),
				lhValueInput = control.container.find('.ctf-gf-lh-value-input'),
				lhUnitInput = control.container.find('.ctf-gf-lh-unit-input'),
				lsValueInput = control.container.find('.ctf-gf-ls-value-input'),
				lsUnitInput = control.container.find('.ctf-gf-ls-unit-input'),
				wsValueInput = control.container.find('.ctf-gf-ws-value-input'),
				wsUnitInput = control.container.find('.ctf-gf-ws-unit-input');


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

			console.log(ffInput.size());

			if (ffInput.size()) {
				allNewVals['font-family'] = control.setting._value['font-family'];
			}

			if (fwInput.size()) {
				allNewVals['font-weight'] = control.setting._value['font-weight'];
			}

			if (fzValueInput.size()) {
				allNewVals['font-size'] = control.setting._value['font-size'];
			}

			if (lhValueInput.size()) {
				allNewVals['line-height'] = control.setting._value['line-height'];
			}

			if (lsValueInput.size()) {
				allNewVals['letter-spacing'] = control.setting._value['letter-spacing'];
			}

			if (wsValueInput.size()) {
				allNewVals['word-spacing'] = control.setting._value['word-spacing'];
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

					// setTimeout(function () {
					// 	$( fwInput ).selectize();
					// }, 5);
				}

				allNewVals['font-family'] = ffInput.val();

				control.setting.set( allNewVals );

				api.previewer.refresh();
			});

			// fwInput.on( 'change', function() {
			// 	allNewVals['font-weight'] = fwInput.val();
			// 	control.setting.set( allNewVals );

			// 	api.previewer.refresh();
			// });

			this.container.on( 'change keyup paste', 'input[type="number"]', function() {
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

				control.setting.set( allNewVals );

				api.previewer.refresh();
			});

			this.container.on( 'click', '.ui-spinner-button', function() {
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

				control.setting.set( allNewVals );

				api.previewer.refresh();
			});

			this.container.on( 'change', 'select:not(.ctf-gf-ff-input)', function() {
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

				control.setting.set( allNewVals );

				console.log('Other Called');

				api.previewer.refresh();
			});


			// console.log(this);
			// this.container.on( 'change keyup paste', 'input', function() {
			// 	control.setting.set( jQuery( this ).val() );
			// });
		}
	});


	api.controlConstructor.ctf_font_style = api.Control.extend( {
		ready: function() {
			var control = this,
				allVals = {};

			this.container.on( 'change', 'input[type="checkbox"]', function() {
				var inputBold = control.container.find( 'input.ctf-fstl-bold:checked' ),
					inputItalic = control.container.find( 'input.ctf-fstl-italic:checked' ),
					inputUnderline = control.container.find( 'input.ctf-fstl-underline:checked' ),
					inputStrikethrough = control.container.find( 'input.ctf-fstl-strikethrough:checked' );

				if (inputBold.size()) {
					allVals['bold'] = 'on';
				} else {
					allVals['bold'] = 'off';
				}

				if (inputItalic.size()) {
					allVals['italic'] = 'on';
				} else {
					allVals['italic'] = 'off';
				}

				if (inputUnderline.size()) {
					allVals['underline'] = 'on';
				} else {
					allVals['underline'] = 'off';
				}

				if (inputStrikethrough.size()) {
					allVals['strikethrough'] = 'on';
				} else {
					allVals['strikethrough'] = 'off';
				}
				
				control.setting.set( allVals );

				api.previewer.refresh();
			});
		}
	});
	
	api.controlConstructor.ctf_icon = api.Control.extend( {
		ready: function() {
			var control = this,
				iconPicker = control.container.find('.ct-iconpicker'),
				iconHolerIcon = control.container.find( '.ct-iconpicker .ct-ip-holder .ct-ip-icon' ),
				iconPickerPopup = control.container.find( '.ct-iconpicker .ct-ip-popup' ),
				inputField = control.container.find('.ct-icon-value'),
				iconHolderI = control.container.find('.ct-ip-icon i'),
				iconPickerPopupUl = control.container.find('.ct-iconpicker .ct-ip-popup ul'),
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
		}
	});
	
	api.controlConstructor.ctf_image = api.Control.extend( {
		ready: function() {
			var control = this,
				addBtn = control.container.find('.image-upload-button'),
				removeBtn = control.container.find('.image-remove-button'),
				changeBtn = control.container.find('.image-change-button'),
				ImageView = control.container.find('.ctf-ifi-view-image'),
				inputData = control.container.find('.ctf-ii-data-field'),
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
				
				
				control.setting.set( allVals );
		      
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
				
				control.setting.set( allVals );
			});
		}
	});
	
	api.controlConstructor.ctf_editor = api.Control.extend( {
		ready: function() {
			var init,
				id,
				wrap,
				control = this,
				editorSelect = control.container.find('.wp-editor-wrap'),
				textareaSelector = control.container.find('.wp-editor-area');
				
			wrap = tinymce.$( '#'+editorSelect.attr('id') );
			
			console.log(control.params.choices);
			
			tinymce.init( {
				selector: '#'+textareaSelector.attr('id'),
				resize: 'vertical',
				menubar: false,
				toolbar1: 'bold,italic,underline,blockquote,strikethrough,bullist,numlist,alignleft,aligncenter,alignright,undo,redo,link,unlink,fullscreen',
				theme: 'modern',
				skin: 'lightgray',
				relative_urls: false,
				remove_script_host: false,
				convert_urls: false,
				browser_spellcheck: true,
				fix_list_elements: true,
				entities: '38,amp,60,lt,62,gt',
				entity_encoding: 'raw',
				keep_styles: false,
				content_css: control.params.choices.content_css
			} );
			
			// console.log(wrap);
			
			
			
		}
	});

/*	api.controlConstructor.text = api.Control.extend( {
		ready: function() {
			var control = this;
			// console.log(this);
			this.container.on( 'change keyup paste', 'input', function() {
				control.setting.set( jQuery( this ).val() );
			});
		}
	});*/

})( wp, jQuery );