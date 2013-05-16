define(function (require, exports) {
    "use strict";

    var bus = require('bus'),
        view = require('views/products');

    var list = [];

    exports.create = function (container) {

        function render() {
            view.append(container, list);
        }

        function add(item) {
            list.push(item);

            console.log(list);
        }

        bus
            .on('compare:add', add)
            .reemit('compare:add', add);
    };

});