
window.CTF_Core = window.CTF_Core || {};

(function( exports, $ ){

    CTF_Core.colorPicker = function( obj  ){

        console.log(obj);

        var callback = {},
            colorInput = obj.find('input.ctf-color-field');

        callback.change = function ( event, ui ) {};

        colorInput.wpColorPicker({
            change: callback.change
        });

        return callback;
    };
    
})( wp, jQuery );