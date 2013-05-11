define(function (require, exports) {
    "use strict";

    require('mustache');

    var accounting = require('accounting'),
        template = require('text!../../templates/products.html');

    function format(obj){

        obj.totalcost = accounting.formatMoney(+obj.totalcost, "", 0, " ", " ");
        obj.price.value = accounting.formatMoney(+obj.price.value, "", 0, " ", " ");

        return obj;
    }

    exports.clear = function(container) {
        container.empty();

        return exports;
    };

    exports.append = function (container, data) {

        container.append(Mustache.to_html(template, { products: data.map(format) }));

        return exports;
    };

});