define(function (require, exports) {
    "use strict";

    var bus = require('bus'),
        view = require('views/select'),
        model = require('models/options');

    exports.create = function (container, id) {

        function refresh(region) {

            model.select(id, region, function(err, data){

                if (err) {
                    throw err;
                }

                view.clear(container);
                view.append(container, data);

                container.trigger('update',  [ data[0].id ]);
            });

            container.toggleClass('loading', false);
        }

        function update(id) {
            container.val(id);
        }

        function onchange() {
            container.trigger('update',  [ container.val()]);
        }

        bus
            .on('value:changed', update)
            .on('region:changed', refresh)
            .reemit('region:changed', refresh);

        container.on('change', onchange);
    };

});