define(function (require, exports) {
    "use strict";

    require('jquery-ui');

    var $ = require('jquery'),
        bus = require('bus'),
        config = require('config');

    var DEFAULT = "07f2f6aa-8837-4606-ae9e-66acc0678623";

    exports.create = function (container) {

        require(['json!' + config.locations.url], function (data) {

            function onselect(e, data) {
                setTimeout(function(){ container.val(data.item.label)}, 100);
                bus.emit('region:changed', data.item.value);
            }

            function onopen() {
                var items = $('.ui-menu-item');

                console.log(items.size());
            }

            function change() {
                var len, i;

                for (i = 0, len = data.length; i < len; i++) {

                    if (data[i].value === DEFAULT) {
                        container.val(data[i].label)
                        break;
                    }

                }

                bus.emit('region:changed', data[i].value);
            }

            bus
                .on('app:ready', change)
                .reemit('app:ready', change);

            container
                .toggleClass('loading', false)
                .autocomplete({
                    source: data,
                    select: onselect,
                    open: onopen
                });

        });

    };

});