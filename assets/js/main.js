/* global CTF_Core */
window.CTF_Core = window.CTF_Core || {};

(function( exports, $ ){
    "use strict";
    
    // Shared empty constructor function to aid in prototype-chain creation.
	var ctor = function() {};
    
    /**
	 * Helper function to correctly set up the prototype chain, for subclasses.
	 * Similar to `goog.inherits`, but uses a hash of prototype properties and
	 * class properties to be extended.
	 *
	 * @param  object parent      Parent class constructor to inherit from.
	 * @param  object protoProps  Properties to apply to the prototype for use as class instance properties.
	 * @param  object staticProps Properties to apply directly to the class constructor.
	 * @return child              The subclassed constructor.
	 */
	var inherits = function( parent, protoProps, staticProps ) {
		var child;

		// The constructor function for the new subclass is either defined by you
		// (the "constructor" property in your `extend` definition), or defaulted
		// by us to simply call `super()`.
		if ( protoProps && protoProps.hasOwnProperty( 'constructor' ) ) {
			child = protoProps.constructor;
		} else {
			child = function() {
				// Storing the result `super()` before returning the value
				// prevents a bug in Opera where, if the constructor returns
				// a function, Opera will reject the return value in favor of
				// the original object. This causes all sorts of trouble.
				var result = parent.apply( this, arguments );
				return result;
			};
		}

		// Inherit class (static) properties from parent.
		$.extend( child, parent );

		// Set the prototype chain to inherit from `parent`, without calling
		// `parent`'s constructor function.
		ctor.prototype  = parent.prototype;
		child.prototype = new ctor();

		// Add prototype properties (instance properties) to the subclass,
		// if supplied.
		if ( protoProps )
			$.extend( child.prototype, protoProps );

		// Add static properties to the constructor function, if supplied.
		if ( staticProps )
			$.extend( child, staticProps );

		// Correctly set child's `prototype.constructor`.
		child.prototype.constructor = child;

		// Set a convenience property in case the parent's prototype is needed later.
		child.__super__ = parent.prototype;

		return child;
	};
    
   
   /**
	 * Base class for object inheritance.
	 */
	CTF_Core.Class = function( applicator, argsArray, options ) {
		var magic, args = arguments;

		if ( applicator && argsArray && CTF_Core.Class.applicator === applicator ) {
			args = argsArray;
			$.extend( this, options || {} );
		}

		magic = this;

		/*
		 * If the class has a method called "instance",
		 * the return value from the class' constructor will be a function that
		 * calls the "instance" method.
		 *
		 * It is also an object that has properties and methods inside it.
		 */
		if ( this.instance ) {
			magic = function() {
				return magic.instance.apply( magic, arguments );
			};

			$.extend( magic, this );
		}

		magic.initialize.apply( magic, args );
		return magic;
	};
	
	/**
	 * Creates a subclass of the class.
	 *
	 * @param  object protoProps  Properties to apply to the prototype.
	 * @param  object staticProps Properties to apply directly to the class.
	 * @return child              The subclass.
	 */
	CTF_Core.Class.extend = function( protoProps, classProps ) {
		var child = inherits( this, protoProps, classProps );
		child.extend = this.extend;
		return child;
	};

	CTF_Core.Class.applicator = {};

	/**
	 * Initialize a class instance.
	 *
	 * Override this function in a subclass as needed.
	 */
	CTF_Core.Class.prototype.initialize = function() {};

	/*
	 * Checks whether a given instance extended a constructor.
	 *
	 * The magic surrounding the instance parameter causes the instanceof
	 * keyword to return inaccurate results; it defaults to the function's
	 * prototype instead of the constructor chain. Hence this function.
	 */
	CTF_Core.Class.prototype.extended = function( constructor ) {
		var proto = this;

		while ( typeof proto.constructor !== 'undefined' ) {
			if ( proto.constructor === constructor )
				return true;
			if ( typeof proto.constructor.__super__ === 'undefined' )
				return false;
			proto = proto.constructor.__super__;
		}
		return false;
	};
	
	CTF_Core.Input = CTF_Core.Class.extend({
	    initialize: function ( id, args ){
	    }
	});
	
	CTF_Core.Api = {};
	
	CTF_Core.Api.ctf_color = CTF_Core.Input.extend({
	});

    
    
})( wp, jQuery );