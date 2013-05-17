define(function (require, exports) {
    "use strict";

    require('mustache');

    var $ = require('jquery'),
        accounting = require('accounting'),
        template = require('text!../../templates/table.html');

    exports.clear = function(container) {
        container.empty();

        return exports;
    };

    exports.append = function (container, data) {
        var html = $(Mustache.to_html(template, { products: data, exists: data.length > 0  }));

        window.renderWidgets(html, function() {
            container.append(html);
        });

        return exports;
    };

});