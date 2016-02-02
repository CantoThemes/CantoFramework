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
				inputStep = numberInput.data('step');

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

				var rgbaColorInput = colorInput.wpColorPicker({ // change some things with the color picker
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

				console.log(rgbaColorInput.data().wpWpColorPicker.button);

				$('<div class="ctf-alpha-container"><div class="slider-alpha"></div><div class="transparency"></div></div>').appendTo(colorInput.parents('.wp-picker-container'));

				var $alpha_slider = colorInput.parents('.wp-picker-container:first').find('.slider-alpha');

				// if in format RGBA - grab A channel value
				if (value.match(/rgba\(\d+\,\d+\,\d+\,([^\)]+)\)/)) {
					var alpha_val = parseFloat(value.match(/rgba\(\d+\,\d+\,\d+\,([^\)]+)\)/)[1]) * 100;
					var alpha_val = parseInt(alpha_val);
				} else {
					var alpha_val = 100;
				}
				$alpha_slider.slider({
					slide: function(event, ui) {
						$(this).find('.ui-slider-handle').text(ui.value); // show value on slider handle
						// send ajax request to wp.customizer to enable Save & Publish button
						var _new_value = colorInput.val();
						control.setting.set( _new_value );
					},
					create: function(event, ui) {
						var v = $(this).slider('value');
						$(this).find('.ui-slider-handle').text(v);
					},
					value: alpha_val,
					range: "max",
					step: 1,
					min: 1,
					max: 100
				}); // slider
				$alpha_slider.slider().on('slidechange', function(event, ui) {
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
						var iris = colorInput.data('a8cIris'),
							color_picker = colorInput.data('wpWpColorPicker');
	
						$alpha_slider.slider( "value", iris._color._alpha*100 );
						$alpha_slider.find('.ui-slider-handle').text(iris._color._alpha*100);
					}
				});
			}
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