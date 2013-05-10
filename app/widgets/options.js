define(function (require, exports) {
    "use strict";

    var bus = require('bus');

    exports.create = function (container) {

        function emit(e, value) {
            bus.emit('value:changed', value);
        }

        function refresh() {
            var value = container.find('select').first().val();

            bus.emit('value:changed', value);
        }

        container.on('update', 'select, .slider .widget', emit);


        bus
            .on('app:ready', refresh)
            .reemit('app:ready', refresh);
    };

});